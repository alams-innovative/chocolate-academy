import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { clearWhatsAppClicks } from "@/lib/analytics"

export async function POST() {
  try {
    // Clear in-memory storage
    clearWhatsAppClicks()

    // Clear file storage
    const dataDir = path.join(process.cwd(), "data")
    const filePath = path.join(dataDir, "analytics.json")

    // Create empty data structure
    const emptyData = {
      whatsappClicks: [],
    }

    // Ensure directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Write empty data to file
    fs.writeFileSync(filePath, JSON.stringify(emptyData, null, 2))

    return NextResponse.json({ success: true, message: "Analytics data cleared successfully" })
  } catch (error) {
    console.error("Error clearing analytics data:", error)
    return NextResponse.json(
      { success: false, message: "Failed to clear analytics data", error: String(error) },
      { status: 500 },
    )
  }
}
