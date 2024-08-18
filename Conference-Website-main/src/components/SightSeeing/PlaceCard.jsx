/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/PlaceCard.jsx
import React from "react";

const PlaceCard = ({ place, onClick }) => (
  <div
    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
    onClick={onClick}
  >
    <img
      src={place.coverImage}
      alt={place.name}
      className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <div className="flex flex-col items-center text-center p-10">
        <p className="text-white text-lg font-semibold">{place.name}</p>
        <p className="text-white text-lg font-semibold">{place.description}</p>
      </div>
    </div>
  </div>
);

export default PlaceCard;
