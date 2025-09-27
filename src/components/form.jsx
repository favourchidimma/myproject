"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function InlineForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
        method: "POST",
        body: new FormData(e.target), 
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Something went wrong, try again.");
      }
    } catch (err) {
      toast.error("Network error, please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-black bg-opacity-60 rounded-2xl">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
        Never miss a show of your favorite artist
      </h2>

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-lg"
      >
       
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="New Nightclub Subscription!"
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="flex-1 px-4 py-3 outline-none text-gray-800"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all"
        >
          SUBSCRIBE
        </button>
      </form>

      <p className="text-gray-300 mt-3 text-sm">
        Get notifications delivered to your email weekly
      </p>
    </div>
  );
}