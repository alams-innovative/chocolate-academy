"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

// Workshop data
const workshops = [
  {
    id: "cdfa",
    title: "CDFA",
    duration: "1 month",
    charges: 60000,
    certification: "International Chocolate Academy",
    instructor: "Miss Faiza",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers , Pasta Passion , Seasoned Soups , steaks & sides Turkish Cusine , Hotpot mania , Breakfast around the world",
    ],
    baking: [
      "Donuts , Pizza , Breads masterclass, Macrons Cheesecake, Cupcakes Puffpastry , Classic cakes Brownies Artisian cakes, Hi tea , Tarts , Eclairs Bento cakes , eclairs , Pastry passion",
    ],
  },
  {
    id: "gdicp-8",
    title: "GDICP-8",
    duration: "4 month",
    charges: 390000,
    certification: "International Chocolate Academy GPDP Dubai , Typsy Austrailia , ICM-UK, Highfield level-2",
    instructor: "Miss Faiza , Miss saman , Sir Abdul -razak ,Sir Abdul-rehman , Sir taimoor",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers , Pasta Passion , Seasoned Soups , steaks & sides Turkish Cusine , Hotpot mania , Breakfast around the world,",
    ],
    baking: [
      "Donuts , Pizza , Breads masterclass, Macrons Cheesecake, Cupcakes Puffpastry , Classic cakes Brownies Artisian cakes, Hi tea , Tarts , Eclairs Bento cakes , eclairs , Pastry passion",
    ],
  },
  {
    id: "gdicfa-01",
    title: "GDICFA-01",
    duration: "4 month",
    charges: 395000,
    certification: "International Chocolate Academy GDICP Dubai, Tayloy Australia, ICM UK, Highfield level 2",
    instructor: "Miss Faiza , Miss saman , Sir Abdul -razak ,Sir Abdul-rehman , Sir taimoor",
    workshopDate: " (Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers , Pasta Passion , Seasoned Soups , steaks & sides Turkish Cusine , Hotpot mania , Breakfast around the world,",
    ],
    baking: [
      "Donuts , Pizza , Breads masterclass, Macrons Cheesecake, Cupcakes Puffpastry , Classic cakes Brownies Artisian cakes, Hi tea , Tarts , Eclairs Bento cakes , eclairs , Pastry passion",
    ],
  },
  {
    id: "barrista",
    title: "BARRISTA",
    duration: "1 month",
    charges: 60000,
    certification: "International Chocolate Academy",
    instructor: "Not Active",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers , Pasta Passion , Seasoned Soups , steaks & sides Turkish Cusine , Hotpot mania , Breakfast around the world,",
    ],
    baking: [
      "Donuts , Pizza , Breads masterclass, Macrons Cheesecake, Cupcakes Puffpastry , Classic cakes Brownies Artisian cakes, Hi tea , Tarts , Eclairs Bento cakes , eclairs , Pastry passion",
    ],
  },
  {
    id: "kids-summer-camp",
    title: "Kids Summer Camp",
    duration: "1 month",
    charges: 40000,
    certification: "International Chocolate Academy",
    instructor: "Amna",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers , Pasta Passion , Seasoned Soups , steaks & sides Turkish Cusine , Hotpot mania , Breakfast around the world",
    ],
    baking: [
      "Donuts, Pizza, Breads masterclass, Macroon Cheesecake, Cupcakes Puffpastry, Classic cakes Brownies Artisan cakes, Hi tea, Tarts, Éclairs Bento cakes, scrolls, Pastry passion",
    ],
  },
  {
    id: "kids-teen-splash",
    title: "Kids Teen Splash",
    duration: "1 month",
    charges: 40000,
    certification: "International Chocolate Academy",
    instructor: "Amna",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers, Pasta Passion, Seasoned foods, snacks & sides Turkish Cuisine, Hotpot menu, Breakfast around the world",
    ],
    baking: [
      "Donuts, Pizza, Breads masterclass, Macroon Cheesecake, Cupcakes Puffpastry, Classic cakes Brownies Artisan cakes, Hi tea, Tarts, Éclairs Bento cakes, scrolls, Pastry passion",
    ],
  },
  {
    id: "winter-camp",
    title: "Winter Camp",
    duration: "2 weeks",
    charges: 20000,
    certification: "International Chocolate Academy",
    instructor: "Amna",
    workshopDate: "(Dec-January )24",
    city: "Lahore",
    culinary: [
      "Masterclass on Burgers, Pasta Passion, Seasoned foods, snacks & sides Turkish Cuisine, Hotpot menu, Breakfast around the world",
    ],
    baking: [
      "Donuts, Pizza, Breads masterclass, Macroon Cheesecake, Cupcakes Puffpastry, Classic cakes Brownies Artisan cakes, Hi tea, Tarts, Éclairs Bento cakes, scrolls, Pastry passion",
    ],
  }
  ,{
    id: "cdfa-rwl",
    title: "CDFA ",
    duration: "1 month",
    charges: 50000,
    certification: "International Chocolate Academy",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Rawalpindi",
    culinary: [
      "",
    ],
    baking: [
      "Donuts, Turkish Desserts, Hi-tea workshop, Gluten free Cake, New year special, Dry Cakes, Macrons , Bread Workshop , Soups Special",
    ],
  },
  ,{
    id: "ccp-rwl",
    title: "CCP",
    duration: "2 month",
    charges: 195000,
    certification: "International Chocolate Academy Highfield level-2",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Rawalpindi",
    culinary: [
      "",
    ],
    baking: [
      "Donuts, Turkish Desserts, Hi-tea workshop, Gluten free Cake, New year special, Dry Cakes, Macrons , Bread Workshop , Soups Special",
    ],
  },
  {
    id: "cdfa-isl",
    title: "CDFA ",
    duration: "1 month",
    charges: 50000,
    certification: "International Chocolate Academy",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Islamabad",
    culinary: [
      "",
    ],
    baking: [
      "Bento Cake, Macrons , Classic Cake, Pasta , New year Special , Hi-tea, Basic Baking , Choux pastry , Dry Cakes",
    ],
  },
  ,{
    id: "ccp-isl",
    title: "CCP",
    duration: "2 month",
    charges: 195000,
    certification: "International Chocolate Academy Highfield level-2",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Islamabad",
    culinary: [
      "",
    ],
    baking: [
      "Bento Cake, Macrons , Classic Cake, Pasta , New year Special , Hi-tea, Basic Baking , Choux pastry , Dry Cakes",
    ],
  },
  {
    id: "cdfa-fsd",
    title: "CDFA ",
    duration: "1 month",
    charges: 50000,
    certification: "International Chocolate Academy",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Faisalabad",
    culinary: [
      "",
    ],
    baking: [
      "Cupcake workshop , Donuts Workshop , Bento Cake , Pasta workshop, Macrons Masterclasss",
    ],
  },
  ,{
    id: "ccp-fsd",
    title: "CCP",
    duration: "2 month",
    charges: 195000,
    certification: "International Chocolate Academy Highfield level-2",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Faisalabad",
    culinary: [
      "",
    ],
    baking: [
      "Cupcake workshop , Donuts Workshop , Bento Cake , Pasta workshop, Macrons Masterclasss",
    ],
  },
  {
    id: "cdfa-kar",
    title: "CDFA",
    duration: "1 month",
    charges: 60000,
    certification: "International Chocolate Academy",
    instructor: "Sir Ali Sadaqat",
    workshopDate: "(Dec-January )24",
    city: "Karachi",
    culinary: [
      " ",
    ],
    baking: [
      "Cupcake workshop , Donuts Workshop , Bento Cake , Pasta workshop, Macrons Masterclasss",
    ],
  },
  {
    id: "gdicp-8",
    title: "GDICP-8",
    duration: "4 month",
    charges: 390000,
    certification: "International Chocolate Academy GPDP Dubai , Typsy Austrailia , ICM-UK, Highfield level-2",
    instructor: "Sir Ali Sadaqat, Miss Aqsa",
    workshopDate: "(Dec-January )24",
    city: "Karachi",
    culinary: [
      " ",
    ],
    baking: [
      "Cupcake workshop , Donuts Workshop , Bento Cake , Pasta workshop, Macrons Masterclasss",
    ],
  },
  {
    id: "gdicfa-01",
    title: "GDICFA-01",
    duration: "4 month",
    charges: 395000,
    certification: "International Chocolate Academy GDICP Dubai, Tayloy Australia, ICM UK, Highfield level 2",
    instructor: "Sir Ali Sadaqat, Miss Aqsa",
    workshopDate: " (Dec-January )24",
    city: "Karachi",
    culinary: [
      "",
    ],
    baking: [
      "Cupcake workshop , Donuts Workshop , Bento Cake , Pasta workshop, Macrons Masterclasss",
    ],
  },
]

// Location data
const locations = ["All Cities", "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"]

export default function WorkshopsPage() {
  const [selectedCity, setSelectedCity] = useState("All Cities")

  // Filter workshops based on selected city
  const filteredWorkshops =
    selectedCity === "All Cities" ? workshops : workshops.filter((workshop) => workshop.city === selectedCity)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/courses/workshops-banner.png"
          alt="Chocolate Academy Workshops"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workshops & Courses</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/courses" className="hover:text-amber-400 transition-colors">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-amber-400">Workshops</span>
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

      {/* Workshops Content */}
      <section className="py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 text-[#3c2415] relative inline-block">
                  Filter by City
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"></span>
                </h3>
                <ul className="space-y-2 mb-8">
                  {locations.map((location, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCity(location)}
                        className={`flex items-center w-full text-left py-2 px-3 rounded-md transition-colors ${
                          selectedCity === location ? "bg-[#3c2415] text-white" : "text-[#3c2415] hover:bg-amber-100"
                        }`}
                      >
                        <span className={`mr-2 ${selectedCity === location ? "text-amber-400" : "text-amber-800"}`}>
                          {selectedCity === location ? "✓" : "❯"}
                        </span>
                        {location}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-[#3c2415] text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-3">Contact our course advisors for personalized guidance.</p>
                  <a
                    href="https://wa.me/923294329451?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white text-sm py-2 px-4 rounded flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Workshops List */}
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#3c2415]">
                  {selectedCity === "All Cities" ? "All Workshops" : `Workshops in ${selectedCity}`}
                </h2>
                <p className="text-[#3c2415] mb-4">
                  Explore our range of professional chocolate and culinary workshops designed to enhance your skills and
                  knowledge. From beginner to advanced levels, we offer courses for all skill levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-[#3c2415] text-xs px-3 py-1 rounded-full">
                    Professional Certification
                  </span>
                  <span className="bg-amber-100 text-[#3c2415] text-xs px-3 py-1 rounded-full">Hands-on Training</span>
                  <span className="bg-amber-100 text-[#3c2415] text-xs px-3 py-1 rounded-full">Expert Instructors</span>
                  <span className="bg-amber-100 text-[#3c2415] text-xs px-3 py-1 rounded-full">
                    Small Batch Classes
                  </span>
                </div>
              </div>

              {/* Workshop Items */}
              {filteredWorkshops.length > 0 ? (
                <div className="space-y-8">
                  {filteredWorkshops.map((workshop) => (
                    <div
                      key={workshop.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#3c2415]"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-[#3c2415]">{workshop.title}</h3>
                          <span className="bg-amber-100 text-[#3c2415] text-xs px-3 py-1 rounded-full">
                            {workshop.city}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-start mb-2">
                              <span className="font-semibold text-[#3c2415] w-24">Duration:</span>
                              <span className="text-[#3c2415]">{workshop.duration}</span>
                            </div>
                            <div className="flex items-start mb-2">
                              <span className="font-semibold text-[#3c2415] w-24">Charges:</span>
                              <span className="text-[#3c2415]">Rs. {workshop.charges.toLocaleString()}</span>
                            </div>
                            <div className="flex items-start mb-2">
                              <span className="font-semibold text-[#3c2415] w-24">Certification:</span>
                              <span className="flex-1 text-[#3c2415]">{workshop.certification}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start mb-2">
                              <span className="font-semibold text-[#3c2415] w-24">Instructor:</span>
                              <span className="flex-1 text-[#3c2415]">{workshop.instructor}</span>
                            </div>
                            <div className="flex items-start mb-2">
                              <span className="font-semibold text-[#3c2415] w-24">Workshop Date:</span>
                              <span className="text-[#3c2415]">{workshop.workshopDate}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-[#3c2415] mb-2">Culinary:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700">
                            {workshop.culinary.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-[#3c2415] mb-2">Baking:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700">
                            {workshop.baking.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-end">
                          <Link href={`/courses/register?course=${workshop.id}`}>
                            <Button className="bg-[#3c2415] hover:bg-[#5a3a28] text-white">Register Now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3c2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#3c2415] mb-2">No Workshops Found</h3>
                  <p className="text-gray-700 mb-4">
                    We couldn't find any workshops in this city at the moment. Please check back later or select another
                    city.
                  </p>
                  <Button
                    className="bg-[#3c2415] hover:bg-[#5a3a28] text-white"
                    onClick={() => setSelectedCity("All Cities")}
                  >
                    View All Workshops
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3c2415]">Why Choose Our Workshops</h2>

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
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from industry professionals with years of experience in chocolate making and culinary arts.
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Recognized Certification</h3>
              <p className="text-gray-700">
                Receive internationally recognized certifications that enhance your professional credentials.
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
                  <path d="M12 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"></path>
                  <path d="M12 22V12"></path>
                  <path d="M16 12h-8"></path>
                  <path d="M18 8c0-4.4-3.6-8-8-8S2 3.6 2 8s3.6 8 8 8h4c4.4 0 8 3.6 8 8v0c0-4.4-3.6-8-8-8h-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#3c2415]">Hands-on Experience</h3>
              <p className="text-gray-700">
                Gain practical skills through our hands-on approach, with small class sizes ensuring personalized
                attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-[#3c2415] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                course: "CDFA Graduate",
                quote:
                  "The CDFA course completely transformed my baking skills. The instructors were knowledgeable and supportive, and the hands-on experience was invaluable.",
              },
              {
                name: "Amir Khan",
                course: "GDICP-8 Graduate",
                quote:
                  "Enrolling in the GDICP-8 program was the best career decision I've made. The international certification has opened many doors for me professionally.",
              },
              {
                name: "Fatima Malik",
                course: "Kids Summer Camp Parent",
                quote:
                  "My daughter attended the Kids Summer Camp and absolutely loved it! She learned so much and can't wait to join the next program.",
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
                    <p className="text-amber-300 text-sm">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
