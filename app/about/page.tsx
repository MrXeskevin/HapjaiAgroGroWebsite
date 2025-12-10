"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const partners = [
    { name: "Bukoola", logo: "/images/partner-bukoola.jpg" },
    { name: "UGDA", logo: "/images/partner-ugda.jpg" },
    { name: "MAAIF", logo: "/images/partner-maaif.jpg" },
    { name: "EzyAgric", logo: "/images/partner-ezyagric.jpg" },
    { name: "Osho", logo: "/images/partner-osho.jpg" },
    { name: "Grainpulse", logo: "/images/partner-grainpulse.jpg" },
    { name: "Quantum Foods", logo: "/images/partner-quantum.jpg" },
    { name: "Women Coffee Association", logo: "/images/partner-women-coffee.jpg" },
  ]

  const partnerLogos = [
    { name: "International Women's Coffee Alliance", logo: "/images/partner-women-coffee.jpg" },
    { name: "World Coffee Producers Forum", logo: "/images/partner-wff.jpg" },
    { name: "UGDA", logo: "/images/partner-ugda.jpg" },
    { name: "EzyAgric", logo: "/images/partner-ezyagric.jpg" },
    { name: "Bukoola Chemical Industries", logo: "/images/partner-bukoola.png" },
    { name: "MAAIF", logo: "/images/partner-maaif.jpg" },
    { name: "Osho", logo: "/images/partner-osho.jpg" },
    { name: "Grainpulse", logo: "/images/partner-grainpulse.jpg" },
    { name: "Quantum Foods", logo: "/images/partner-quantum.jpg" },
    { name: "Gbonda Limited", logo: "/images/partner-gbonda.jpg" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Who We Are */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Who We Are</h1>
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              HAPJAI Company Ltd is a Ugandan agribusiness dedicated to empowering farmers from soil to market. We
              supply certified agro-inputs, provide hands-on consultancy and training, and connect farmers to reliable
              markets with fair pricing.
            </p>
            <p>
              We are a farmer-focused agribusiness dedicated to transforming Ugandan agriculture through quality input
              supply, expert guidance, and reliable market access. With a passion for sustainable farming and community
              empowerment, we work closely with both smallholder and large-scale farmers to boost productivity and
              profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-300">
              <img src="/images/ceo-20photo.jpg" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chief Executive Officer</h3>
              <p className="text-gray-600 leading-relaxed">
                Provides strategic leadership and farmer-centric direction for HAPJAI's programs and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To improve farmer productivity and incomes through quality inputs, expert support, and sustainable
                market access.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A resilient and prosperous smallholder farming community across Uganda.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Objectives</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Increase yields via quality inputs and GAP training.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build financial literacy and farm business skills.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Provide predictable, fair markets for produce.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Addition */}
      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Value Addition (Maize Milling)</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We add value through maize aggregation and milling—especially in Kyenjojo, Kagadi and Kyegegwa—buying maize
            from our farmers, milling it, and selling back to them and the wider market at favourable prices. This
            safeguards household food security while strengthening local market systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The model also creates jobs for youths involved in buying, transporting, milling, packaging and distribution
            of maize flour—helping young people increase their incomes.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Certified quality inputs</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Experienced agronomists</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Buy-back & market linkage</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Farmer-centric pricing</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Training + advisory services</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Reliable after-sales support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Kampala (Head Office)</h3>
              <p className="text-gray-600 text-sm">Kampala, Uganda</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Mbale Branch</h3>
              <p className="text-gray-600 text-sm">Mbale, Uganda</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Mbarara Branch</h3>
              <p className="text-gray-600 text-sm">Mbarara, Uganda</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Kyenjojo Branch</h3>
              <p className="text-gray-600 text-sm">Kyenjojo Town, Western Uganda</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Kasese Branch</h3>
              <p className="text-gray-600 text-sm">Kasese Municipality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="w-32 h-24 bg-white rounded flex items-center justify-center hover:bg-gray-50 transition-colors overflow-hidden border border-gray-200"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-2"
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
