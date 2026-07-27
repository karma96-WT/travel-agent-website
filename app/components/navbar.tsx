"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importing usePathname to determine the current route for active link styling

interface NavbarProps {
  isScrolled: boolean; // Explicitly type it as boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const pathname = usePathname(); // Get the current URL path
  const scrollRef = useRef<HTMLUListElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if scrolling is possible in either direction
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Show left arrow if we have scrolled at least 1px
      setShowLeftArrow(scrollLeft > 1);
      // Show right arrow if the scrolled amount + visible width is less than total width
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `transition whitespace-nowrap px-2 py-1 rounded-md ${
      isActive
        ? "text-green-600 font-bold border-b-2 border-green-900" // Active Styles
        : "text-gray-700 hover:text-green-500" // Inactive Styles
    }`;
  };

  const getMobileLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `transition block w-full px-4 py-3 rounded-md ${
      isActive
        ? "text-green-600 font-bold border-l-4 border-green-900 bg-green-50" // Active Styles
        : "text-gray-700 hover:text-green-500 hover:bg-gray-50" // Inactive Styles
    }`;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll(); // Check on initial load
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll); // Check if screen size changes
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`bg-transparent w-full fixed top-0 z-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-around px-6 py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-blue-600 flex-shrink-0">
          <Link href="/">
            <img
              src="/Circle Logo.png"
              alt="Logo"
              className="h-20 w-20 rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation Container with Arrows */}
        <div className="relative hidden md:flex items-center overflow-hidden max-w-full ml-4">
          {/* Left Arrow Icon */}
          {showLeftArrow && (
            <div className="absolute left-0 z-10 bg-gradient-to-r from-white via-white to-transparent pr-4 pointer-events-none">
              <span className="text-green-900 font-bold justify-center">←</span>
            </div>
          )}

          {/* Scrollable List */}
          <ul
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-6 py-2 text-sm font-medium text-gray-700 overflow-visible scroll-smooth"
          >
            <li>
              <Link href="/" className={getLinkClassName("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/pages/aboutus"
                className={getLinkClassName("/pages/aboutus")}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/pages/tours"
                className={getLinkClassName("/pages/tours")}
              >
                TOURS
              </Link>
            </li>
            <li>
              <Link
                href="/pages/treckking"
                className={getLinkClassName("/pages/treckking")}
              >
                TRAVEL INFORMATION
              </Link>
            </li>
            <li>
              <Link
                href="/pages/customized-tour"
                className={getLinkClassName("/pages/customized-tour")}
              >
                CUSTOMIZE TOURS
              </Link>
            </li>
            <li>
              <Link
                href="/pages/gallery"
                className={getLinkClassName("/pages/gallery")}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/pages/blogs"
                className={getLinkClassName("/pages/blogs")}
              >
                BLOGS
              </Link>
            </li>
          </ul>

          {/* Right Arrow Icon */}
          {showRightArrow && (
            <div className="absolute right-0 z-10 bg-gradient-to-l from-white via-white to-transparent pl-4 pointer-events-none">
              <span className="text-green-900 font-bold">→</span>
            </div>
          )}
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-2" : "top-0"
              }`}
            />
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "top-2"
              }`}
            />
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-2" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: 0 }}
      >
        <div className="pt-20 pb-6 px-4 h-screen overflow-y-auto">
          <ul className="flex flex-col space-y-1 text-sm font-medium">
            <li>
              <Link href="/" className={getMobileLinkClassName("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/pages/aboutus"
                className={getMobileLinkClassName("/pages/aboutus")}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/pages/tours"
                className={getMobileLinkClassName("/pages/tours")}
              >
                TOURS
              </Link>
            </li>
            <li>
              <Link
                href="/pages/treckking"
                className={getMobileLinkClassName("/pages/treckking")}
              >
                TRAVEL INFORMATION
              </Link>
            </li>
            <li>
              <Link
                href="/pages/customized-tour"
                className={getMobileLinkClassName("/pages/customized-tour")}
              >
                CUSTOMIZE TOURS
              </Link>
            </li>
            <li>
              <Link
                href="/pages/gallery"
                className={getMobileLinkClassName("/pages/gallery")}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/pages/blogs"
                className={getMobileLinkClassName("/pages/blogs")}
              >
                BLOGS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
