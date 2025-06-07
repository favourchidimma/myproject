"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservations = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      zone: form.zone.value,
      guests: form.guests.value,
    };

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setError(false);
        form.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="bg-black text-white">
      <section className="h-[60vh] bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/images/tables-hero.jpg')" }}>
        <div className="relative w-full h-60 bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url('/rooftop.jpg')" }}>
              <div>
                <h1 className="relative text-5xl font-bold z-10 mb-7 text-center">Tables & Reservations</h1>
              </div> 
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-16">
        <motion.div {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/zone A.jpg" alt="Zone A" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Zone A</h2>
              <p className="text-gray-300">Prime view seating with immersive lighting and sound. Ideal for guests who want to be in the heart of the action.</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img src="/zone B.jpg" alt="Zone B" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Zone B</h2>
              <p className="text-gray-300">Exclusive lounge area for guests seeking privacy and VIP treatment. Perfect for celebrations and private groups.</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/booth.jpg" alt="Zone C" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Zone C</h2>
              <p className="text-gray-300">Quick access and reserved booths near the dance floor. Great for high-energy nights and group vibes.</p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="bg-black py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
  
    <div className="lg:w-1/2">
      <h2 className="text-4xl font-bold text-white mb-4">Reservation</h2>
      <p className="text-lg text-gray-300">
        Choose from several table service arrangements including the entrance fee, liquor, separate cloakroom, separate lavatory and speed entrance
      </p>
    </div>
    
    <div className="lg:w-1/2 w-full">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full p-4 bg-gray-800 text-white rounded-2xl"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 bg-gray-800 text-white rounded-2xl"
          required
        />
        <select
          name="zone"
          className="w-full p-4 bg-gray-800 text-white rounded-2xl"
          required
        >
          <option value="">Select Zone</option>
          <option>Zone A</option>
          <option>Zone B</option>
          <option>Zone C</option>
        </select>
        <select
          name="guests"
          className="w-full p-4 bg-gray-800 text-white rounded-2xl"
          required
        >
          <option value="">Number of Guests</option>
          <option>1-5</option>
          <option>6-10</option>
          <option>11-15</option>
          <option>16+</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-2xl border border-white text-lg hover:bg-white hover:text-black transition px-6 py-4 text-white font-semibold"
        >
          Submit Reservation
        </button>
        {success && (
          <p className="text-green-400 mt-4">
            Yay! We received your message and will follow up soon!
          </p>
        )}
        {error && (
          <p className="text-red-400 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  </div>
</section>

    </div>
  );
};

export default Reservations;
