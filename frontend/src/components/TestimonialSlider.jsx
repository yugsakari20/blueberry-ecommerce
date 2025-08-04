import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import user1 from "../assets/1.jpeg";
import bgImage from "../assets/lovepik-blueberry-fruit-banner-background-image_500538285.jpg"; // Background image

const testimonials = [
  {
    name: "Isabella Oliver",
    position: "Manager",
    image: user1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis.",
  },
  {
    name: "John Carter",
    position: "Product Lead",
    image: user1,
    quote:
      "Totam dolores incidunt iusto tempora magni. Nobis alias unde sit, veritatis distinctio minima molestias blanditiis ab.",
  },
  {
    name: "Emily Watson",
    position: "UX Designer",
    image: user1,
    quote:
      "Animi illo nemo. Provident quas natus blanditiis, itaque tenetur veniam dolorum ipsam ipsa ab inventore perferendis officiis.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <h2 className="text-5xl font-bold text-white mb-10 text-center">
          Testimonials
        </h2>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="max-w-5xl w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white bg-opacity-90 shadow-xl rounded-3xl p-6 md:p-12">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-80 h-80 object-cover rounded-3xl shadow-md"
                />
                <div className="text-center md:text-left max-w-xl">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mb-4">({item.position})</p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
