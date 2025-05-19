import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Chocolate Academy",
  description:
    "Get in touch with Chocolate Academy Pakistan. Find our locations, contact information, and working hours.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/contact-us.jpg"
          alt="Contact Us"
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

      {/* Main Content */}
      <section className="py-16 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-[#3c2415]">Get In Touch</h2>
              <p className="mb-8 text-[#3c2415]">
                We'd love to hear from you! Whether you have a question about our courses, products, or services, our
                team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#3c2415] p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3c2415] mb-1">Email Us</h3>
                    <p className="text-[#3c2415]">courses@chocolateacademy.com.pk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3c2415] p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3c2415] mb-1">Working Hours</h3>
                    <p className="text-[#3c2415]">Monday – Friday: 9:00 AM to 6:00 PM</p>
                    <p className="text-[#3c2415]">Saturday: 9:00 AM to 5:00 PM</p>
                    <p className="text-[#3c2415]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-[#3c2415]">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#3c2415]">
                          Your Name
                        </label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#3c2415]">
                          Your Email
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-[#3c2415]">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#3c2415]">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-[#3c2415] hover:bg-[#5a3a28]">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3c2415]">Our Campuses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Lahore",
                  address: "185, New Muslim Town Abu Bakar Block Garden Town, Lahore, 54000",
                  phone: "0309-3336142",
                },
                {
                  name: "Rawalpindi",
                  address: "57A Iran Rd, opposite PSO Pump, Block A Satellite Town, Rawalpindi, 43600",
                  phone: "0309-3336144",
                },
                {
                  name: "Islamabad",
                  address: "Plot No.14-B, 2nd Floor, Sadiq Plaza, Markaz, G-9 Markaz G 9 Markaz G-9, Islamabad, 44000",
                  phone: "0326-8079985",
                },
                {
                  name: "Karachi",
                  address:
                    "F-22 Liaquat National Hospital Rd, near Tv Station, Dawood Society Dawood CHS, Karachi, 74800",
                  phone: "0333-6669828",
                },
                {
                  name: "Faisalabad",
                  address: "House No, 72 Officers Colony No. 1, Madina Town, Faisalabad",
                  phone: "0309-7778646",
                },
                {
                  name: "Sarai Alamgir",
                  address: "Al-Ghani Plaza, Main GT Rd, Sarai Alamgir, 50000",
                  phone: "0300-8400376",
                },
                {
                  name: "DHA",
                  address: "2nd Floor CSD Shopping Mall Cavalry Ground, Lahore",
                  phone: "0309-3336142",
                },
              ].map((campus, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#3c2415]">{campus.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-[#3c2415]">{campus.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                        <p className="text-sm text-[#3c2415]">{campus.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#3c2415]">Find Us</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5302959096513!2d74.33292491511566!3d31.505304981374592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f0a0f9b9c3%3A0x4b0e3a9f7a2b0e1a!2sChocolate%20Academy%20Pakistan!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
