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
    <div>index</div>
  )
}

export default Navbar