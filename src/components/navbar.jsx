"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { ShoppingCart } from "lucide-react";
import { Sparkles } from "lucide-react"; // small icon for logo accent
import { useCartState } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCartState();

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const navLinks = [
    { name: "Events", link: "/events" },
    { name: "Contacts", link: "/contacts" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Reservations", link: "/reservations" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-500" />
            <span className="text-3xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
              Nightlife
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-10 text-lg items-center">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.link}
                className="relative hover:text-purple-400 transition duration-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* Cart */}
          <li className="relative">
            <Link
              href="/cart"
              className="relative flex items-center hover:text-purple-400 transition duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="relative">
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center hover:text-purple-400 transition duration-300"
              >
                <ShoppingCart className="w-6 h-6 mr-1" /> Cart
                {cartCount > 0 && (
                  <span className="ml-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
