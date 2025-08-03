import React from "react";
import BasketImg from "../assets/one.png";
import FruitsImg from "../assets/two.png";

const CardSection = () => {
  return (
    <section className="flex justify-center items-center py-16 px-4">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Card 1 */}
        <div className="bg-orange-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between w-full shadow-lg">
          <div className="md:order-2 text-center md:text-left md:ml-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              <span className="text-indigo-500 font-bold">Tasty</span> Snack &
              <br />
              Fast food
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              The flavor of something special
            </p>
            <button className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-xl shadow-md hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
          <img
            src={BasketImg}
            alt="Tasty Snacks"
            className="w-48 md:w-64 object-contain mt-6 md:mt-0 md:order-1"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between w-full shadow-lg">
          <div className="md:order-2 text-center md:text-left md:ml-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Fresh Fruits &<br /> Vegetables
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              A healthy meal for everyone
            </p>
            <button className="mt-4 px-6 py-3 border-2 border-gray-600 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
          <img
            src={FruitsImg}
            alt="Fresh Fruits"
            className="w-48 md:w-64 object-contain mt-6 md:mt-0 md:order-1"
          />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
