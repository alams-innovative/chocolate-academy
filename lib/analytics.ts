// Analytics tracking for WhatsApp clicks
export type WhatsAppClickEvent = {
  productId?: string
  productName?: string
  url: string
  city?: string
  source: string // Which page or component the click came from
  buttonLocation: string // Where on the page the button is located
  timestamp: string
  userAgent?: string
}

export type AnalyticsData = {
  whatsappClicks: WhatsAppClickEvent[]
}

// Reusable tracking function that can be imported anywhere in the app
export const trackWhatsAppClick = async (data: {
  productId?: string
  productName?: string
  city?: string
  source: string
  buttonLocation: string
}) => {
  try {
    if (typeof window === "undefined") return // Only run on client side

    // Log to console for debugging
    console.log("Tracking WhatsApp click:", data)

    const response = await fetch("/api/register/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: data.productId,
        productName: data.productName,
        url: window.location.href,
        city: data.city || "not-specified",
        source: data.source,
        buttonLocation: data.buttonLocation,
        userAgent: navigator.userAgent,
      }),
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const result = await response.json()
    console.log("Tracking result:", result)
    return result
  } catch (error) {
    console.error("Error tracking WhatsApp click:", error)
    return { error: true, message: error instanceof Error ? error.message : "Unknown error" }
  }
}
