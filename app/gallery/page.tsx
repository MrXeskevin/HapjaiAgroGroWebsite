"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Gallery() {
  const images = [
    { alt: "Coffee nursery seedlings - Quality crop development", src: "/images/img-20250808-wa0070.jpg" },
    { alt: "Young coffee plant - Nursery operations", src: "/images/img-20250808-wa0062.jpg" },
    { alt: "Farmer training - Yellow input distribution", src: "/images/doc-20250731-wa0052-009.jpg" },
    { alt: "Agricultural shop - Products and supplies", src: "/images/shop.jpg" },
    { alt: "Crop protection chemicals - Organized storage", src: "/images/doc-20250731-wa0052-086.jpg" },
    { alt: "Post-harvest maize processing - Quality control", src: "/images/doc-20250731-wa0052-016.jpg" },
    { alt: "Yellow input bags storage - Inventory management", src: "/images/doc-20250731-wa0052-008.jpg" },
    { alt: "Field test plot KR 6 - Crop variety trials", src: "/images/img-20250808-wa0069.jpg" },
    { alt: "Agricultural consultancy - Field demonstration", src: "/images/doc-20250731-wa0052-004.jpg" },
    { alt: "Irrigation system installation - Farmer training", src: "/images/doc-20250731-wa0052-000.jpg" },
    { alt: "Farmer irrigation practice - Water management", src: "/images/doc-20250731-wa0052-001.jpg" },
    { alt: "Shop interior - Chemical and tool inventory", src: "/images/whatsapp-image-2025-08-08-at-07.jpg" },
    { alt: "Women farmer harvest - Field operations", src: "/images/doc-20250731-wa0052-096.jpg" },
    { alt: "Pesticide shop interior - Organized products", src: "/images/shop2.jpg" },
    { alt: "Company storefront - HAPJAI branding", src: "/images/doc-20250731-wa0052-012.jpg" },
    { alt: "CEO photo - Leadership", src: "/images/ceo-20photo.jpg" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 lg:px-6 bg-gradient-to-r from-green-100 to-green-50">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Gallery</h1>
          <p className="text-lg text-gray-700 mt-2">Showcase of our work, operations, and partnerships</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden bg-gray-200 hover:shadow-xl transition-shadow"
              >
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
