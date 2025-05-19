import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 bg-[#fdf6f0]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-[#3c2415]">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#3c2415]">WhatsApp Analytics</CardTitle>
                <CardDescription>Track and analyze WhatsApp button clicks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  View detailed analytics about WhatsApp button clicks across your website, including product interest,
                  city distribution, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admin/analytics" className="w-full">
                  <Button className="w-full bg-[#3c2415] hover:bg-[#5a3a28]">View Analytics</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3c2415]">Generate Test Data</CardTitle>
                <CardDescription>Create sample data for testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate mock WhatsApp click data to test the analytics dashboard functionality without waiting for
                  real user interactions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admin/analytics/mock" className="w-full">
                  <Button className="w-full" variant="outline">
                    Generate Mock Data
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#3c2415]">Website Management</CardTitle>
                <CardDescription>Manage website content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Update products, courses, and other website content. Manage images, descriptions, and pricing.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
