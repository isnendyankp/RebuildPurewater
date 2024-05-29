import React from 'react'
import { useState } from 'react';


const Navbar = () => {

  // This is a state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This is a function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Navbar component starts here
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow sticky top-0 z-[100]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* This link for back to home */}
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
            Pure Water
          </span>
        </Link>
        {/* This is a button for mobile menu */}
        <div className="flex items-center">
          {/* Button with onClick event to toggle mobile menu */}
          <button
            onClick={toggleMobileMenu}
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            {/* This span for icon */}
            <span className="sr-only">Open main menu</span>
            {/*  this svg for hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* This path for hamburger icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* This for desktop menu */}
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? '' : 'hidden'
          }`}
          id="mobile-menu"
        >
          {/* This ul for menu items */}
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar