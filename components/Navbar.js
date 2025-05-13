"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-800 text-white p-4 animated-gradient fixed top-0 left-0 right-0 z-50 shadow-md border-b-1 border-gray-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative group font-kanit-medium">
          Workforce Augmentation Lab
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger bars (or X when open) */}
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Navigation Links (visible on desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/people" className="relative group">
            People
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/research" className="relative group">
            Research
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/teaching" className="relative group">
            Teaching
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/publications" className="relative group">
            Publications
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-start space-y-4 p-4 bg-neutral-800 border-t border-gray-600">
          <Link href="/" className="relative group text-white" onClick={toggleMenu}>
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/people" className="relative group text-white" onClick={toggleMenu}>
            People
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/research" className="relative group text-white" onClick={toggleMenu}>
            Research
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/teaching" className="relative group text-white" onClick={toggleMenu}>
            Teaching
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/publications" className="relative group text-white" onClick={toggleMenu}>
            Publications
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group text-white" onClick={toggleMenu}>
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDD023] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}