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
        </div>
      </div>
    </nav>
  );
}

export default Navbar