import { useState } from "react";
import {
  AlignRight,
  User,
  Star,
  ShoppingCart,
  Search,
  ChevronDown,
  LayoutGrid,
  MapPin,
  X,
} from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <nav className="shadow-sm">
        {/* Top Bar */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-7xl px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Logo & Mobile Menu Toggle */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <a
                href="#"
                className="flex items-center space-x-2 text-2xl font-bold text-gray-900"
              >
                <img src={Logo} alt="Logo" className="h-10" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
              </button>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mx-auto mt-10 px-4">
              <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                {/* Category Dropdown */}
                <select className="bg-white text-sm text-gray-700 border-r border-gray-300 px-4 py-3 focus:outline-none rounded-l-full">
                  <option>Vegetables</option>
                  <option>Cold Drinks</option>
                  <option>Fruits</option>
                  <option>Bakery</option>
                </select>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                />

                {/* Search Button */}
                <button className="bg-blue-800 text-white px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex flex-col md:flex-row items-end md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <User size={24} className="text-blue-800" />
                <div className="flex-col hidden sm:flex">
                  <span className="text-xs text-gray-500">Account</span>
                  <span className="text-sm font-semibold">Login</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Star size={24} className="text-blue-800" />
                <div className="flex-col hidden sm:flex">
                  <span className="text-xs text-gray-500">3 items</span>
                  <span className="text-sm font-semibold">Wishlist</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ShoppingCart size={24} className="text-blue-800" />
                <div className="flex-col hidden sm:flex">
                  <span className="text-xs text-gray-500">4 items</span>
                  <span className="text-sm font-semibold">Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          className={`shadow-sm bg-gray-50 border-t border-gray-200 py-2 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
              {/* Nav Links */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                <a
                  href="#"
                  className="flex items-center space-x-2 font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <div className="p-2 bg-white rounded-md shadow-sm border border-gray-200">
                    <LayoutGrid size={20} className="text-gray-600" />
                  </div>
                  <span>Home</span>
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="relative font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <span>Blog</span>
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <Star size={16} className="text-gray-500" />
                  <span>Offers</span>
                </a>
              </div>

              {/* Location Selector */}
              <div className="flex items-center space-x-2 text-gray-700 border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm cursor-pointer hover:border-indigo-500 transition-colors">
                <MapPin size={20} className="text-blue-800" />
                <select>
                  <option>surat</option>
                  <option>delhi</option>
                  <option>gudgav</option>
                </select>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
