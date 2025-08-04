import React, { useState } from "react";
import VendorImg1 from "../assets/img-1.jpeg";
import VendorImg2 from "../assets/img-4.jpeg";


const vendors = [
  {
    name: "Mira Fashion Pvt. Ltd.",
    categories: "Fruits (5) | Vegetables (30) | Snacks (09)",
    sales: 587,
    active: true,
    image: VendorImg1,
  },
  {
    name: "Eelna Fashion Pvt. Ltd.",
    categories: "Fruits (8) | Vegetables (15) | Snacks (04)",
    sales: 428,
    image: VendorImg2,
  },
  {
    name: "Mario Fashion Pvt. Ltd.",
    categories: "Fruits (16) | Vegetables (42) | Snacks (18)",
    sales: 1024,
    image: VendorImg1,
  },
  {
    name: "Maria Fashion Pvt. Ltd.",
    categories: "Fruits (2) | Vegetables (10) | Snacks (03)",
    sales: 210,
    image: VendorImg2,
  },
];

const TopVendors = () => {
  const [selectedVendor, setSelectedVendor] = useState(vendors[0]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-2">
        Top <span className="text-blue-600">Vendors</span>
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Discover Our Trusted Partners: Excellence & Reliability in Every Choice
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={selectedVendor.image}
            alt={selectedVendor.name}
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {vendors.map((vendor, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVendor(vendor)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedVendor.name === vendor.name
                  ? "bg-white border-blue-500 shadow-md"
                  : "bg-gray-50 border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{vendor.name}</h3>
                  <p className="text-sm text-gray-500">{vendor.categories}</p>
                </div>
                <span className="text-sm text-gray-600">
                  Sales - {vendor.sales}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopVendors;
