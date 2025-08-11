import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import img from "../assets/back-1.png"; // Placeholder image

export const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("250g");
  const [selectedImage, setSelectedImage] = useState(0); // Track selected image

  const images = [
    img,
    img,
    img,
   img,
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Images */}
      <div>
        <div className="border rounded-2xl p-4">
          <img
            src={images[selectedImage]}
            alt="Main Product"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex space-x-3 mt-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`border rounded-lg p-1 cursor-pointer transition ${
                selectedImage === idx
                  ? "border-blue-500"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <img src={img} alt={`thumb-${idx}`} className="w-16 h-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Product Info */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">
          Ground Nuts Oil Pack 52g
        </h1>

        {/* Ratings */}
        <div className="flex items-center space-x-2 text-sm mb-3">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} className="text-orange-500" />
          ))}
          <AiFillStar className="text-gray-300" />
          <span className="text-gray-500">|</span>
          <a href="#" className="text-blue-500 hover:underline">
            992 Ratings
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil
          laboriosam voluptatum ab consectetur dolor.
        </p>

        {/* Price */}
        <div className="flex items-center gap-4 mb-2">
          <span className="text-2xl font-bold text-gray-800">$923.00</span>
          <span className="bg-red-100 text-red-500 px-2 py-0.5 rounded text-sm">
            -78%
          </span>
        </div>
        <p className="text-sm text-gray-500">
          M.R.P.: <span className="line-through">$1,999.00</span>
        </p>

        {/* SKU and Stock */}
        <div className="mt-4 flex justify-between text-sm">
          <div>
            <span className="font-semibold">SKU#: </span>
            <span className="text-gray-700">WH12</span>
          </div>
          <span className="text-blue-600 font-medium">In stock</span>
        </div>

        {/* Features */}
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 text-sm">
          <li>Closure : Hook & Loop</li>
          <li>Sole : Polyvinyl Chloride</li>
          <li>Width : Medium</li>
          <li>Outer Material : A-Grade Standard Quality</li>
        </ul>

        {/* Weight Options */}
        <div className="mt-6">
          <h3 className="font-semibold text-sm mb-2">WEIGHT</h3>
          <div className="flex space-x-2">
            {["250g", "500g", "1kg", "2kg"].map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={`px-4 py-1 rounded-lg border text-sm ${
                  selectedWeight === w
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Buttons */}
        <div className="mt-6 flex items-center space-x-3">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-1 text-lg font-bold"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-lg font-bold"
            >
              +
            </button>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <FiShoppingCart />
            <span>View Cart</span>
          </button>
          <button className="border rounded-lg p-2 hover:bg-gray-100">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
