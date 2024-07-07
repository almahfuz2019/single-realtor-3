"use client";
import Image from "next/image";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/Images/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close
  const menuRef = useRef(null); // Reference to the menu element

  // Handle clicks outside the menu to close it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add and clean up event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white relative z-10 montserrat-font">
      <div className="navbar z-50 text-secondary max-w-[1420px] mx-auto pt-5 px-4">
        {/* Logo */}
        <div className="navbar-start">
          <a href="#home">
            <Image height="72" width="116" src={logo} alt="Tech Plato Logo" />
          </a>
        </div>
        {/* Menu for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              "Home",
              "About Me",
              "Services",
              "Listing",
              "Guideline",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-black hover:text-primary text-2xl font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex">
          {/* Social media icons for large screens */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a href="#" className="text-secondary text-xl">
                <ImFacebook className="text-white bg-black h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <ImTwitter className="text-white bg-black h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <FaInstagram className="text-white bg-black h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
          </ul>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <div
              className="dropdown dropdown-end bg-secondary shadow rounded-md"
              ref={menuRef}
            >
              <button
                className="bg-secondary text-black p-2 focus:outline-none rounded-xl focus:shadow-outline"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {/* Menu icon */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 sm:w-10 h-6 sm:h-10"
                >
                  <path
                    className={!menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    className={menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {menuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md rounded-box w-52 sm:w-60 bg-secondary"
                >
                  {[
                    "Home",
                    "About Me",
                    "Services",
                    "Listing",
                    "Guideline",
                    "Contact",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-black text-xl sm:text-2xl sm:mt-3 mt-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
