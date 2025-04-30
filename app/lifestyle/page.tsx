"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ProductCard from "@/components/product-card"
import { lifestyleProducts, generateMoreProducts } from "@/lib/product-data"
import { ArrowRight } from "lucide-react"

export default function LifestylePage() {
  const [products, setProducts] = useState(lifestyleProducts)

  const loadMoreProducts = () => {
    const newProducts = generateMoreProducts(8)
    setProducts([...products, ...newProducts])
  }

  // Group products by category
  const categories = [...new Set(products.map((product) => product.category))]
  const productsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = products.filter((product) => product.category === category)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[60vh] bg-black">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Lifestyle+Collection"
            alt="Lifestyle Collection"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Lifestyle Collection</h1>
            <p className="text-lg mb-6 max-w-2xl text-center">
              Enhance your everyday life with our curated lifestyle products
            </p>
            <Link href="#products" className="bg-[#E6C744] text-black px-6 py-3 rounded-sm inline-flex items-center">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Lifestyle */}
      <section className="py-12 px-6 bg-[#FFF9E5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">LIFESTYLE ESSENTIALS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden group rounded-md">
              <Image
                src="/placeholder.svg?height=600&width=400&text=Fitness"
                alt="Fitness"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end p-6 transition-opacity group-hover:bg-opacity-40">
                <h4 className="text-white text-xl font-bold mb-2">Fitness</h4>
                <Link href="#fitness" className="bg-white text-black px-4 py-2 rounded-sm text-sm">
                  View Products
                </Link>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden group rounded-md">
              <Image
                src="/placeholder.svg?height=600&width=400&text=Home"
                alt="Home"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end p-6 transition-opacity group-hover:bg-opacity-40">
                <h4 className="text-white text-xl font-bold mb-2">Home</h4>
                <Link href="#home" className="bg-white text-black px-4 py-2 rounded-sm text-sm">
                  View Products
                </Link>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden group rounded-md">
              <Image
                src="/placeholder.svg?height=600&width=400&text=Electronics"
                alt="Electronics"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end p-6 transition-opacity group-hover:bg-opacity-40">
                <h4 className="text-white text-xl font-bold mb-2">Electronics</h4>
                <Link href="#electronics" className="bg-white text-black px-4 py-2 rounded-sm text-sm">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products By Category */}
      <section id="products" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase()} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 bg-[#E6C744] rounded-full mr-3 flex items-center justify-center text-black">
                  {category.charAt(0)}
                </span>
                {category}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {productsByCategory[category].map((product) => (
                  <ProductCard key={`product-${product.id}`} product={product} />
                ))}
              </div>
            </div>
          ))}

          {/* Load More Button */}
          <div className="flex justify-center">
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
