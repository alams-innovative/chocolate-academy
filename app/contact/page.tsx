"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your server
      // which would then email it to alams.com.ai@gmail.com
      console.log("Form submitted:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Toaster />

      {/* Page Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/Contact-us.jpg"
          alt="Contact Chocolate Academy"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-amber-400">Contact</span>
          </div>
        </div>
        {/* Decorative chocolate drip */}
        <div className="absolute -bottom-3 left-0 w-full overflow-hidden h-3">
          <div
            className="w-full h-12"
            style={{
              backgroundImage: "url('/images/chocolate-drip.png')",
              backgroundSize: "contain",
              backgroundRepeat: "repeat-x",
            }}
          ></div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#3c2415]">Call Us</h3>
              <p className="text-gray-700 mb-2">Lahore: 0309-3336142</p>
              <p className="text-gray-700 mb-2">Islamabad: 0326-8079985</p>
              <p className="text-gray-700 mb-2">Karachi: 0333-6669828</p>
              <p className="text-gray-700">Faisalabad: 0309-7778646</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#3c2415]">Email Us</h3>
              <p className="text-gray-700 mt-4 mb-2">Course Information:</p>
              <a href="mailto:courses@chocolateacademy.com.pk" className="text-amber-800 hover:underline">
                courses@chocolateacademy.com.pk
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#3c2415]">Working Hours</h3>
              <p className="text-gray-700 mb-2">Monday - Friday:</p>
              <p className="font-semibold text-[#3c2415] mb-4">9:00 AM - 6:00 PM</p>
              <p className="text-gray-700 mb-2">Saturday:</p>
              <p className="font-semibold text-[#3c2415] mb-4">10:00 AM - 4:00 PM</p>
              <p className="text-gray-700 mb-2">Sunday:</p>
              <p className="font-semibold text-[#3c2415]">Closed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#3c2415]">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-[#3c2415]">
                    Full Name <span className="text-red-500 ">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 rounded bg-black text-white placeholder:text-gray-300 mb-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#3c2415]">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full p-3 rounded bg-black text-white placeholder:text-gray-300 mb-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#3c2415]">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded bg-black text-white placeholder:text-gray-300 mb-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#3c2415]">Subject</Label>
                  <RadioGroup
                    value={formData.subject}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="General Inquiry" id="general" />
                      <Label htmlFor="general" className="cursor-pointer text-[#3c2415]">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Course Information" id="course" />
                      <Label htmlFor="course" className="cursor-pointer text-[#3c2415]">
                        Course Information
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Corporate Order" id="corporate" />
                      <Label htmlFor="corporate" className="cursor-pointer text-[#3c2415]">
                        Corporate Order
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Feedback" id="feedback" />
                      <Label htmlFor="feedback" className="cursor-pointer text-[#3c2415]">
                        Feedback
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#3c2415]">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-3 rounded bg-black text-white placeholder:text-gray-300 mb-4"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#3c2415] hover:bg-[#5a3a28] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#3c2415]">Our Locations</h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                  <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#3c2415]">Locations</h3>
                  <p className="text-gray-700 mb-2">Lahore:</p>
                  <p className="font-semibold text-[#3c2415] mb-4">185, New Muslim Town Abu-Bakar Block Garden Town, Lahore.</p>
                  <p className="text-gray-700 mb-2">Rawalpindi:</p>
                  <p className="font-semibold text-[#3c2415] mb-4">57A Iran Rd, opposite PSO Pump, Block A Satellite Town, Rawalpindi.</p>
                  <p className="text-gray-700 mb-2">Islamabad:</p>
                  <p className="font-semibold text-[#3c2415]">Plot No.14-B, 2nd Floor, Sadiq Plaza, G-9 Markaz, Islamabad.</p>
                  <p className="text-gray-700 mb-2">Karachi:</p>
                  <p className="font-semibold text-[#3c2415]">F-22 Liaquat National Hospital Rd, near Tv Station, Dawood Society CHS, Karachi.</p>
                  <p className="text-gray-700 mb-2">Faisalabad:</p>
                  <p className="font-semibold text-[#3c2415]">5 Y, Faizan E madina Road, Opposite Mujahid Hospital، Main Susan Road, Block Z Madina Town, Faisalabad.</p>
                  </div>

                

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-[#3c2415] flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-amber-800" />
                    Connect on WhatsApp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For quick responses, connect with us on WhatsApp. Our customer service team is available during
                    business hours.
                  </p>
                  <a
                    href="https://wa.me/923248842000?text=Hello,%20I'd%20like%20to%20inquire%20about%20Chocolate%20Academy%20Pakistan."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="currentColor"
                        strokeWidth="0"
                        className="mr-2"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#3c2415]">Find Us on the Map</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.28906945606!2d74.31958972389957!3d31.516219647350212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c9e638283d%3A0xdc5f3f069b07007!2sChocolate%20Academy%20Pakistan!5e0!3m2!1sen!2s!4v1745667155798!5m2!1sen!2s" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chocolate Academy Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#3c2415]">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-[#3c2415]">What are your business hours?</h3>
              <p className="text-gray-700">
                We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are
                closed on Sundays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-[#3c2415]">How can I enroll in a course?</h3>
              <p className="text-gray-700">
                You can enroll in our courses by visiting our Courses page, selecting your desired program, and
                completing the registration form. Alternatively, you can contact us directly for assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-[#3c2415]">Do you offer corporate orders?</h3>
              <p className="text-gray-700">
                Yes, we offer customized corporate gifting solutions. Please contact us with your requirements, and our
                team will assist you in creating the perfect chocolate gifts for your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-[#3c2415]">How long does it take to respond to inquiries?</h3>
              <p className="text-gray-700">
                We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we
                recommend contacting us directly by phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
