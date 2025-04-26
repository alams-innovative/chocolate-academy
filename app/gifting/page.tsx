import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GiftingPage() {
  const giftingCategories = [
    {
      title: "Corporate Gifting",
      description: "Impress clients and reward employees with our premium corporate chocolate gifts.",
      image: "/images/gifting/corporate-gifting.webp",
      href: "/gifting/corporate",
    },
    {
      title: "Wedding Gifting",
      description: "Make your special day even sweeter with our elegant wedding favors and gifts.",
      image: "/images/gifting/wedding.webp",
      href: "/gifting/wedding",
    },
    {
      title: "Birthday Gifting",
      description: "Celebrate birthdays with our delightful chocolate arrangements and gift boxes.",
      image: "/images/gifting/birthday-gifting.webp",
      href: "/gifting/birthday",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/gifting/gifting-banner.png"
          alt="Chocolate Gifting"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gifting</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-amber-400">Gifting</span>
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

      {/* Intro Section */}
      <section className="py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3c2415]">Events & Occasions</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-12">
            Our signature boxes are perfectly made to flourish your events with the suavity of our personalized treats.
            Cater to your occasion by sending your love hemmed-in chocolate favor boxes. Uplift your event with
            Chocolate Academy Pakistan.
          </p>

          {/* Gifting Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftingCategories.map((category, index) => (
              <Link key={index} href={category.href} className="block group">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{category.description}</p>
                    <div className="bg-amber-500 text-white text-sm font-bold py-2 px-4 rounded-full inline-block transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Explore More
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3c2415]">Why Choose Our Gifting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fdf6f0] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Premium Packaging</h3>
              <p className="text-gray-700">
                Our gifts come in elegant, customizable packaging that makes a statement before they're even opened.
              </p>
            </div>

            <div className="bg-[#fdf6f0] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Handcrafted Quality</h3>
              <p className="text-gray-700">
                Each chocolate is handcrafted with premium ingredients and attention to detail for exceptional taste.
              </p>
            </div>

            <div className="bg-[#fdf6f0] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3c2415] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Customization Options</h3>
              <p className="text-gray-700">
                Personalize your gifts with custom messages, branding, or specific flavor selections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-[#3c2415] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                role: "Corporate Client",
                quote:
                  "The corporate gift boxes were a huge hit with our clients. The presentation was elegant and the chocolates were delicious. Will definitely order again for our next event.",
              },
              {
                name: "Amir Khan",
                role: "Wedding Planner",
                quote:
                  "We ordered wedding favors for a high-profile wedding and the team at Chocolate Academy delivered beyond our expectations. The customized packaging matched our theme perfectly.",
              },
              {
                name: "Fatima Malik",
                role: "Birthday Celebration",
                quote:
                  "I ordered a birthday gift box for my mother and she was thrilled! The chocolates were fresh and the presentation was beautiful. Thank you for making her day special.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#5a3a28] p-6 rounded-lg relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <path d="M11.3 6.2H9.8c-2.7 0-5.8 1-5.8 5.5v.2c0 2.4 1.8 4.4 4.1 4.4 2.3 0 4.1-1.8 4.1-4.1 0-2.2-1.8-4.1-4.1-4.1h-.1c.1-1.6 1.4-2.2 3.3-2.2V6.2zm8.7 0h-1.5c-2.7 0-5.8 1-5.8 5.5v.2c0 2.4 1.8 4.4 4.1 4.4 2.3 0 4.1-1.8 4.1-4.1 0-2.2-1.8-4.1-4.1-4.1h-.1c.1-1.6 1.4-2.2 3.3-2.2V6.2z"></path>
                  </svg>
                </div>
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-white">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-amber-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3c2415]">Ready to Order?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Contact us today to discuss your gifting needs. We offer bulk discounts for corporate orders and can create
            custom packages for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923294329451?text=Hello,%20I'm%20interested%20in%20ordering%20chocolate%20gifts%20from%20Chocolate%20Academy%20Pakistan."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Contact on WhatsApp
              </button>
            </a>
            <Link href="/contact">
              <button className="bg-[#3c2415] hover:bg-[#5a3a28] text-white px-6 py-3 rounded-full">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
