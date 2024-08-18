/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Slider.jsx
import React from "react";

const Slider = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full md:w-5/6 lg:w-3/4 max-w-6xl">
        <button
          onClick={onClose}
          className="text-black text-lg font-semibold mb-4 md:mb-6"
        >
          Close
        </button>
        <div className="flex overflow-x-scroll space-x-6 md:space-x-8 scrollbar-hide">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Slider"
              className="h-72 md:h-96 lg:h-120 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
