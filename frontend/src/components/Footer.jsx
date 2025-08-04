import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      {/* Brand Directory */}
      <div className="px-6 py-10 border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold">Jewellery :</h4>
            <p className="space-x-2 mt-2">
              <span>Necklace</span>
              <span>Earrings</span>
              <span>Couple Rings</span>
              <span>Pendants</span>
              <span>Crystal</span>
              <span>Bangles</span>
              <span>Bracelets</span>
              <span>Nose Pin</span>
              <span>Chain</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Footwear :</h4>
            <p className="space-x-2 mt-2">
              <span>Sport</span>
              <span>Formal</span>
              <span>Boots</span>
              <span>Casual</span>
              <span>Cowboy Shoes</span>
              <span>Safety Shoes</span>
              <span>Party Wear Shoes</span>
              <span>Branded</span>
              <span>First Copy</span>
              <span>Long Shoes</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Fashion :</h4>
            <p className="space-x-2 mt-2">
              <span>T-Shirt</span>
              <span>Short & Jeans</span>
              <span>Jacket</span>
              <span>Dress & Frock</span>
              <span>Inner Wear</span>
              <span>Hosiery</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Cosmetics :</h4>
            <p className="space-x-2 mt-2">
              <span>Shampoo</span>
              <span>Body Wash</span>
              <span>Face Wash</span>
              <span>Makeup Kit</span>
              <span>Liner</span>
              <span>Lipstick</span>
              <span>Perfume</span>
              <span>Scrub</span>
              <span>Hair Gel</span>
              <span>Hair Dye</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-5 text-sm">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/emoji/48/blueberries.png"
                alt="BlueBerry"
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl font-bold text-gray-800">Blue<span className="text-indigo-500">Berry</span></span>
            </div>
            <p className="mb-4">
              BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
            </p>
            <div className="flex space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-semibold mb-2">Category</h5>
            <ul className="space-y-1">
              <li>Dairy & Milk</li>
              <li>Snack & Spice</li>
              <li>Fast Food</li>
              <li>Juice & Drinks</li>
              <li>Bakery</li>
              <li>Seafood</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Terms & Conditions</li>
              <li>Secure payment</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Account</h5>
            <ul className="space-y-1">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>Return Policy</li>
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 border-t border-gray-300 text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>
            Copyright © 2025 <span className="text-indigo-500 font-semibold">BlueBerry</span> all rights reserved.
          </p>
          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <FaFacebookF className="hover:text-indigo-500 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-indigo-500 cursor-pointer" />
            <FaInstagram className="hover:text-indigo-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
