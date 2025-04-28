import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3c2415] to-[#2a1a0f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-[#5a3a28] pb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image src="/images/logo.webp" alt="Chocolate Academy" width={180} height={50} className="h-12 w-auto" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block mr-2 text-amber-400 font-medium">FOLLOW US</span>
            {[
              { Icon: Facebook, href: "https://facebook.com/chocolateacademy.pk", label: "Facebook" },
              { Icon: Instagram, href: "https://instagram.com/chocolateacademy.pk", label: "Instagram" },
              { Icon: Twitter, href: "https://twitter.com/chocolateacademy_pk", label: "Twitter" },
            ].map(({ Icon, href, label }, index) => (
              <Link
                key={index}
                href={href}
                aria-label={label}
                className="bg-[#5a3a28] p-2.5 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              ABOUT US
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></span>
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              The Chocolate Academy™ center Pakistan is dedicated to the art of chocolate making, offering world-class
              training and the finest chocolate products crafted with passion and expertise.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 columns-2">
              {[
                { name: "ABOUT US", href: "/about" },
                { name: "PRODUCTS", href: "/shop" },
                { name: "SHOP", href: "/shop" },
                { name: "COURSES", href: "/courses/workshops" },
                { name: "GALLERY", href: "/gallery" },
                { name: "CONTACT", href: "/contact" },
                { name: "GIFTING", href: "/gifting" },
              ].map((item, index) => (
                <li key={index} className="break-inside-avoid">
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 text-amber-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              PRODUCTS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { name: "CHOCOLATE BONBONS", href: "/shop#chocolate-bonbons" },
                { name: "CAKES", href: "/shop#cakes" },
                { name: "BROWNIES", href: "/shop#brownies" },
                { name: "WORKSHOPS", href: "/shop#workshops" },
                { name: "HEALTHY SNACKS", href: "/shop#healthy-snacks" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 text-amber-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              CONTACT US
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Plot No. 20-C, Lane 12, Bukhari Commercial, Phase 6, DHA, Karachi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>+92 21 3584 0033</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>info@chocolateacademy.com.pk</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button className="bg-amber-700 hover:bg-amber-600 text-white rounded-md px-6 py-2 text-sm">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-[#5a3a28] pt-8 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/favicon.webp"
              alt="Chocolate Icon"
              width={40}
              height={40}
              className="mx-auto opacity-80"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chocolate Academy Pakistan. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 text-xs text-gray-500">
            Powered by <a href="http://alamsinnovative.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-amber-400 hover:underline">alamsinnovate</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
