import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { WhatsAppClickEvent, AnalyticsData } from "@/lib/analytics"

// File path for storing analytics data
const dataFilePath = path.join(process.cwd(), "data", "analytics.json")

// Ensure the data directory exists
const ensureDirectoryExists = () => {
  try {
    const dir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    return true
  } catch (error) {
    console.error("Error creating directory:", error)
    return false
  }
}

// Get existing analytics data or create new data structure
const getAnalyticsData = (): AnalyticsData => {
  try {
    if (!ensureDirectoryExists()) {
      return { whatsappClicks: [] }
    }

    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, "utf8")
      try {
        return JSON.parse(data)
      } catch (parseError) {
        console.error("Error parsing analytics data:", parseError)
        return { whatsappClicks: [] }
      }
    }
  } catch (error) {
    console.error("Error reading analytics data:", error)
  }

  // Return empty data structure if file doesn't exist or there's an error
  return { whatsappClicks: [] }
}

// Save analytics data to file
const saveAnalyticsData = (data: AnalyticsData): boolean => {
  try {
    if (!ensureDirectoryExists()) {
      return false
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    console.error("Error saving analytics data:", error)
    return false
  }
}

// In-memory fallback for environments where file system access is restricted
const inMemoryStore: AnalyticsData = { whatsappClicks: [] }

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("Received tracking data:", body)

    // Validate required fields
    if (!body.url) {
      return NextResponse.json({ error: "Missing required field: url" }, { status: 400 })
    }

    // Create event object with fallbacks for optional fields
    const event: WhatsAppClickEvent = {
      productId: body.productId || undefined,
      productName: body.productName || "Not specified",
      url: body.url,
      city: body.city || "not-specified",
      source: body.source || "unknown",
      buttonLocation: body.buttonLocation || "unknown",
      timestamp: new Date().toISOString(),
      userAgent: body.userAgent || undefined,
    }

    // Try to save to file system first
    let saveSuccess = false
    try {
      // Get existing data and add new event
      const analyticsData = getAnalyticsData()
      analyticsData.whatsappClicks.push(event)

      // Save updated data
      saveSuccess = saveAnalyticsData(analyticsData)
    } catch (fsError) {
      console.error("File system error:", fsError)
      saveSuccess = false
    }

    // If file system fails, use in-memory storage
    if (!saveSuccess) {
      console.log("Using in-memory storage for analytics")
      inMemoryStore.whatsappClicks.push(event)
    }

    console.log("Successfully tracked WhatsApp click")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error tracking WhatsApp click:", error)
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
  }
}

export async function GET() {
  console.log('GET request received for /api/track');
  try {
    const analyticsData = getAnalyticsData();
    console.log('Analytics data retrieved:', analyticsData);
    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Error retrieving analytics data:', error);
    return NextResponse.json({ error: 'Failed to retrieve analytics data' }, { status: 500 });
  }
}
