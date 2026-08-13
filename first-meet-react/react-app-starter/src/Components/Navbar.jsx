import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          Logo
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden focus:outline-none p-2 rounded hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              /* Close (X) Icon */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              /* Hamburger Icon */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 pb-2">
          <a href="#" className="hover:bg-gray-800 px-3 py-2 rounded-md">
            Home
          </a>
          <a href="#" className="hover:bg-gray-800 px-3 py-2 rounded-md">
            About
          </a>
          <a href="#" className="hover:bg-gray-800 px-3 py-2 rounded-md">
            Services
          </a>
          <a href="#" className="hover:bg-gray-800 px-3 py-2 rounded-md">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
