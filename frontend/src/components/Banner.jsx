import React, { useState } from "react";
import BannerImage from "../assets/banner.jpeg"; // Assuming you have a banner image

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backgroundImageUrl = BannerImage;

  return (
    <div className="relative w-full h-screen font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="p-3 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-6 right-6 z-10 w-11/12 md:w-1/3 p-8 bg-white rounded-3xl shadow-2xl flex flex-col items-start space-y-4">
        <span className="text-blue-600 text-sm font-semibold tracking-wide">
          25% Off
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Fresh & Organic vegetables
        </h1>
        <button
          onClick={() => console.log("Shop Now clicked!")}
          className="border border-gray-900 px-6 py-3 rounded-xl text-gray-900 font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
