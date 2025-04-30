import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface Product {
  id: number
  title: string
  category: string
  price: number
  image: string
  discount?: number
  isNew?: boolean
  isFavorite?: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const { image, title, category, price, discount, isNew, isFavorite } = product

  return (
    <div className="flex flex-col group h-full">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[#f5f5f5] rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Discount badge */}
        {discount && (
          <div className="absolute top-2 left-2 bg-[#E6C744] text-black text-xs font-medium px-2 py-1 rounded-sm">
            {discount}% OFF
          </div>
        )}

        {/* New badge */}
        {isNew && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-1 rounded-sm">NEW</div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
        <Link href="#" className="text-sm flex items-center">
          <span className="mr-1 text-xs">Explore Now!</span>
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex items-center mt-1">
        <p className="text-sm font-medium">${price.toFixed(2)}</p>
        {discount && (
          <p className="text-xs text-gray-500 line-through ml-2">${(price / (1 - discount / 100)).toFixed(2)}</p>
        )}
      </div>
    </div>
  )
}
