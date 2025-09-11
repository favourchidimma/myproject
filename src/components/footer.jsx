import React from "react";
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
            <li>🎉 Events</li>
            <li>🛒 Shop</li>
            <li>🍽 Reservations</li>
            <li>📖 Blog</li>
            <li>ℹ About</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <FaInstagram size={24}
             />
            <FaFacebookSquare size={24} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm mb-2">Get exclusive access to upcoming events & discounts!</p>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 rounded text-black"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 transition mt-2 px-4 py-2 rounded-2xl text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Nightlife Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
