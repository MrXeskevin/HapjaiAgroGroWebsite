"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-500 overflow-hidden md:h-full">
        <img
          src="/images/img-20250808-wa0070.jpg"
          alt="Farm fields with lush coffee plants"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center py-20 md:py-40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Empowering Farmers from Soil to Market
          </h1>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl">
            Quality inputs, expert guidance, and reliable markets for Ugandan farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-green-600 px-8 py-3 font-medium text-white hover:bg-green-700 transition-colors"
            >
              Shop Inputs
            </Link>
            <Link
              href="/farmers-corner"
              className="rounded-full bg-white px-8 py-3 font-medium text-green-600 hover:bg-gray-100 transition-colors"
            >
              Request Consultancy
            </Link>
            <Link
              href="/quote"
              className="rounded-full bg-white px-8 py-3 font-medium text-green-600 hover:bg-gray-100 transition-colors"
            >
              Sell Your Produce
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quality Inputs */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <img
                src="/images/quality-inputs.jpg"
                alt="Quality Inputs - Farmers with soil and quality agricultural inputs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Inputs</h3>
                <p className="text-gray-600 text-sm">Trusted by farmers across Uganda to deliver results.</p>
              </div>
            </div>

            {/* Field Advisory */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <img
                src="/images/img-20250808-wa0069.jpg"
                alt="Field Advisory - Research plot testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Field Advisory</h3>
                <p className="text-gray-600 text-sm">Trusted by farmers across Uganda to deliver results.</p>
              </div>
            </div>

            {/* Market Linkage */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <img
                src="/images/market-linkage.jpg"
                alt="Market Linkage - Farmers with agricultural products and market connections"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Linkage</h3>
                <p className="text-gray-600 text-sm">Trusted by farmers across Uganda to deliver results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
