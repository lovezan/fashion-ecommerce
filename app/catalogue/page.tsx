"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ProductCard from "@/components/product-card"
import { initialProducts, generateMoreProducts } from "@/lib/product-data"
import { Filter, ChevronDown } from "lucide-react"

export default function CataloguePage() {
  const [products, setProducts] = useState(initialProducts.concat(generateMoreProducts(8)))
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const categories = ["All", "Casual", "Sport", "Formal", "Vintage", "Summer", "Winter"]

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0
  })

  const loadMoreProducts = () => {
    const newProducts = generateMoreProducts(8)
    setProducts([...products, ...newProducts])
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Title */}
      <section className="bg-[#FFF9E5] py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Our Catalogue</h1>
        <p className="mt-2 text-gray-600">Explore our complete collection of trendy clothing</p>
      </section>

      {/* Filters and Products */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <button
              className="flex items-center text-sm mb-4 md:mb-0 border px-4 py-2 rounded-md md:hidden"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 md:space-x-6 ${filtersOpen ? "block" : "hidden md:flex"}`}
            >
              <div>
                <h4 className="text-sm font-medium mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1 text-xs rounded-full ${
                        activeCategory === category ? "bg-[#E6C744] text-black" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">Showing {sortedProducts.length} products</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {sortedProducts.map((product) => (
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
