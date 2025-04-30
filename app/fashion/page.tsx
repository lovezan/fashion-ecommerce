"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ProductCard from "@/components/product-card"
import { fashionProducts, generateMoreProducts } from "@/lib/product-data"
import { ArrowRight } from "lucide-react"

export default function FashionPage() {
  const [products, setProducts] = useState(fashionProducts)
  const [activeTab, setActiveTab] = useState("all")

  const loadMoreProducts = () => {
    const newProducts = generateMoreProducts(8)
    setProducts([...products, ...newProducts])
  }

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => {
          if (activeTab === "new") return product.isNew
          if (activeTab === "sale") return product.discount
          return product.category.toLowerCase() === activeTab
        })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[60vh] bg-black">
          <Image
            src="/images/Hero.jpg"
            alt="Fashion Collection"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Fashion Collection</h1>
            <p className="text-lg mb-6 max-w-2xl text-center">
              Discover the latest trends and styles that define this season's fashion landscape
            </p>
            <Link href="#products" className="bg-[#E6C744] text-black px-6 py-3 rounded-sm inline-flex items-center">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-12 px-6 bg-[#FFF9E5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">TRENDING CATEGORIES</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Tops", "Bottoms", "Dresses", "Outerwear"].map((category, index) => (
              <div key={category} className="relative aspect-square overflow-hidden group rounded-md">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${category}`}
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity group-hover:bg-opacity-40">
                  <h4 className="text-white text-xl font-bold">{category}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">FASHION COLLECTION</h2>

          {/* Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-8 gap-4">
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "all" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("all")}
            >
              All Items
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "new" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("new")}
            >
              New Arrivals
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "sale" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("sale")}
            >
              On Sale
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "tops" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("tops")}
            >
              Tops
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "bottoms" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("bottoms")}
            >
              Bottoms
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "outerwear" ? "bg-[#E6C744] text-black" : "bg-gray-100"} rounded-full`}
              onClick={() => setActiveTab("outerwear")}
            >
              Outerwear
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={`product-${product.id}`} product={product} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mb-16">
            <button
              onClick={loadMoreProducts}
              className="bg-black text-[#E6C744] px-6 py-2 rounded-full hover:bg-gray-900 transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
