import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
      
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📍 123 Nightlife St, Lagos, Nigeria</p>
          <p className="text-sm">✉ info@nightlifebrand.com</p>
          <p className="text-sm">📱 +234 812 738 5906</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/events" className="hover:underline">
                🎉 Events
              </Link>
            </li>
            
            <li>
              <Link href="/reservations" className="hover:underline">
                🍽 Reservations
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                📖 Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                ℹ About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 cursor-pointer">
            <a
              href="https://www.instagram.com/chidimma1125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1A5A6x7RjN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm mb-2">
            Get exclusive access to upcoming events & discounts!
          </p>
          <form
            action="https://formsubmit.co/idikafavourchidimma1@gmail.com" 
            method="POST"
            className="w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              className="w-full p-2 rounded text-gray-400 bg-gray-800 border border-gray-600 outline-none"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Footer Subscriber!" />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition mt-2 px-4 py-2 rounded-2xl text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Nightlife Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
