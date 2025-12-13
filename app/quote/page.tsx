"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    quantity: "",
    location: "",
    contactMethod: "Phone",
    notes: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const message = `Hello HAPJAI! I would like to request a quote:\n\nName: ${formData.name}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nLocation: ${formData.location}\nPreferred Contact: ${formData.contactMethod}\nAdditional Notes: ${formData.notes || "None"}`

    const whatsappUrl = `https://wa.me/256770840342?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Quote</h1>
          <p className="text-xl text-green-50">
            Tell us what you need and we'll get back to you with the best prices and solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">0770 840 342</p>
              <p className="text-sm text-gray-600">0773 561 666</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@hapjai.com</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">5 Branches Nationwide</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product/Service</label>
                <select
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700"
                >
                  <option value="">Select a product or service</option>
                  <option>Seeds (Maize, Beans, Coffee, etc.)</option>
                  <option>Fertilizers</option>
                  <option>Pesticides & Herbicides</option>
                  <option>Tools & Sprayers</option>
                  <option>Field Advisory Service</option>
                  <option>Soil Testing</option>
                  <option>Training & Workshops</option>
                  <option>Sell My Produce (Coffee)</option>
                  <option>Sell My Produce (Maize)</option>
                  <option>Sell My Produce (Beans)</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                <input
                  type="text"
                  placeholder="e.g., 50 kg, 10 bags, 5 acres"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="District / Sub-county / Village"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
                <select
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700"
                >
                  <option>Phone Call</option>
                  <option>WhatsApp</option>
                  <option>SMS</option>
                  <option>Email</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Quote Request via WhatsApp
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              We typically respond within 24 hours. For urgent requests, please call us directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
