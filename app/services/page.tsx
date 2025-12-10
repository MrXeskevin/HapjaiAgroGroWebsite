"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Services() {
  const products = [
    {
      title: "Fertilizers",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/fertilizers.jpg",
    },
    {
      title: "Seeds",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/img-20250808-wa0069.jpg",
    },
    {
      title: "Crop Chemicals",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/crop-chemicals.jpg",
    },
    {
      title: "Tools & Sprayers",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/tools-sprayers.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 lg:px-6 bg-gradient-to-r from-green-100 to-green-50">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Agro-Input Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{product.desc2}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Order Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agricultural Consultancy</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Good Agronomic Practices (GAP) training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Financial literacy & enterprise planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Crop protection & nutrition schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Farmer group mobilization and coaching</span>
                </li>
              </ul>
              <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">Request Consultancy</Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/whatsapp-image-2025-08-08-at-07.jpg"
                alt="Agricultural advisory and training"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
