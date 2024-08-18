/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProfileCard = ({
  title,
  name,
  position,
  department,
  organization,
  image,
}) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4 max-w-sm transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 hover:border-b-4 border-primary duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        {image && (
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-lg font-semibold neuton-light text-gray-800">{title}</h2>
          <p className="mt-2 heading text-gray-600">{name}</p>
          <p className="heading text-gray-500">{position}</p>
          {department && <p className="heading text-gray-500">{department}</p>}
          <p className="heading text-gray-500">{organization}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
