"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FarmersCorner() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Which fertilizer should I use for coffee?",
      answer:
        "For coffee, we recommend using balanced fertilizers with NPK ratios suited to your soil conditions. Consult with our agronomists for site-specific recommendations.",
    },
    {
      question: "Do you buy back produce?",
      answer:
        "Yes, we have a buy-back program for certified produce. Contact our office for details on pricing and collection schedules.",
    },
    {
      question: "Can I get on-farm training?",
      answer:
        "We provide hands-on training on GAP, pest management, irrigation, and post-harvest handling. Schedule a session with our expert agronomists.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero with Image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="/images/img-20250808-wa0070.jpg" alt="Coffee nursery farm" className="w-full h-full object-cover" />
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Farmer FAQs</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-green-600 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <div className="pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
