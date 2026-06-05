"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Added 'relative' alongside sticky to explicitly anchor the absolute dropdown below
    <nav className="relative border-b border-surface-card bg-surface-canvas sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logo.png" 
              alt="Maayi Mary Mbuya Foundation Logo" 
              width={240} 
              height={65} 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain shrink-0"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-foundation-crimson transition-colors">Home</Link>
            <Link href="/about" className="hover:text-foundation-crimson transition-colors">About Us</Link>
            <Link href="/programs" className="hover:text-foundation-crimson transition-colors">Our Programs</Link>
            <Link href="/impact" className="hover:text-foundation-crimson transition-colors">Real Impact</Link>
            <Link 
              href="/donate" 
              className="bg-foundation-crimson text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-foundation-maroon transition-colors shadow-xs"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center relative z-50 pointer-events-auto">
            <button
                onClick={() => {
                console.log("Burger clicked!"); // Add this to debug via remote inspection if needed
                setIsOpen(!isOpen);
                }}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-text-body hover:bg-surface-card/50 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {isOpen ? (
                // Close Menu X
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Lines
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 
        Mobile Dropdown Drawer
        Swapped to class-based conditional rendering ('block' vs 'hidden') and fixed to 'top-full'
      */}
      <div 
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-surface-canvas border-t border-surface-card shadow-xl z-50`}
      >
        <div className="space-y-1 px-6 pt-3 pb-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-base font-semibold text-text-body hover:bg-surface-card"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-base font-semibold text-text-body hover:bg-surface-card"
          >
            About Us
          </Link>
          <Link
            href="/programs"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-base font-semibold text-text-body hover:bg-surface-card"
          >
            Our Programs
          </Link>
          <Link
            href="/impact"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-base font-semibold text-text-body hover:bg-surface-card"
          >
            Real Impact
          </Link>
          <div className="pt-4">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-foundation-crimson text-white text-sm font-bold tracking-wide py-3.5 rounded-xl hover:bg-foundation-maroon transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}