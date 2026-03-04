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
    <nav className="bg-white shadow-md relative w-full">
      <div className="flex items-center justify-around px-6 py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <img src="/Logo.jpg" alt="Logo" className="h-20 w-20" />
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="flex overflow-x-auto no-scrollbar space-x-6 py-2 text-sm font-medium text-gray-700 md:overflow-visible">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/destinations"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              href="/packages"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              TOURS
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              TREKKINGS
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              CUSTOMIZE TOURS
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition whitespace-nowrap"
            >
              BLOGS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
