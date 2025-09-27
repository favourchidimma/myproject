"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Reservations = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const res = await fetch("https://formsubmit.co/idikafavourchidimma1@gmail.com", {
        method: "POST",
        body: new FormData(form), 
      });

      if (res.ok) {
        setSuccess(true);
        setError(false);
        form.reset();
        setTimeout(() => setSuccess(false), 5000); 
      } else {
        throw new Error();
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
      setTimeout(() => setError(false), 5000); 
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
        <div className="absolute inset-0 bg-black bg-opacity-60" />
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

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              src="/club-bg.jpg"
              alt="Nightclub background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-70" />
          </div>

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-white">
           
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Reservation</h2>
                <p className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
                  Choose from several table service arrangements including the entrance
                  fee, liquor, separate cloakroom, separate lavatory and speed entrance.
                </p>
              </div>

              <a
                href="tel:08127385906"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl hover:scale-105 transition-transform"
              >
                <span className="text-2xl">📞</span>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm tracking-wide">CONTACT US</span>
                  <span className="text-xs">08127385906</span>
                </div>
              </a>
            </div>

            <div className="w-full">
             <form
              action="https://formsubmit.co/idikafavourchidimma1@gmail.com"
              method="POST"
              onSubmit={(e) => {
                setSuccess(true);
                setError(false);
                setTimeout(() => setSuccess(false), 5000);
              }}
              className="space-y-6"
            >
             
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-gray-900 bg-opacity-80 text-white rounded-2xl focus:ring-2 focus:ring-purple-600"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-900 bg-opacity-80 text-white rounded-2xl focus:ring-2 focus:ring-purple-600"
                required
              />
              <select
                name="zone"
                className="w-full p-4 bg-gray-900 bg-opacity-80 text-white rounded-2xl focus:ring-2 focus:ring-purple-600"
                required
              >
                <option value="">Select Zone</option>
                <option>Zone A</option>
                <option>Zone B</option>
                <option>Zone C</option>
              </select>
              <select
                name="guests"
                className="w-full p-4 bg-gray-900 bg-opacity-80 text-white rounded-2xl focus:ring-2 focus:ring-purple-600"
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
                  ✅ Thank you, your reservation was sent! We’ll contact you soon.
                </p>
              )}
              {error && (
                <p className="text-red-400 mt-4" aria-live="polite">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>

            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Reservations;
