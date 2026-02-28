"use client"; // Required for interactivity (useState)

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">TravelEase</Link>
        </div>

        {/* Hamburger Icon (Visible on Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2"
          >
            {/* Simple SVG icon that changes based on menu state */}
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/destinations"
              className="hover:text-blue-500 transition"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/packages" className="hover:text-blue-500 transition">
              Packages
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition">
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Action Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, toggled via state) */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-100`}
      >
        <ul className="flex flex-col space-y-4 px-8 py-6 font-medium text-gray-700">
          <li>
            <Link onClick={() => setIsOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/destinations">
              Destinations
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/packages">
              Packages
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/contact"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg w-full text-center"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
