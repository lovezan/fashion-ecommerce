"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ProductCard, { type Product } from "@/components/product-card"
import { initialProducts, generateMoreProducts } from "@/lib/product-data"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const loadMoreProducts = () => {
    // Simulate loading more products
    const newProducts = generateMoreProducts(8)
    setProducts([...products, ...newProducts])
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-[#FFF9E5] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your <span className="text-[#E6C744]">Perfect Style</span>
            </h1>
            <p className="text-lg mb-6">
              Explore our curated collection of trendy and comfortable clothing for every occasion.
            </p>
            <Link href="/catalogue" className="bg-black text-white px-6 py-3 rounded-sm inline-flex items-center">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/Hero.jpg"
              alt="Fashion Model"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* T-Shirts Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 inline-block px-4 py-2 rounded-md mb-6">
            <h2 className="text-xl font-medium">T-Shirts</h2>
          </div>

          <h3 className="text-2xl font-bold mb-8">NEW TRENDY DESIGNS</h3>

          {/* Product Grid - Responsive (4 per row on desktop, 2 per row on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {products.slice(0, 8).map((product, index) => (
              <ProductCard key={`product-${index}`} product={product} />
            ))}
          </div>

          {/* Our Products Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-red-500 mr-2"></div>
              <h3 className="text-lg font-medium text-red-500">Our Products</h3>
            </div>
            <h2 className="text-2xl font-bold mb-8">Explore Our Products</h2>

            {/* First row of products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={`explore-product-${index}`} product={product} />
              ))}
            </div>

            {/* Second row of products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {products.slice(4, 8).map((product, index) => (
                <ProductCard key={`explore-product-2-${index}`} product={product} />
              ))}
            </div>
          </div>

          {/* Scroll More Button */}
          <div className="flex justify-center mb-16">
            <button
              onClick={loadMoreProducts}
              className="bg-black text-[#E6C744] px-6 py-2 rounded-full hover:bg-gray-900 transition-colors"
            >
              Scroll More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 px-6 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">FEATURED CATEGORIES</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Casual", "Sport", "Formal", "Vintage"].map((category, index) => (
              <div key={category} className="relative aspect-square overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${category}`}
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h4 className="text-white text-xl font-bold">{category}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
