"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Menu, ChevronDown, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export default function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    { name: "ABOUT US", href: "/about" },
    { name: "SHOP", href: "/shop" },
    { name: "GIFTING", href: "/gifting" },
    {
      name: "COURSES ▾",
      href: "#",
      dropdown: [
        { name: "Workshops", href: "/courses/workshops" },
        { name: "Intensive Programs", href: "/courses/intensive-programs" },
      ],
    },
    { name: "CONTACT US", href: "/contact" },
    { name: "GALLERY", href: "/gallery" },
    // { name: "BLOG", href: "/blog" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#3c2415] text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xs flex items-center">
            <span className="hidden md:inline-block mr-4">Welcome to Chocolate Academy Pakistan</span>
            <a href="tel:+923248842000" className="hover:text-amber-400 transition-colors">
              Call Us: 0324-8842000
            </a>
          </div>
          <div className="text-xs flex items-center space-x-4">
            <a
              href="https://wa.me/923248842000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#3c2415]/95 backdrop-blur-sm shadow-lg py-2"
            : "bg-gradient-to-r from-[#3c2415] to-[#5a3a28] py-3"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/images/chocolate-pattern.png')",
              backgroundSize: "200px",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#3c2415] text-white border-r-[#5a3a28] w-[300px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <Link href="/" className="relative group" onClick={() => setIsMenuOpen(false)}>
                        <Image
                          src="/images/logo.webp"
                          alt="Chocolate Academy"
                          width={150}
                          height={40}
                          className="h-10 w-auto"
                        />
                      </Link>
                      <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-1">
                      {menuItems.map((item, index) =>
                        item.dropdown ? (
                          <div key={index} className="space-y-1">
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium hover:bg-[#2a1a0f] rounded-md whitespace-nowrap"
                            >
                              {item.name}
                              <div className="flex items-center ml-2">
                                <span className="text-amber-400 text-xs mr-1">
                                  {activeDropdown === item.name ? "▲" : "▼"}
                                </span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    activeDropdown === item.name ? "rotate-180" : ""
                                  }`}
                                />
                              </div>
                            </button>
                            {activeDropdown === item.name && (
                              <div className="pl-6 space-y-1 animate-in slide-in-from-left-5 duration-200">
                                {item.dropdown.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-sm font-medium hover:bg-[#2a1a0f] rounded-md whitespace-nowrap"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={item.href}
                            className="px-3 py-2 text-sm font-medium hover:bg-[#2a1a0f] rounded-md whitespace-nowrap"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ),
                      )}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-[#5a3a28]">
                      <div className="flex justify-center space-x-4">
                        {["facebook", "instagram", "twitter"].map((social) => (
                          <a
                            key={social}
                            href={`#${social}`}
                            className="text-white hover:text-amber-400 transition-all duration-300 hover:scale-110"
                          >
                            <div className="bg-[#5a3a28] p-2 rounded-full">
                              <Image src={`/images/social/${social}.svg`} alt={social} width={18} height={18} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex-1 flex justify-start">
              <Link href="/" className="relative group">
                <div className="overflow-hidden">
                  <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/images/logo.webp"
                      alt="Chocolate Academy"
                      width={180}
                      height={50}
                      className={`h-12 w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-amber-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <button className="relative px-3 py-2 text-xs font-medium overflow-hidden group flex items-center whitespace-nowrap">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-400 text-white">
                          {item.name}
                        </span>
                        <ChevronDown className="h-3 w-3 ml-1 opacity-70 group-hover:text-amber-400 text-white" />
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#2a1a0f] transition-all duration-300 group-hover:h-full -z-0"></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#3c2415] border-[#5a3a28] text-white min-w-[180px]">
                      {item.dropdown.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link
                            href={subItem.href}
                            className="cursor-pointer hover:bg-[#2a1a0f] hover:text-amber-400 focus:bg-[#2a1a0f] focus:text-amber-400"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="relative px-3 py-2 text-xs font-medium overflow-hidden group whitespace-nowrap"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-400 text-white">
                      {item.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#2a1a0f] transition-all duration-300 group-hover:h-full -z-0"></span>
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center space-x-4 flex-1 justify-end">
              <span className="text-white text-sm font-semibold mr-2">Follow us</span>
              <a href="https://instagram.com/chocolateacademy.pk" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative chocolate drip - only show when not scrolled */}
        {!isScrolled && (
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
        )}
      </header>
    </>
  )
}
