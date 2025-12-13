"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const images = [
    {
      alt: "Coffee nursery seedlings - Quality crop development",
      src: "/images/img-20250808-wa0070.jpg",
      category: "Farming Operations",
    },
    {
      alt: "Young coffee plant - Nursery operations",
      src: "/images/img-20250808-wa0062.jpg",
      category: "Farming Operations",
    },
    {
      alt: "Coffee seedling close-up - Plant health monitoring",
      src: "/images/img-20250808-wa0068.jpg",
      category: "Farming Operations",
    },
    {
      alt: "Field test plot KR 6 - Crop variety trials",
      src: "/images/img-20250808-wa0069.jpg",
      category: "Research & Development",
    },
    {
      alt: "Quality inputs distribution - Farmer support",
      src: "/images/quality-inputs.jpg",
      category: "Training & Support",
    },
    {
      alt: "Market linkage program - Farmer empowerment",
      src: "/images/market-linkage.jpg",
      category: "Market Linkage",
    },
    {
      alt: "Fertilizer products - Quality farm inputs",
      src: "/images/fertilizers.jpg",
      category: "Products",
    },
    {
      alt: "Crop protection chemicals - Plant health solutions",
      src: "/images/crop-chemicals.jpg",
      category: "Products",
    },
    {
      alt: "Agricultural tools and sprayers - Farm equipment",
      src: "/images/tools-sprayers.jpg",
      category: "Products",
    },
    {
      alt: "Pesticides inventory - Crop protection range",
      src: "/images/doc-20250731-wa0052-pesticides.jpg",
      category: "Products",
    },
    {
      alt: "Agricultural shop storefront - Quality assurance",
      src: "/images/shop.jpg",
      category: "Our Facilities",
    },
    {
      alt: "Shop interior - Product display",
      src: "/images/shop2.jpg",
      category: "Our Facilities",
    },
    {
      alt: "Main store interior - Organized inventory",
      src: "/images/whatsapp-20image-202025-08-08-20at-2007.jpg",
      category: "Our Facilities",
    },
    {
      alt: "Company leadership - CEO portrait",
      src: "/images/ceo-20photo.jpg",
      category: "Leadership",
    },
    {
      alt: "Partner: Women in Coffee",
      src: "/images/partner-women-coffee.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: WFF",
      src: "/images/partner-wff.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: UGDA",
      src: "/images/partner-ugda.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: EzyAgric",
      src: "/images/partner-ezyagric.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: Bukoola",
      src: "/images/partner-bukoola.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: MAAIF",
      src: "/images/partner-maaif.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: OSHO Chemical",
      src: "/images/partner-osho.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: Grain Pulse",
      src: "/images/partner-grainpulse.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: Quantum",
      src: "/images/partner-quantum.jpg",
      category: "Partners",
    },
    {
      alt: "Partner: Gbonda",
      src: "/images/partner-gbonda.jpg",
      category: "Partners",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-green-50 max-w-2xl">
            A visual journey through our work, operations, and the farmers we proudly serve across Uganda.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="group aspect-square rounded-2xl overflow-hidden bg-gray-200 hover:shadow-2xl transition-all cursor-pointer relative"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-semibold">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
