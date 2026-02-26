"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
              <p className="text-gray-600 mb-8">We're here to help with inputs, consultancy and market access.</p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-12 space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Phone:</strong> 0770 840 342 / 0773 561 666
                </p>
                <p>
                  <strong>Email:</strong> hapjaicompany@gmail.com
                </p>
                <p>
                  <strong>WhatsApp:</strong> +256 770 840 342
                </p>
                <p>
                  <strong>Office Locations:</strong>
                  <br />• Head Office: Mbarara - Buremba Road, Centenary Building, Room No. 8
                  <br />• Field Office: Kyenjojo - Behind WFP offices, Kyenjojo Tc
                  <br />• Field Office: Rubanda - Muko trading centre, Kabale-Kisoro road
                  <br />• Field Office: Kasese - Mugusu Tourist Hotel Building, Kirembe Road
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden h-96 bg-gray-100 border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="HAPJAI Office Locations Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7939405142405!2d32.5865!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb693a0a0a0a%3A0x0!2sHAPJAI%20COMPANY%20LTD!5e0!3m2!1sen!2sug!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-1">Head Office - Mbarara</h3>
                  <p className="text-sm text-green-800">Buremba Road, Centenary Building, Room No. 8</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-1">Kyenjojo Field Office</h3>
                  <p className="text-sm text-green-800">Behind WFP offices, Kyenjojo Tc, Kyenjojo District</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-1">Kasese Field Office</h3>
                  <p className="text-sm text-green-800">Mugusu Tourist Hotel Building, Kirembe Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
