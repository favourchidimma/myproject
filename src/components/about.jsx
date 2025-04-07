import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full">
    
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/instaimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <h1 className="relative text-white text-6xl font-bold text-center px-6">
          Experience the Night Like Never Before
        </h1>
      </div>


      <div className="max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to Nightlife, where there are  unforgettable experiences. 
          Our journey began with a passion for music, entertainment, and creating a space where people 
          can connect, dance, and make lasting memories. Whether you're here for the beats, the drinks, 
          or the electrifying atmosphere, we've got something special for you.
        </p>
      </div>

    
      <div className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
          At Nightlife, we believe in curating extraordinary nightlife experiences. 
          Our goal is to blend top-tier entertainment with an ambiance that brings people together.
        </p>
      </div>

      <div className="relative bg-cover bg-center w-full h-60 flex items-center justify-center"
        style={{ backgroundImage: "url('/.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h3 className="relative text-white text-4xl font-semibold text-center max-w-2xl">
          Ready to experience the best nightlife? Join us today!
        </h3>
      </div>
    </div>
  );
};

export default About;
