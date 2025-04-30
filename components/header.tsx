"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4",
        isMenuOpen ? "bg-white" : "",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-lg flex items-center">
            <span className="mr-1">▼</span> FASHION
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/catalogue"
            className={cn(
              "text-sm uppercase transition-colors hover:text-[#E6C744]",
              pathname === "/catalogue" && "font-medium text-[#E6C744]",
            )}
          >
            Catalogue
          </Link>
          <Link
            href="/fashion"
            className={cn(
              "text-sm uppercase transition-colors hover:text-[#E6C744]",
              pathname === "/fashion" && "font-medium text-[#E6C744]",
            )}
          >
            Fashion
          </Link>
          <Link
            href="/favourite"
            className={cn(
              "text-sm uppercase transition-colors hover:text-[#E6C744]",
              pathname === "/favourite" && "font-medium text-[#E6C744]",
            )}
          >
            Favourite
          </Link>
          <Link
            href="/lifestyle"
            className={cn(
              "text-sm uppercase transition-colors hover:text-[#E6C744]",
              pathname === "/lifestyle" && "font-medium text-[#E6C744]",
            )}
          >
            Lifestyle
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/signin" className="hidden md:flex items-center text-sm">
            <User className="w-5 h-5 mr-1" />
            <span className="hidden lg:inline">Account</span>
          </Link>

          <Link href="/signup" className="bg-black text-white px-4 py-1 text-sm rounded-sm hidden md:block">
            SIGN UP
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link
              href="/catalogue"
              className={cn(
                "text-sm uppercase py-2 border-b border-gray-100",
                pathname === "/catalogue" && "font-medium text-[#E6C744]",
              )}
            >
              Catalogue
            </Link>
            <Link
              href="/fashion"
              className={cn(
                "text-sm uppercase py-2 border-b border-gray-100",
                pathname === "/fashion" && "font-medium text-[#E6C744]",
              )}
            >
              Fashion
            </Link>
            <Link
              href="/favourite"
              className={cn(
                "text-sm uppercase py-2 border-b border-gray-100",
                pathname === "/favourite" && "font-medium text-[#E6C744]",
              )}
            >
              Favourite
            </Link>
            <Link
              href="/lifestyle"
              className={cn(
                "text-sm uppercase py-2 border-b border-gray-100",
                pathname === "/lifestyle" && "font-medium text-[#E6C744]",
              )}
            >
              Lifestyle
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link href="/signin" className="text-sm py-2 px-4 border border-black rounded-sm">
                Sign In
              </Link>
              <Link href="/signup" className="bg-black text-white py-2 px-4 text-sm rounded-sm">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
