import type { Product } from "@/components/product-card"

// Initial products data
export const initialProducts: Product[] = [
  {
    id: 1,
    title: "Round-Neck T-Shirt",
    category: "Casual",
    price: 29.99,
    image: "/images/1.jpg",
    isNew: true,
  },
  {
    id: 2,
    title: "U-Neck T-Shirt",
    category: "Casual",
    price: 24.99,
    image: "/images/2.avif",
    discount: 15,
  },
  {
    id: 3,
    title: "V-Neck T-Shirt",
    category: "Casual",
    price: 27.99,
    image: "/images/3.avif",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Polo T-Shirt",
    category: "Casual",
    price: 34.99,
    image: "/images/4.avif",
  },
  {
    id: 5,
    title: "Round-Neck T-Shirt",
    category: "Sport",
    price: 32.99,
    image: "/images/5.avif",
    discount: 20,
  },
  {
    id: 6,
    title: "U-Neck T-Shirt",
    category: "Sport",
    price: 28.99,
    image: "/images/6.avif",
  },
  {
    id: 7,
    title: "V-Neck T-Shirt",
    category: "Sport",
    price: 30.99,
    image: "/images/7.webp",
    isNew: true,
  },
  {
    id: 8,
    title: "Polo T-Shirt",
    category: "Sport",
    price: 36.99,
    image: "/images/8.jpg",
    isFavorite: true,
  },
]

// Fashion products
export const fashionProducts: Product[] = [
  {
    id: 9,
    title: "Denim Jacket",
    category: "Outerwear",
    price: 89.99,
    image: "/images/1.jpg",
    isNew: true,
  },
  {
    id: 10,
    title: "Slim Fit Jeans",
    category: "Bottoms",
    price: 59.99,
    image: "/images/2.avif",
    discount: 10,
  },
  {
    id: 11,
    title: "Floral Dress",
    category: "Dresses",
    price: 49.99,
    image: "/images/3.avif",
    isFavorite: true,
  },
  {
    id: 12,
    title: "Leather Skirt",
    category: "Bottoms",
    price: 45.99,
    image: "/images/4.avif",
  },
  {
    id: 13,
    title: "Wool Sweater",
    category: "Tops",
    price: 65.99,
    image: "/images/5.avif",
    discount: 25,
  },
  {
    id: 14,
    title: "Cargo Pants",
    category: "Bottoms",
    price: 54.99,
    image: "/images/6.avif",
  },
  {
    id: 15,
    title: "Silk Blouse",
    category: "Tops",
    price: 42.99,
    image: "/images/7.webp",
    isNew: true,
  },
  {
    id: 16,
    title: "Leather Jacket",
    category: "Outerwear",
    price: 129.99,
    image: "/images/8.jpg",

    isFavorite: true,
  },
]

// Lifestyle products
export const lifestyleProducts: Product[] = [
  {
    id: 17,
    title: "Yoga Mat",
    category: "Fitness",
    price: 35.99,
    image: "/images/1.jpg",

    isNew: true,
  },
  {
    id: 18,
    title: "Water Bottle",
    category: "Accessories",
    price: 19.99,
    image: "/images/2.avif",

    discount: 15,
  },
  {
    id: 19,
    title: "Backpack",
    category: "Bags",
    price: 79.99,
    image: "/images/3.avif",

    isFavorite: true,
  },
  {
    id: 20,
    title: "Fitness Tracker",
    category: "Electronics",
    image: "/images/4.avif",

    price: 99.99,
  },
  {
    id: 21,
    title: "Scented Candle",
    category: "Home",
    price: 24.99,
    image: "/images/5.avif",

    discount: 20,
  },
  {
    id: 22,
    title: "Journal",
    category: "Stationery",
    image: "/images/6.avif",
    price: 15.99,
  },
  {
    id: 23,
    title: "Wireless Earbuds",
    category: "Electronics",
    price: 89.99,
    image: "/images/7.webp",

    isNew: true,
  },
  {
    id: 24,
    title: "Weekender Bag",
    category: "Bags",
    price: 69.99,
    image: "/images/8.jpg",
    isFavorite: true,
  },
]

// Function to generate more products
export function generateMoreProducts(count: number): Product[] {
  const categories = ["Casual", "Sport", "Formal", "Vintage", "Summer", "Winter"]
  const types = ["Round-Neck", "U-Neck", "V-Neck", "Polo", "Graphic", "Striped", "Plain"]
  const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Pink"]

  return Array.from({ length: count }, (_, i) => {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const type = types[Math.floor(Math.random() * types.length)]
    const color = colors[Math.floor(Math.random() * colors.length)]
    const isNew = Math.random() > 0.8
    const isFavorite = Math.random() > 0.8
    const hasDiscount = Math.random() > 0.7
    const discount = hasDiscount ? Math.floor(Math.random() * 30) + 5 : undefined

    return {
      id: 100 + i,
      title: `${type} T-Shirt`,
      category,
      price: 19.99 + Math.floor(Math.random() * 20),
      image: `/placeholder.svg?height=400&width=400&text=${color}+T-Shirt`,
      isNew,
      isFavorite,
      discount,
    }
  })
}
