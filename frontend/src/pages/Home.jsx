import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero1 from "../assets/hero-1.png";
import Hero2 from "../assets/hero-2.png";
import Hero3 from "../assets/hero-3.png";
import Categories from "../components/Categories";
import DealSection from "../components/DealSection";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import NewArrivals from "../components/NewArrivals";
import ServiceCards from "../components/ServiceCards";
import TopVendors from "../components/TopVendors";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogCards from "../components/BlogCards";
import InstaGallery from "../components/InstaGallery";

const slides = [
  {
    title: "Explore Healthy & Fresh Fruits",
    image: Hero1,
  },
  {
    title: "Enjoy Nature’s Best with Us",
    image: Hero2,
  },
  {
    title: "Freshness Delivered to You",
    image: Hero3,
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <div className="h-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between h-full bg-[#f8f8f8] px-8 md:px-20">
                <div className="w-full md:w-1/2 space-y-6">
                  <p className="text-gray-500 text-lg">Flat 30% Off</p>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                    {slide.title.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={`${
                          word.toLowerCase() === "healthy"
                            ? "text-indigo-500"
                            : ""
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h1>
                  <button className="mt-4 px-6 py-2 border border-black rounded hover:bg-blue-800 hover:text-white transition">
                    Shop Now
                  </button>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-h-[500px] object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <Categories />
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <DealSection />
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <CardSection />
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <Banner />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <NewArrivals />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <ServiceCards />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <TopVendors />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <TestimonialSlider />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <BlogCards />
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <InstaGallery />
      </div>
    </div>
  );
};

export default Home;
