"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/nightlife"
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
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/reservations">Reservations</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-center flex flex-col space-y-4 py-4 md:hidden">
            <li>
              <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
            </li>
            <li>
              <Link href="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
