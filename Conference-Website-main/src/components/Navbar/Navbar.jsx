/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/Logo for the website.png";
import logo1 from "../../assets/Logo_ResGenXAI.png";
import logo2 from "../../assets/ieee.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    {
      name: "Call for Papers",
      link: "/callForPapers",
      // submenu: [
      //   {
      //     name: "Call for Papers",
      //     link: "/callForPapers",
      //     external: false,
      //   },
      // ],
    },
    {
      name: "Author & Reviewer Guidelines",
      link: "/authorguidelines",
    },
    {
      name: "Attend",
      link: "/",
      submenu: [
        {
          name: "Register",
          link: "/",
          external: false,
        },
        { name: "Code of Conduct", link: "/codeofconduct", external: false },
        { name: "Program Overview", link: "/", external: false },
      ],
    },
    {
      name: "Organization",
      link: "/",
      submenu: [
        {
          name: "Organizing Committee",
          link: "/organizingcommittee",
          external: false,
        },
        {
          name: "International TPC",
          link: "/internationaltpc",
          external: false,
        },
      ],
    },
    { name: "Sight Seeing", link: "/sightseeing" },
  ];

  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (submenuItem) => {
    setActiveSubmenu(submenuItem);
    setOpen(false); // Close the navbar
  };

  const handleContactClick = () => {
    setOpen(false); // Close the navbar
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border-white">
        <a className="flex items-center" href="#">
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[100px] object-contain md:w-32"
          />
        </a>
        <div className="flex flex-col items-center space-y-2 lg:ml-1 ml-3 justify-center ">
          <img
            src={logo1}
            alt="logo1"
            className="w-[120px] h-auto object-contain md:w-32"
          />
          <p className="text-sm lg:text-2xl neuton-regular font-medium text-black text-center">
            2025 International Conference on
          </p>
          <h1 className="text-lg neuton-bold font-semibold md:text-3xl lg:text-3xl text-center">
            Responsible, Generative and Explainable AI (ResGenXAI)
          </h1>
        </div>
        <img
          src={logo2}
          alt="ieee logo"
          className="w-[120px] h-auto object-contain md:w-36"
        />
      </header>
      <nav className="sticky top-0 shadow-md w-full border border-gray-400 z-50 bg-gray-400">
        <div className="container mx-4 px-4">
          <div className="flex items-center justify-end py-4 relative gap-8">
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-white focus:outline-none"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul
              className={`md:flex md:items-center md:space-x-8 ${
                open
                  ? "block absolute top-full left-0 w-full bg-white p-4"
                  : "hidden"
              } md:static md:w-auto md:bg-transparent md:p-0`}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="menu-item text-base relative group py-2 md:py-0"
                >
                  <a
                    href={link.link}
                    className="text-black text-lg heading hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <ul className="submenu w-60 md:absolute md:bg-white md:shadow-lg md:rounded-base">
                      {link.submenu.map((subItem, index) => (
                        <li
                          key={index}
                          className={`md:px-4 md:py-2 ${
                            activeSubmenu === subItem.name
                              ? "bg-purple-200"
                              : ""
                          }`}
                          onClick={() => handleSubmenuClick(subItem.name)}
                        >
                          {subItem.external ? (
                            <a
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black heading hover:text-[#dc44d5] block"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              to={subItem.link}
                              className="text- heading hover:text-[#dc44d5] block"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="md:hidden mt-4">
                <Link to="https://forms.zohopublic.in/rahulmohanty637/form/ReviewerForm/formperma/-FMox_h3vHZLZkoXlDCxdnD0e7aNICOifwJXlHRj2hI">
                  <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#a037c9] w-full">
                    Register Now
                  </button>
                </Link>
              </li>
            </ul>
            {/* <Link
              to="https://forms.zohopublic.in/rahulmohanty637/form/ReviewerForm/formperma/-FMox_h3vHZLZkoXlDCxdnD0e7aNICOifwJXlHRj2hI"
              className="hidden md:block"
            >
              <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#c9379b] w-full">
                Register Now
              </button>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// export const links = [
//   {
//     name: "Home",
//     link: "/home",
//   },
//   {
//     name: "About",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "About the Conference",
//         sublink: [
//           { name: "About the Conference", link: "/about/conference" },
//           { name: "Organizers", link: "/about/organizers" },
//           { name: "Committees", link: "/about/committees" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Program",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Program",
//         sublink: [
//           { name: "Schedule", link: "/program/schedule" },
//           { name: "Keynote Speakers", link: "/program/keynotes" },
//           { name: "Workshops", link: "/program/workshops" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Call for Papers",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Call for Papers",
//         sublink: [
//           { name: "Submission Guidelines", link: "/callforpapers/guidelines" },
//           { name: "Important Dates", link: "/callforpapers/dates" },
//           { name: "Tracks", link: "/callforpapers/tracks" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Registration",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Registration",
//         sublink: [
//           { name: "Registration Fees", link: "/registration/fees" },
//           { name: "Registration Form", link: "/registration/form" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Venue",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Venue",
//         sublink: [
//           { name: "Location", link: "/venue/location" },
//           { name: "Accommodation", link: "/venue/accommodation" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Sponsors",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Sponsors",
//         sublink: [
//           { name: "Sponsorship Opportunities", link: "/sponsors/opportunities" },
//           { name: "Current Sponsors", link: "/sponsors/current" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
// ];
