"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ProductCard from "@/components/product-card"
import { initialProducts, fashionProducts, lifestyleProducts } from "@/lib/product-data"
import { Heart, Trash2 } from "lucide-react"

export default function FavouritePage() {
  // Combine all products and filter for favorites
  const allProducts = [...initialProducts, ...fashionProducts, ...lifestyleProducts]
  const initialFavorites = allProducts.filter((product) => product.isFavorite)

  const [favorites, setFavorites] = useState(initialFavorites)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(favorites.map((item) => item.category))]

  const filteredFavorites =
    activeCategory === "All" ? favorites : favorites.filter((product) => product.category === activeCategory)

  const removeFromFavorites = (productId: number) => {
    setFavorites(favorites.filter((product) => product.id !== productId))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Title */}
      <section className="bg-[#FFF9E5] py-12 px-6 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <Heart className="h-8 w-8 text-[#E6C744] fill-[#E6C744]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">Your Favorites</h1>
        <p className="mt-2 text-gray-600">Items you've saved for later</p>
      </section>

      {/* Favorites Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center mb-4 p-4 bg-gray-100 rounded-full">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Your favorites list is empty</h3>
              <p className="text-gray-500 mb-6">Save items you love to your favorites list</p>
              <a href="/catalogue" className="bg-black text-white px-6 py-3 rounded-sm inline-block">
                Start Shopping
              </a>
            </div>
          ) : (
            <>
              {/* Category Filters */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeCategory === category ? "bg-[#E6C744] text-black" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Favorites Count */}
              <div className="mb-6">
                <p className="text-sm text-gray-500">
                  {filteredFavorites.length} {filteredFavorites.length === 1 ? "item" : "items"} in your favorites
                </p>
              </div>

              {/* Favorites Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {filteredFavorites.map((product) => (
                  <div key={`favorite-${product.id}`} className="relative">
                    <ProductCard product={product} />
                    <button
                      className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-red-50 transition-colors"
                      onClick={() => removeFromFavorites(product.id)}
                      aria-label="Remove from favorites"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
