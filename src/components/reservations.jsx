"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setError(false);
        form.reset();
        setTimeout(() => setSuccess(false), 5000); // Auto-hide after 5s
      } else {
        throw new Error();
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
      setTimeout(() => setError(false), 5000); // Auto-hide after 5s
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
      <section
        className="h-[50vh] sm:h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/rooftop.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50" />
        <h1 className="relative z-10 text-3xl sm:text-5xl font-bold text-center px-4">
          Tables & Reservations
        </h1>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20">
        {[
          {
            title: "Zone A",
            image: "/zone A.jpg",
            description:
              "Prime view seating with immersive lighting and sound. Ideal for guests who want to be in the heart of the action.",
            price: "₦100,000",
          },
          {
            title: "Zone B",
            image: "/zone B.jpg",
            description:
              "Exclusive lounge area for guests seeking privacy and VIP treatment. Perfect for celebrations and private groups.",
            reverse: true,
            price: "₦150,000",
          },
          {
            title: "Zone C",
            image: "/booth.jpg",
            description:
              "Quick access and reserved booths near the dance floor. Great for high-energy nights and group vibes.",
            price: "₦80,000",
          },
        ].map(({ title, image, description, reverse, price }, index) => (
          <motion.div key={index} {...fadeIn}>
            <div
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <img
                src={image}
                alt={title}
                className="w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
              />
              <div className="text-center md:text-left md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-300">{description}</p>
                <p className="text-purple-400 font-bold mt-2">{price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-4xl font-bold">Reservation</h2>
            <p className="text-lg text-gray-300">
              Choose from several table service arrangements including the
              entrance fee, liquor, separate cloakroom, separate lavatory and
              speed entrance.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full rounded-2xl border border-white text-lg hover:bg-white hover:text-black transition px-6 py-4 font-semibold"
              >
                Submit Reservation
              </button>
              {success && (
                <p className="text-green-400 mt-4" aria-live="polite">
                  Yay! We received your message and will follow up soon!
                </p>
              )}
              {error && (
                <p className="text-red-400 mt-4" aria-live="polite">
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
