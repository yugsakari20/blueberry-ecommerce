import React from "react";

import TruckImg from "../assets/1.png";
import HadPhone from "../assets/2.png";
import Box from "../assets/3.png";
import Payment from "../assets/4.png";


const services = [
  {
    icon: <img src={TruckImg} alt="Free Shipping" className="w-20 h-20" />,
    title: "Free Shipping",
    description: "Free shipping on all US order or above $200",
  },
  {
    icon: <img src={ HadPhone} alt="Free Shipping" className="w-20 h-20" />,
    title: "24x7 Support",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
   icon: <img src={Box} alt="Free Shipping" className="w-20 h-20" />,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
  },
  {
    icon: <img src={ Payment} alt="Free Shipping" className="w-20 h-20" />,
    title: "Payment Secure",
    description: "Contact us 24 hours a day, 7 days a week",
  },
];

const ServiceCards = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-xl shadow-sm border text-center p-6 hover:shadow-lg transition"
        >
          <div className="flex justify-center mb-4">{service.icon}</div>
          <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
