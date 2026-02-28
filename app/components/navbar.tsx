import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">TravelEase</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
        <li>
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/destinations" className="hover:text-blue-500 transition">
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

      {/* Action Button */}
      <div>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
