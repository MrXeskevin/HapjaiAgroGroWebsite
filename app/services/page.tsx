"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function Services() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [produceType, setProduceType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [customProduce, setCustomProduce] = useState("")

  const products = [
    {
      title: "Fertilizers",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/fertilizers.jpg",
    },
    {
      title: "Seeds",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/img-20250808-wa0069.jpg",
    },
    {
      title: "Crop Chemicals",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/crop-chemicals.jpg",
    },
    {
      title: "Tools & Sprayers",
      description: "Certified and farmer-trusted.",
      desc2: "Ask our team for the right recommendation for your crop and soil.",
      image: "/images/tools-sprayers.jpg",
    },
  ]

  const produceOptions = ["Maize", "Beans", "Rice", "Coffee", "Tomatoes", "Cabbage", "Carrots", "Chilli", "Other"]

  const handleOrder = (productName: string) => {
    const phoneNumber = "256770840342"
    const message = `Hello! I would like to order *${productName}*.%0A%0AQuantity: %0A%0APlease let me know the available options and pricing.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleConsultancy = () => {
    const phoneNumber = "256770840342"
    const message = `Hello! I would like to request *Agricultural Consultancy* services.%0A%0AService needed: %0A%0APlease provide more information about your consultancy services.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSellProduce = () => {
    const phoneNumber = "256770840342"
    const finalProduce = produceType === "Other" ? customProduce : produceType
    const message = `Hello! I would like to sell my produce.%0A%0A*Produce Type:* ${finalProduce}%0A*Quantity:* ${quantity}%0A%0APlease let me know the buying price and collection details.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")

    // Reset form and close dialog
    setIsDialogOpen(false)
    setProduceType("")
    setQuantity("")
    setCustomProduce("")
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 lg:px-6 bg-gradient-to-r from-green-100 to-green-50">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Agro-Input Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{product.desc2}</p>
                  <Button
                    onClick={() => handleOrder(product.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agricultural Consultancy</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Good Agronomic Practices (GAP) training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Financial literacy & enterprise planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Crop protection & nutrition schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Farmer group mobilization and coaching</span>
                </li>
              </ul>
              <Button onClick={handleConsultancy} className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                Request Consultancy
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/whatsapp-image-2025-08-08-at-07.jpg"
                alt="Agricultural advisory and training"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/quality-inputs.jpg"
                alt="Farmers in field"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="/images/market-linkage.jpg"
                alt="Farmers with produce"
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Linkage & Produce Buying</h2>
              <p className="text-gray-700 mb-6">
                We operate a fair buy-back model with strict quality control, enabling farmers to sell produce at
                competitive prices with timely payments.
              </p>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Sell Your Produce</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sell Your Produce</DialogTitle>
                    <DialogDescription>
                      Tell us what you would like to sell and how much. We'll get back to you with our best offer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="produce-type">Type of Produce</Label>
                      <Select value={produceType} onValueChange={setProduceType}>
                        <SelectTrigger id="produce-type">
                          <SelectValue placeholder="Select produce type" />
                        </SelectTrigger>
                        <SelectContent>
                          {produceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {produceType === "Other" && (
                      <div className="grid gap-2">
                        <Label htmlFor="custom-produce">Specify Produce</Label>
                        <Input
                          id="custom-produce"
                          placeholder="Enter produce type"
                          value={customProduce}
                          onChange={(e) => setCustomProduce(e.target.value)}
                        />
                      </div>
                    )}

                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantity (kg or bags)</Label>
                      <Input
                        id="quantity"
                        placeholder="e.g., 100 kg or 5 bags"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={handleSellProduce}
                      disabled={!produceType || !quantity || (produceType === "Other" && !customProduce)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Continue to WhatsApp
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
