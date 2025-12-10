"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/hapjai-logo.jpg" alt="HAPJAI logo" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold text-gray-900">Hapjai</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">
          <Link
            href="/"
            className={`transition-colors ${isActive("/") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${isActive("/about") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`transition-colors ${isActive("/services") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            Services
          </Link>
          <Link
            href="/farmers-corner"
            className={`transition-colors ${isActive("/farmers-corner") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            Farmers' Corner
          </Link>
          <Link
            href="/gallery"
            className={`transition-colors ${isActive("/gallery") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${isActive("/contact") ? "text-green-600 font-medium" : "text-gray-700 hover:text-gray-900"}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/quote"
          className="rounded-full bg-green-600 px-6 py-2 font-medium text-white transition-all hover:bg-green-700"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  )
}
