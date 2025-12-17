import Container from "./ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/sultanlogo.png"
              alt="Sultan Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Premium industrial adhesives, sealants, foams, and spray solutions for professional builders and manufacturers.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Products</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/categories" className="hover:text-primary transition">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/customer-care" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/customer-care/faq" className="hover:text-primary transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/customer-care/shopping-guide" className="hover:text-primary transition">
                Shopping Guide
              </Link>
            </li>
            <li>
              <Link href="/customer-care/returns" className="hover:text-primary transition">
                Return & Exchange
              </Link>
            </li>
            <li>
              <Link href="/customer-care/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Human Rights</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care/humanRightPolicy" className="hover:text-primary transition">
                Human Rights Policy
              </Link>
            </li>
            <li>
              <Link href="/customer-care/humanRightsAnalysisProcessDescription" className="hover:text-primary transition">
                Human Rights Analysis Process
              </Link>
            </li>
                        <li>
              <Link href="/customer-care/humanRightsDueDiligance" className="hover:text-primary transition">
                Human Rights Due Diligance
              </Link>
            </li>
            <li>
              <Link href="/customer-care/supplierIncentiveProcessDescription" className="hover:text-primary transition">
                Supplier Incentive Process 
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} Sultan Co. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/customer-care/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link href="/customer-care/returns" className="hover:text-primary transition">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
