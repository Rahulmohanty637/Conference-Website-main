/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProfileCard = ({ title, name, position, department, organization }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 hover:border-b-4 border-blue-500 duration-300 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{name}</p>
      <p className="text-gray-500">{position}</p>
      {department && <p className="text-gray-500">{department}</p>}
      <p className="text-gray-500">{organization}</p>
    </div>
  );
};

export default ProfileCard;
