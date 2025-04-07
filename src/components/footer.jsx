import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 w-full text-center md:text-left">
        
        
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>📍 123 Nightlife St, Lagos, Nigeria</p>
          <p>✉ info@nightlifebrand.com</p>
          <p>📱 +234 812 738 5906</p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul>
            <li>🎉 Events</li>
            <li>🛒 Shop</li>
            <li>🍽 Reservations</li>
            <li>📖 Blog</li>
            <li>ℹ About</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <FaInstagram size={24} />
            <FaFacebookSquare size={24} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p>Get exclusive access to upcoming events & discounts!</p>
          <input type="email" placeholder="Enter email" className="mt-2 p-2 w-full text-black" />
          <button className="bg-purple-600 px-4 py-2 mt-2 rounded-2xl cursor-pointer">Subscribe</button>
        </div>

      </div>
      <div className="text-center mt-6 border-t border-gray-600 pt-4">
        <p>© {(new Date().getFullYear())} Nightlife Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
