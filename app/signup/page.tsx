"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Add padding to account for fixed header */}
      <div className="pt-20"></div>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Form Side */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#E6C744] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                  <p className="text-gray-600 mb-6">Thank you for signing up. You can now log in to your account.</p>
                  <Link href="/signin" className="bg-black text-white px-6 py-3 rounded-sm inline-block">
                    Sign In
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${errors.password ? "border-red-500" : "border-gray-300"}`}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-[#E6C744]">
                            Terms and Conditions
                          </Link>
                        </span>
                      </label>
                      {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-sm hover:bg-gray-900 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Account..." : "Sign Up"}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link href="/signin" className="text-[#E6C744] font-medium">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Image Side */}
            <div className="hidden md:block relative h-[600px] bg-[#FFF9E5] rounded-lg overflow-hidden">
              <Image
                src="/images/Signup.jpg"
                alt="Sign Up"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-12">
                <h3 className="text-3xl font-bold text-white mb-4">Join Our Fashion Community</h3>
                <ul className="text-white space-y-4">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E6C744] rounded-full mr-3 flex items-center justify-center text-black text-sm">
                      ✓
                    </span>
                    Exclusive access to new collections
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E6C744] rounded-full mr-3 flex items-center justify-center text-black text-sm">
                      ✓
                    </span>
                    Special discounts for members
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E6C744] rounded-full mr-3 flex items-center justify-center text-black text-sm">
                      ✓
                    </span>
                    Early access to seasonal sales
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E6C744] rounded-full mr-3 flex items-center justify-center text-black text-sm">
                      ✓
                    </span>
                    Free shipping on your first order
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
