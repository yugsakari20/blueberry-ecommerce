import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import img2 from "../assets/two.png"; // Placeholder image, replace with actual image import

const products = [
  {
    id: 1,
    name: "Ground Nuts Oil Pack",
    price: 15,
    image:img2,
    weight: ["250g", "500g", "1kg"],
  },
  {
    id: 2,
    name: "Organic Litchi Juice Pack",
    price: 25,
    image: img2,
    weight: ["250g", "500g", "1kg"],
  },
  {
    id: 3,
    name: "Crunchy Banana Chips",
    price: 20,
    image: img2,
    weight: ["250g", "500g", "1kg"],
  },
];

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Customer Info & Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing & Shipping Details */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Billing & Shipping Details
              </h2>
              <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <FaRegEdit size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="123 Main St"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Post Code
                </label>
                <input
                  type="text"
                  placeholder="10001"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                  <option>United States</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region/State
                </label>
                <select className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                  <option>New York</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <input
                type="checkbox"
                id="same-address"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="same-address" className="ml-2 text-sm text-gray-700">
                Shipping address is the same as my billing address
              </label>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Delivery Method
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500 has-[:checked]:ring-2 has-[:checked]:ring-blue-500 transition-all duration-200">
                <input
                  type="radio"
                  name="shipping"
                  value="free"
                  checked={shippingMethod === "free"}
                  onChange={() => setShippingMethod("free")}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-gray-800">
                    Free Shipping
                  </span>
                  <span className="block text-sm text-gray-500">
                    Typically 5-7 business days
                  </span>
                </div>
                <span className="font-semibold text-gray-800">$0.00</span>
              </label>
              <label className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500 has-[:checked]:ring-2 has-[:checked]:ring-blue-500 transition-all duration-200">
                <input
                  type="radio"
                  name="shipping"
                  value="flat"
                  checked={shippingMethod === "flat"}
                  onChange={() => setShippingMethod("flat")}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-gray-800">
                    Flat Rate Shipping
                  </span>
                  <span className="block text-sm text-gray-500">
                    Typically 2-3 business days
                  </span>
                </div>
                <span className="font-semibold text-gray-800">$5.00</span>
              </label>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                placeholder="Add comments about your order..."
                rows="3"
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Payment Method
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500 has-[:checked]:ring-2 has-[:checked]:ring-blue-500 transition-all duration-200">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <span className="block font-medium text-gray-800">
                    Cash On Delivery
                  </span>
                  <span className="block text-sm text-gray-500">
                    Pay with cash upon delivery.
                  </span>
                </div>
              </label>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                placeholder="Add comments about your order..."
                rows="3"
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-6">
          {/* Order Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-4 border-b border-gray-200 pb-4">
              {products.map((product) => (
                <div key={product.id} className="flex gap-4 items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-semibold text-blue-600">
                        ${product.price}
                      </span>
                      <span className="text-gray-500">x 1</span>
                      <div className="flex gap-1 text-xs">
                        {product.weight.map((w, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <FaRegEdit />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-sm space-y-3 mt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub-total</span>
                <span className="font-medium text-gray-800">$95.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="font-medium text-gray-800">$5.00</span>
              </div>
              <div className="flex justify-between items-center text-red-500 cursor-pointer">
                <span>Coupon Discount</span>
                <span className="font-semibold hover:underline">
                  Apply Coupon
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-blue-600">$100.00</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}