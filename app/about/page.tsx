"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Target, Eye, Trophy, MapPin } from "lucide-react"

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

      <section className="py-16 md:py-20 px-4 lg:px-6 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">About HAPJAI</h1>
          <p className="text-xl text-green-50 max-w-3xl text-balance">
            Transforming Ugandan agriculture through farmer empowerment, quality inputs, and sustainable market access.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                HAPJAI Company Ltd is a leading Ugandan agribusiness dedicated to empowering farmers from soil to
                market. We supply certified agro-inputs, provide hands-on consultancy and training, and connect farmers
                to reliable markets with fair pricing.
              </p>
              <p>
                Founded on the principle that prosperous farmers build prosperous communities, we work closely with both
                smallholder and large-scale farmers to boost productivity, profitability, and sustainability across
                Uganda's agricultural landscape.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-green-600">5,000+</p>
                  <p className="text-gray-700">Farmers Empowered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">5</p>
                  <p className="text-gray-700">Regional Branches</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">10+</p>
                  <p className="text-gray-700">Partner Organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Leadership</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-300">
              <img src="/images/ceo-20photo.jpg" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chief Executive Officer</h3>
              <p className="text-green-600 font-semibold mb-4">Visionary Leader</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our CEO provides strategic leadership and farmer-centric direction for HAPJAI's programs and
                partnerships. With over a decade of experience in agricultural development, they have championed
                innovative solutions that directly address the challenges faced by Ugandan farmers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Under their guidance, HAPJAI has expanded to serve thousands of farmers across five regional branches,
                establishing strong partnerships with government agencies, NGOs, and private sector players in Uganda's
                agricultural ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To improve farmer productivity and incomes through quality inputs, expert support, and sustainable
                market access that creates lasting value for farming communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A resilient and prosperous smallholder farming community across Uganda, where every farmer has access to
                the tools, knowledge, and markets they need to thrive.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Objectives</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Increase yields via quality inputs and GAP training</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build financial literacy and farm business skills</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Provide predictable, fair markets for produce</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Addition */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-green-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Value Addition: Maize Milling</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We add value through maize aggregation and milling—especially in Kyenjojo, Kagadi and Kyegegwa—buying
                maize from our farmers, milling it, and selling back to them and the wider market at favourable prices.
              </p>
              <p>
                This model safeguards household food security while strengthening local market systems, ensuring farmers
                get fair prices and communities have access to affordable, quality maize flour.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Creates employment for youth in milling operations</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ensures food security for farming families</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Strengthens local agricultural value chains</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Provides fair market access for smallholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose HAPJAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Certified Quality Inputs</h3>
                <p className="text-sm text-gray-600">Only genuine, tested products from trusted manufacturers</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Experienced Agronomists</h3>
                <p className="text-sm text-gray-600">Expert field support and personalized farm guidance</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Buy-Back & Market Linkage</h3>
                <p className="text-sm text-gray-600">Guaranteed market for your quality produce</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Farmer-Centric Pricing</h3>
                <p className="text-sm text-gray-600">Fair, transparent prices that respect your hard work</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Training & Advisory Services</h3>
                <p className="text-sm text-gray-600">Continuous learning and skill development programs</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Reliable After-Sales Support</h3>
                <p className="text-sm text-gray-600">We're with you every step of the growing season</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
          <p className="text-lg text-gray-600 mb-12">Serving farmers across Uganda with local expertise and support</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Kampala</h3>
                  <p className="text-green-600 text-sm font-semibold">Head Office</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Central operations and administration</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Mbale Branch</h3>
                  <p className="text-gray-600 text-sm">Eastern Region</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Serving coffee and cereal farmers</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Mbarara Branch</h3>
                  <p className="text-gray-600 text-sm">Western Region</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Supporting dairy and banana farmers</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Kyenjojo Branch</h3>
                  <p className="text-gray-600 text-sm">Mid-Western Region</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Maize milling and input distribution hub</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Kasese Branch</h3>
                  <p className="text-gray-600 text-sm">Rwenzori Region</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Coffee and cocoa farming support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="py-16 md:py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Partners</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Collaborating with leading organizations to deliver excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="w-32 h-24 bg-white rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
                title={partner.name}
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
