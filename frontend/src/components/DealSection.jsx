import React, { useState, useEffect } from "react";
import { Heart, Share2, ShoppingCart, Eye, X } from "lucide-react";

import Product_1 from "../assets/back-1.png";

const products = [
  {
    label: "Chocos",
    name: "Mixed Fruits Chocolates Pack",
    price: 25,
    originalPrice: 30,
    stock: "1 Pack",
    status: "",
    stars: 4,
    image: Product_1,
  },
  {
    label: "Juice",
    name: "Organic Apple Juice Pack",
    price: 15,
    originalPrice: null,
    stock: "100 ml",
    status: "HOT",
    stars: 4,
    stockStatus: "3 Left",
    image: Product_1,
  },
  {
    label: "Juice",
    name: "Mixed Almond Nuts Juice Pack",
    price: 32,
    originalPrice: 39,
    stock: "250 g",
    status: "",
    stars: 4,
    image: Product_1,
  },
  {
    label: "Fruits",
    name: "Fresh Mango Slice Juice",
    price: 25,
    originalPrice: null,
    stock: "Out Of Stock",
    status: "SALE",
    stars: 4,
    image: Product_1,
  },
];

export default function DealSection() {
  const deadline = new Date("2025-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = deadline - now;

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Day Of The <span className="text-indigo-500">Deal</span>
        </h2>
        <p className="text-gray-500">
          Don't wait. The time will never be just right.
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
          <span className="text-gray-500 mr-2">
            {timeLeft.days} {timeLeft.days === 1 ? "Day" : "Days"}
          </span>
          {String(timeLeft.hours).padStart(2, "0")} :{" "}
          {String(timeLeft.minutes).padStart(2, "0")} :{" "}
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-4 hover:shadow-md relative group transition"
          >
            {item.status && (
              <div className="absolute top-4 left-2 text-sm text-gray-500 tracking-widest rotate-90 origin-left">
                {item.status}
              </div>
            )}

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain mx-auto mb-4 transition-transform group-hover:scale-105"
            />

            {/* Hoverable Action Buttons */}
            <div className="flex justify-center gap-2 mb-3 text-gray-500">
              <button className="p-2 rounded-full hover:bg-gray-100 hover:text-red-500 hover:scale-110 transition duration-200">
                <Heart size={18} />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 hover:text-blue-500 hover:scale-110 transition duration-200"
                onClick={() => setModalImage(item.image)}
              >
                <Eye size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 hover:text-green-500 hover:scale-110 transition duration-200">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 hover:text-yellow-500 hover:scale-110 transition duration-200">
                <ShoppingCart size={18} />
              </button>
            </div>

            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="font-semibold text-lg">{item.name}</div>

            <div className="flex items-center space-x-2 mt-1">
              <span className="text-black font-bold">${item.price}</span>
              {item.originalPrice && (
                <span className="line-through text-gray-400">
                  ${item.originalPrice}
                </span>
              )}
              {item.stockStatus && (
                <span className="text-sm text-blue-500">
                  {item.stockStatus}
                </span>
              )}
            </div>

            <div className="text-sm text-gray-400 mt-1">{item.stock}</div>

            {/* Stars */}
            <div className="mt-1 flex text-yellow-500">
              {Array.from({ length: item.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {item.stars < 5 &&
                Array.from({ length: 5 - item.stars }).map((_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      {}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
              onClick={() => setModalImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Full Product"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
