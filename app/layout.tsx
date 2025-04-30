import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Fashion E-commerce",
  description: "Trendy T-Shirts and Fashion Items",
  icons: {
    icon: "/favicon.ico", // /public path
    // You can add more icons for different use cases
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    // shortcut: '/shortcut-icon.png',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", poppins.variable)}>{children}</body>
    </html>
  )
}
