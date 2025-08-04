// InstaGallery.jsx
import React from 'react';
import { Instagram } from 'lucide-react';
import img1 from '../assets/4.jpeg'; // Replace with your image paths


const images = [img1, img1, img1, img1, img1, img1];

const InstaGallery = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap py-10">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-44 h-44 rounded-2xl overflow-hidden group shadow-lg"
        >
          <img
            src={img}
            alt={`img-${index}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <Instagram className="text-white w-8 h-8" />
          </div>
        </div>
      ))}

      {/* #Insta label in the center */}
      <div className="text-center text-lg font-semibold text-gray-700 px-6 py-2 rounded-full border border-gray-300 bg-white shadow-sm">
        #Insta
      </div>
    </div>
  );
};

export default InstaGallery;
