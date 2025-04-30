import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h4 className="text-lg font-bold mb-4">FASHION</h4>
          <p className="text-sm text-gray-400 mb-4">Complete your style with awesome clothes from us.</p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-[#E6C744] flex items-center justify-center text-black">
              <Facebook size={16} />
              <span className="sr-only">Facebook</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E6C744] flex items-center justify-center text-black">
              <Twitter size={16} />
              <span className="sr-only">Twitter</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E6C744] flex items-center justify-center text-black">
              <Instagram size={16} />
              <span className="sr-only">Instagram</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E6C744] flex items-center justify-center text-black">
              <Linkedin size={16} />
              <span className="sr-only">LinkedIn</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-medium mb-4">Company</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-4">Quick Link</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Share Location
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Orders Tracking
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-4">Legal</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Terms & conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#E6C744] transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
