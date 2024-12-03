/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];
const Footer = () => {
  return (
    <div
      className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300
    "
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className="flex items-center justify-center gap-3">
            <img src="" alt="" className="w-16 " />

          </div>
          <div className="sm:block ">Contact us: +91 7978029866, saneev.das@cutm.ac.in</div>
          <nav className="hidden md:block">
           
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
