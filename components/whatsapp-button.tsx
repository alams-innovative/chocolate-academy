"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { trackWhatsAppClick } from "@/lib/analytics"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  productId?: string
  productName?: string
  city?: string
  source: string
  buttonLocation: string
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButton({
  phoneNumber,
  message = "",
  productId,
  productName,
  city,
  source,
  buttonLocation,
  className = "",
  children,
}: WhatsAppButtonProps) {
  const [isTracking, setIsTracking] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (isTracking) return // Prevent double clicks

    setIsTracking(true)

    try {
      // Format phone number (remove any non-digit characters)
      const formattedPhone = phoneNumber.replace(/\D/g, "")

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message)

      // WhatsApp URL
      const whatsappUrl = `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`

      // Track the click
      await trackWhatsAppClick({
        productId,
        productName,
        city,
        source,
        buttonLocation,
      })

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")
    } catch (error) {
      console.error("Error handling WhatsApp click:", error)
    } finally {
      setIsTracking(false)
    }
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}${message ? `?text=${encodeURIComponent(message)}` : ""}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children || (
        <Button className={`bg-green-600 hover:bg-green-700 ${isTracking ? "opacity-75" : ""}`} disabled={isTracking}>
          {isTracking ? "Opening WhatsApp..." : "Contact via WhatsApp"}
        </Button>
      )}
    </a>
  )
}
