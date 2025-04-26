import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#fdf6f0] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-amber-800 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop" className="hover:text-amber-800 transition-colors">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link
              href={`/shop#${product.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-amber-800 transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-amber-800">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden h-24 cursor-pointer hover:ring-2 hover:ring-amber-800 transition-all"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-[#3c2415] mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(12 Reviews)</span>
                </div>

                <div className="text-2xl font-bold text-amber-800 mb-6">Rs. {product.price.toLocaleString()}</div>

                <p className="text-gray-700 mb-6">{product.description}</p>

                {product.dietary && product.dietary.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Dietary:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.dietary.map((diet, index) => (
                        <span
                          key={index}
                          className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/923294329451?text=${encodeURIComponent(
                      `Hello, I'm interested in the ${product.name} from Chocolate Academy Pakistan. Product URL: ${product.slug}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
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
                      Order on WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col space-y-2">
                    <div className="flex">
                      <span className="text-gray-700 font-semibold w-24">SKU:</span>
                      <span className="text-gray-600">{product.sku}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-700 font-semibold w-24">Category:</span>
                      <span className="text-gray-600">{product.category}</span>
                    </div>
                    {product.weight && (
                      <div className="flex">
                        <span className="text-gray-700 font-semibold w-24">Weight:</span>
                        <span className="text-gray-600">{product.weight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white rounded-t-lg">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="reviews">Reviews (12)</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="bg-white p-6 rounded-b-lg shadow-md">
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <p>
                    Our {product.name} is crafted with the finest ingredients, ensuring a delightful experience with
                    every bite. Perfect for gifting or treating yourself to a moment of indulgence.
                  </p>
                  <p>
                    At Chocolate Academy, we pride ourselves on creating chocolates that are not only delicious but also
                    visually stunning. Each piece is handcrafted with attention to detail and passion for the art of
                    chocolate making.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="ingredients" className="bg-white p-6 rounded-b-lg shadow-md">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-bold mb-4">Ingredients</h3>
                  <p>
                    Premium chocolate (cocoa mass, cocoa butter, sugar, soy lecithin, natural vanilla), cream, butter,
                    glucose syrup, natural flavors.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Allergen Information:</strong> May contain traces of nuts, milk, and gluten. Please check
                    product packaging for specific allergen information.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="bg-white p-6 rounded-b-lg shadow-md">
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-semibold">Customer {i + 1}</div>
                        <div className="text-gray-500 text-sm">{new Date().toLocaleDateString()}</div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 5 - i ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        {i === 0
                          ? "Absolutely delicious! The chocolate was rich and flavorful. Will definitely order again."
                          : i === 1
                            ? "Great product, arrived in perfect condition. The taste is amazing and not too sweet."
                            : "Loved the packaging and the chocolate was divine. Perfect gift for chocolate lovers."}
                      </p>
                    </div>
                  ))}

                  <Button className="bg-[#3c2415] hover:bg-[#5a3a28]">Write a Review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#3c2415] relative inline-block">
            Related Products
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
