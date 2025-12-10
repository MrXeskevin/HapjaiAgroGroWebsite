import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                H
              </div>
              <span className="text-lg font-bold text-gray-900">HAPJAI</span>
            </div>
            <p className="text-sm text-gray-600">
              Empowering farmers from soil to market with quality inputs, expert guidance, and reliable markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services & Products
                </Link>
              </li>
              <li>
                <Link href="/farmers-corner" className="text-gray-600 hover:text-gray-900">
                  Farmers' Corner
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-gray-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>📞 0770 840 342 / 0773 561 666</p>
                <p>✉️ hapjaicompany@gmail.com</p>
                <p>💬 WhatsApp: +256 770 840 342</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© 2025 HAPJAI Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
