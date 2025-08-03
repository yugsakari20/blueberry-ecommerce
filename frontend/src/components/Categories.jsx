import React from "react";
import "../CSS/category.css"; // Optional: only if you have extra custom styles
import HeroImg from "../assets/category.jpeg"; // Replace with your actual image path

const categories = [
  { icon: "🍹", title: "Cold Drinks", items: 49, bg: "bg-purple-100" },
  { icon: "🧁", title: "Bakery", items: 8, bg: "bg-yellow-100" },
  { icon: "🥬", title: "Vegetables", items: 485, bg: "bg-pink-100" },
  { icon: "🍒", title: "Fruits", items: 291, bg: "bg-green-100" },
];

export default function Categories() {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-10 p-8">
      {/* Left Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-md">
        <img src={HeroImg} alt="Hero" className="object-cover w-full h-full" />
        <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
          50% Off
        </div>
      </div>

      {/* Text & Categories */}
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight mb-6 tracking-tight">
          Explore <br /> Categories
        </h1>

        {/* Category Cards */}
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md ${cat.bg} w-40`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h2 className="text-lg font-semibold">{cat.title}</h2>
              <p className="text-gray-600 text-sm">
                {cat.items.toString().padStart(2, "0")} items
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
