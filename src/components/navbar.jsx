"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          href="/Nightlife"
          className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Nightlife
        </Link>

      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

       
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { name: "Events", link: "/events" },
            { name: "Contacts", link: "/contacts" },
            { name: "About", link: "/about" },
            { name: "Blog", link: "/blog" },
            { name: "Reservations", link: "/reservations" },
            { name: "Shop", link: "/shop" },
          ].map((item) => (
            <li key={item.name} className="relative">
              <Link
                href={item.link}
                className="relative hover:text-purple-300 transition duration-300"
              >
                {item.name}
               
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-center flex flex-col space-y-4 py-4 md:hidden">
            {[
              { name: "Events", link: "/events" },
              { name: "Contacts", link: "/contacts" },
              { name: "About", link: "/about" },
              { name: "Blog", link: "/blog" },
              { name: "Reservations", link: "/reservations" },
              { name: "Shop", link: "/shop" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-300 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
