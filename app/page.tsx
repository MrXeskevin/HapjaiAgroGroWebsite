"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Sprout, Users, TrendingUp, Award, ShieldCheck, Leaf } from "lucide-react"

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Empowering Farmers from Soil to Market
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl text-balance">
            Quality inputs, expert guidance, and reliable markets for Ugandan farmers. Your trusted partner in
            agricultural success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="rounded-full bg-white px-8 py-4 font-semibold text-green-600 hover:bg-gray-100 transition-colors shadow-lg"
            >
              Shop Inputs
            </Link>
            <Link
              href="/farmers-corner"
              className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition-colors border-2 border-white"
            >
              Request Consultancy
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition-colors border-2 border-white"
            >
              Sell Your Produce
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-green-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">5,000+</p>
              <p className="text-sm text-gray-600">Farmers Served</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Certified Inputs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">40%</p>
              <p className="text-sm text-gray-600">Avg. Yield Increase</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive agricultural solutions designed to maximize your farm's productivity and profitability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Inputs */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="/images/quality-inputs.jpg"
                alt="Quality Inputs - Farmers with soil and quality agricultural inputs"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quality Inputs</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Certified seeds, fertilizers, pesticides, and tools from trusted brands. Quality you can count on for
                  better harvests.
                </p>
                <Link
                  href="/services"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Explore Products →
                </Link>
              </div>
            </div>

            {/* Field Advisory */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="/images/img-20250808-wa0069.jpg"
                alt="Field Advisory - Research plot testing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Field Advisory</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expert agronomists providing on-farm training, soil testing, pest management, and crop-specific
                  guidance.
                </p>
                <Link
                  href="/farmers-corner"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Get Expert Help →
                </Link>
              </div>
            </div>

            {/* Market Linkage */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="/images/market-linkage.jpg"
                alt="Market Linkage - Farmers with agricultural products and market connections"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Market Linkage</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fair buy-back model with competitive pricing, quality control, and timely payments. Your produce, our
                  commitment.
                </p>
                <Link
                  href="/services"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Sell Your Produce →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to Transform Your Farm?</h2>
          <p className="text-lg text-green-50 mb-8 text-balance">
            Join thousands of successful farmers across Uganda. Get started with quality inputs and expert guidance
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="rounded-full bg-white px-8 py-4 font-semibold text-green-600 hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
