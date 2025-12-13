"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown, BookOpen, Calendar, Sprout, TrendingUp, Download, Video } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    {
      question: "How often should I apply pesticides?",
      answer:
        "Pesticide application should be based on pest scouting and threshold levels. Generally, preventive spraying is done every 2-3 weeks during the growing season, but always follow the product label instructions and our agronomist recommendations.",
    },
    {
      question: "What is the best time to plant maize in Uganda?",
      answer:
        "In Uganda, maize is typically planted during two main seasons: March-April (Season A) and August-September (Season B). However, timing depends on your specific location and rainfall patterns. Contact us for location-specific planting calendars.",
    },
    {
      question: "How can I improve my soil fertility naturally?",
      answer:
        "Natural soil fertility can be improved through crop rotation, composting, green manure, mulching, and intercropping with legumes. We offer training on sustainable soil management practices tailored to your farm.",
    },
    {
      question: "What are the signs of nutrient deficiency in crops?",
      answer:
        "Common signs include yellowing leaves (nitrogen deficiency), purple leaves (phosphorus deficiency), brown leaf edges (potassium deficiency), and stunted growth. Our field advisors can conduct soil tests and provide specific recommendations.",
    },
    {
      question: "How do I control post-harvest losses?",
      answer:
        "Proper drying, appropriate storage facilities, pest control in storage, and timely marketing are key. We provide hermetic storage solutions and training on best post-harvest handling practices to minimize losses.",
    },
  ]

  const farmingTips = [
    {
      icon: Sprout,
      title: "Soil Testing",
      description:
        "Test your soil every 2-3 years to understand nutrient levels and pH for optimal fertilizer application.",
    },
    {
      icon: Calendar,
      title: "Crop Rotation",
      description: "Rotate crops to prevent soil depletion, break pest cycles, and improve soil structure naturally.",
    },
    {
      icon: TrendingUp,
      title: "Record Keeping",
      description: "Maintain detailed farm records of inputs, yields, and expenses to make informed decisions.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Attend our training sessions and field days to stay updated on modern farming techniques.",
    },
  ]

  const seasonalGuide = [
    {
      season: "March - May (Season A)",
      crops: "Maize, Beans, Groundnuts, Soybeans",
      activities: "Land preparation, planting, weeding, pest scouting",
    },
    {
      season: "June - August (Harvest Season A)",
      crops: "Coffee processing, Maize harvesting",
      activities: "Harvesting, drying, storage preparation, soil testing",
    },
    {
      season: "September - November (Season B)",
      crops: "Maize, Beans, Vegetables",
      activities: "Planting, fertilizer application, pest management",
    },
    {
      season: "December - February (Dry Season)",
      crops: "Irrigation farming, Vegetables",
      activities: "Coffee pruning, land clearing, compost preparation",
    },
  ]

  const resources = [
    { title: "Maize Production Guide", type: "PDF", size: "2.5 MB" },
    { title: "Coffee Best Practices Manual", type: "PDF", size: "3.1 MB" },
    { title: "Integrated Pest Management Guide", type: "PDF", size: "1.8 MB" },
    { title: "Post-Harvest Handling Techniques", type: "PDF", size: "2.2 MB" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero with Image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="/images/img-20250808-wa0070.jpg" alt="Coffee nursery farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Farmers' Corner</h1>
            <p className="text-lg md:text-xl text-balance">
              Your resource hub for modern farming knowledge and support
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Farming Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmingTips.map((tip, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <tip.icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Seasonal Planting Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seasonalGuide.map((guide, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{guide.season}</h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-semibold text-gray-900">Recommended Crops:</span>{" "}
                          <span className="text-gray-600">{guide.crops}</span>
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">Key Activities:</span>{" "}
                          <span className="text-gray-600">{guide.activities}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Resources</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {resources.map((resource, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                      <p className="text-sm text-gray-500">
                        {resource.type} • {resource.size}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Hello Hapjai, I would like to request the "${resource.title}" resource. Please send it to me.`,
                      )
                      window.open(`https://wa.me/256770840342?text=${message}`, "_blank")
                    }}
                  >
                    Request
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Click "Request" to get these resources sent to you via WhatsApp
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Tutorials</h2>
          <Card>
            <CardContent className="p-8 text-center">
              <Video className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Farming Tutorials</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Watch step-by-step video guides on modern farming techniques, from planting to harvest. Contact us to
                access our video library.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello Hapjai, I would like to access your farming video tutorials. Please share details on how to get started.",
                  )
                  window.open(`https://wa.me/256770840342?text=${message}`, "_blank")
                }}
              >
                Request Video Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 bg-white px-6 rounded">
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

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Personalized Farming Advice?</h2>
              <p className="text-lg mb-6 text-green-50">
                Our experienced agronomists are ready to help you with customized solutions for your farm.
              </p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello Hapjai, I would like to speak with an agronomist for personalized farming advice.",
                  )
                  window.open(`https://wa.me/256770840342?text=${message}`, "_blank")
                }}
              >
                Talk to an Agronomist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
