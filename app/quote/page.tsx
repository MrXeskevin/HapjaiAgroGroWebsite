"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Quote() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Get a Quote / Sell Produce</h1>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700">
              <option value="">Coffee</option>
              <option>Maize</option>
              <option>Beans</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              placeholder="Quantity (e.g., 1000 kg)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <input
              type="text"
              placeholder="Location (District / Sub-county)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700">
              <option value="">Phone</option>
              <option>Email</option>
              <option>WhatsApp</option>
            </select>

            <textarea
              placeholder="Additional notes (optional)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
