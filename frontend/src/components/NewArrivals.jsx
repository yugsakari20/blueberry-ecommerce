import React from "react";
import { Heart, Eye, ShoppingCart, Share2 } from "lucide-react";
import i_2 from "../assets/2.jpeg"; // Replace with actual image

const categories = ['All', 'Snack & Spices', 'Fruits', 'Vegetables', 'Juice', 'Sauces', 'Chips'];

const products = [
  {
    title: "Ground Nuts Oil Pack",
    category: "Snacks",
    price: 15,
    originalPrice: 22,
    weight: "500g",
    image: i_2,
    stars: 4,
    label: "NEW",
    stockInfo: "",
  },
  {
    title: "Organic Litchi Juice Pack",
    category: "Juice",
    price: 25,
    originalPrice: 30,
    weight: "100ml",
    image: i_2,
    stars: 4,
    label: "TREND",
    stockInfo: "",
  },
  {
    title: "Crunchy Banana Chips",
    category: "Chips",
    price: 1,
    originalPrice: 2,
    weight: "100g",
    image: i_2,
    stars: 4,
    label: "",
    stockInfo: "",
  },
  {
    title: "Crunchy Potato Chips",
    category: "Chips",
    price: 25,
    originalPrice: 25,
    weight: "",
    image: i_2,
    stars: 4,
    label: "",
    stockInfo: "Out Of Stock",
  },
  {
    title: "Black Pepper Spice pack",
    category: "Spices",
    price: 32,
    originalPrice: 32,
    weight: "1 pack",
    image: i_2,
    stars: 4,
    label: "",
    stockInfo: "2 Left",
  },
  {
    title: "Small Cardamom Spice Pack",
    category: "Spices",
    price: 41,
    originalPrice: 45,
    weight: "200g",
    image: i_2,
    stars: 4,
    label: "SALE",
    stockInfo: "",
  },
  {
    title: "Chilli Flakes Pack",
    category: "Spices",
    price: 29,
    originalPrice: 31,
    weight: "250g",
    image: i_2,
    stars: 4,
    label: "NEW",
    stockInfo: "",
  },
  {
    title: "Tomato Ketchup Pack",
    category: "Sauces",
    price: 9,
    originalPrice: 10,
    weight: "",
    image: i_2,
    stars: 4,
    label: "",
    stockInfo: "",
  },
];

const StarRating = ({ count }) => (
  <div className="flex text-orange-400 text-sm">
    {"★".repeat(count)}
    {"☆".repeat(5 - count)}
  </div>
);

const NewArrivals = () => {
  return (
    <section className="p-6 md:p-10">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            New <span className="text-blue-500">Arrivals</span>
          </h2>
          <p className="text-sm text-gray-500">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-3 text-sm text-gray-600 items-center justify-start md:justify-end">
          {categories.map((cat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-gray-400">/</span>}
              <button
                className={`${
                  cat === "Snack & Spices" ? "text-blue-600 font-semibold" : ""
                } hover:text-blue-600 transition`}
              >
                {cat}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
          >
            {/* Label */}
            {product.label && (
              <div className="absolute top-2 left-2 text-xs text-gray-700 leading-none font-semibold uppercase">
                {product.label.split("").map((l, i) => (
                  <span key={i} className="block">
                    {l}
                  </span>
                ))}
              </div>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-3"
            />

            {/* Info */}
            <p className="text-sm text-gray-500">{product.category}</p>
            <h3 className="font-semibold">{product.title}</h3>
            <StarRating count={product.stars} />

            {/* Price & Weight */}
            <div className="flex items-center gap-2 text-lg mt-1">
              <span className="font-bold text-black">${product.price}</span>
              {product.price !== product.originalPrice && (
                <span className="line-through text-gray-400 text-sm">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-sm text-gray-500 ml-auto">
                {product.weight}
              </span>
            </div>

            {/* Stock Info */}
            {product.stockInfo && (
              <span
                className={`mt-1 block text-sm ${
                  product.stockInfo === "Out Of Stock"
                    ? "text-blue-600"
                    : "text-green-600"
                }`}
              >
                {product.stockInfo}
              </span>
            )}

            {/* Action Buttons */}
            {product.stockInfo !== "Out Of Stock" && (
              <div className="flex justify-center gap-2 mt-3 text-gray-500">
                <button>
                  <Heart size={18} />
                </button>
                <button>
                  <Eye size={18} />
                </button>
                <button>
                  <Share2 size={18} />
                </button>
                <button>
                  <ShoppingCart size={18} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
