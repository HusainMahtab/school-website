// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img
                src="https://media.istockphoto.com/id/1867127318/photo/square-root-icon-flat-style-design-isolated-on-black-background-3d-rendering-wireframe.webp?b=1&s=170667a&w=0&k=20&c=lwNgErE10SfXSZzo5fILmk2wdgDTJanMPFkbHlS6AOs="
                alt="Logo"
                className="h-8 rounded-lg"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/academics"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Academics
            </Link>
            <Link
              to="/admissions"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Admissions
            </Link>
            <Link
              to="/faculty"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Faculty
            </Link>
            <Link
              to="/students"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Students
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mr-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            About Us
          </Link>
          <Link
            to="/academics"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Academics
          </Link>
          <Link
            to="/admissions"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Admissions
          </Link>
          <Link
            to="/faculty"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Faculty
          </Link>
          <Link
            to="/students"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Students
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
