import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/about/about-us.jpg"
          alt="About Chocolate Academy"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center text-sm">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-amber-400">About Us</span>
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

      {/* CEO Section */}
      <section className="py-16 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <h2 className="text-3xl font-bold text-center relative z-10 text-[#3c2415] ">Chief Executive Officer</h2>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-8 bg-amber-200 opacity-40 rounded-full -z-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="prose prose-lg max-w-none">
                  <p className="relative pl-4 border-l-4 border-amber-800 mb-6 text-[#3c2415]">
                    There are more young CEOs today than ever before, whether it is due to profligate inheritance, a
                    family business, or own entrepreneurial success. But the rules of the game became tougher when it
                    comes to a woman. Many incredible stories inspire you to achieve more. Zainab Shafiq is one of the
                    names who is credited to become supposedly the youngest CEO in Pakistan.
                  </p>

                  <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-[1.01]">
                    <p className="text-[#3c2415]">
                      Zainab has been lucky enough to have had good support and advice. Her current obsession with
                      chocolate has led her to establish chocolate academy and take the step into entrepreneurism where
                      she focuses on her online shop and keeping up-to-date social media links.
                    </p>
                  </div>

                  <p className="text-[#3c2415]">
                    Her plan and ambition is to work on a chocolates that would meet the expectations of all gourmets,
                    whether they are allergic (to lactose in particular) or vegan, and always with the guarantee of a
                    product, pure and authentic, far from industrial production.
                  </p>

                  <div className="bg-[#3c2415] text-white p-6 rounded-lg shadow-md my-6">
                    <p className="italic">
                      "While holding down her high school and another small business, she is zealously working and
                      burning her midnight oil to run Pakistan's first dedicated chocolate and pastry academy."
                    </p>
                  </div>

                  <p className="text-[#3c2415]">
                    Children enrolled in International Chocolate and Pastry Academy have the opportunity to participate
                    in educational classes in a state-of-the-art kitchen. The unparalleled curriculum at Chocolate
                    Academy provides new classes each week and ongoing program additions allowing students an
                    opportunity to explore new themes, recipes, techniques, and so much more, all while doing fun
                    activities.
                  </p>

                  <div className="bg-amber-100 p-6 rounded-lg shadow-md my-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: "url('/images/chocolate-icon.png')",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                    <p className="text-[#3c2415]">
                      But what's in it for you? Zainab strives not only to create super tasty chocolates but also to
                      share her passions openly by offering classes to everyone and tasting events. Plus there are
                      always free samples to be had!!
                    </p>
                  </div>

                  <p className="text-[#3c2415]">
                    Recently, against the backdrop of Global Youth Tourism Summit, Zainab Shafiq attended the landmark
                    Summit happening in Italy. The program included interactive activities oriented towards the
                    Sustainable Development Goals and how they interact with tourism.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="sticky top-24">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-amber-800 rounded-lg"></div>
                    <div className="relative z-10 bg-white p-3 rounded-lg shadow-lg">
                      <Image
                        src="/images/about/about.webp"
                        alt="Zainab Shafiq - CEO"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>

                  <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-[#3c2415]">Achievements</h3>
                    <ul className="space-y-3 text-[#3c2415]">
                      {[
                        "Youngest CEO in Pakistan",
                        "Established Pakistan's first chocolate academy",
                        "Participated in Global Youth Tourism Summit",
                        "Advocate for sustainable development",
                        "Entrepreneur while still in high school",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-800 mr-2">✓</span>
                          <span className="text-[#3c2415]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Button asChild className="w-full bg-[#3c2415] hover:bg-[#5a3a28] text-white">
                        <Link href="/courses/workshops">Join Our Classes</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#3c2415] text-white p-8 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/chocolate-swirl.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></span>
              </h3>
              <p className="mb-4">
                To create a chocolate experience that delights all senses while maintaining the highest standards of
                quality and authenticity. We aim to educate and inspire the next generation of chocolate artisans
                through our academy.
              </p>
              <p>
                We are committed to sourcing the finest ingredients and creating products that cater to all dietary
                needs, including vegan and lactose-free options, without compromising on taste or quality.
              </p>
            </div>

            <div className="bg-amber-100 p-8 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/cocoa-beans.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3c2415] relative">
                Our Vision
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#3c2415]"></span>
              </h3>
              <p className="mb-4 text-[#3c2415]">
                To be recognized as Pakistan's premier destination for chocolate education and fine chocolate products.
                We envision a community where the art of chocolate making is celebrated and accessible to all.
              </p>
              <p className="text-[#3c2415]">
                We strive to be at the forefront of chocolate innovation while honoring traditional techniques, creating
                a legacy of excellence that inspires future generations of chocolate enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-[#fdf6f0] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#3c2415]">Join Our Chocolate Journey</h2>
            <p className="text-lg mb-8 text-[#3c2415]">
              Whether you're looking to learn the art of chocolate making, purchase our premium products, or simply
              indulge in the world of fine chocolate, we invite you to be part of our sweet community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#3c2415] hover:bg-[#5a3a28] text-white">
                <Link href="/courses/workshops">Explore Our Classes</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#3c2415] hover:bg-[#3c2415] hover:text-white">
                <Link href="/shop">Shop Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
