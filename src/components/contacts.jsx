"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import EmbeddedMap from "@/components/embeddedmap";

export default function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const validation = () => {
    const { firstName, lastName, email, phone, message } = formInfo;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      toast.error("All fields are required.");
      return false;
    }

    const phoneRegex = /^[0-9\s+()-]+$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return;

    try {
      const response = await fetch("https://formsubmit.co/ajax/idikafavourchidimma1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formInfo),
      });

      if (response.ok) {
        setSubmitted(true);

       
        setFormInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        toast.success("Message sent successfully!");

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit the form.");
    }
  };

  return (
    <div className="w-full bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
       
        <div className="flex flex-col items-start gap-7 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <hr className="w-[30%] border-t-4 border-yellow-600" />
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>

          <p className="text-3xl font-bold w-[400px] leading-12">
            Hit us up and Let’s get cracking!
          </p>

          <div className="flex gap-4">
            <div className="w-[60px] h-[50px] bg-yellow-600 flex items-center justify-center rounded-md">
              <Mail className="text-black" />
            </div>
            <div className="flex-col text-start">
              <p className="pb-0.5">Email Address</p>
              <p>✉ info@nightlifebrand.com</p>
            </div>
          </div>

          
          <div className="flex gap-4">
            <div className="w-[60px] h-[50px] bg-yellow-600 flex items-center justify-center rounded-md">
              <Phone className="text-black" />
            </div>
            <div className="flex-col text-start">
              <p className="pb-0.5">Call Us</p>
              <span>08127385906</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-[60px] h-[50px] bg-yellow-600 flex items-center justify-center rounded-md">
              <MapPin className="text-black" />
            </div>
            <div className="flex-col text-start">
              <p className="pb-0.5">Address</p>
              <p>Konibaje - 234 Rd, 234, +234</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/3 bg-[#1a0f20] rounded-2xl shadow-xl p-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-7 w-full"
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <input
                className="w-1/2 h-[50px] bg-[#402c45] rounded-lg px-4 border-none outline-none text-white placeholder-gray-300"
                type="text"
                name="firstName"
                value={formInfo.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                className="w-1/2 h-[50px] bg-[#402c45] rounded-lg px-4 border-none outline-none text-white placeholder-gray-300"
                type="text"
                name="lastName"
                value={formInfo.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>

            <div className="flex items-center justify-center gap-3 w-full">
              <input
                className="w-1/2 h-[50px] bg-[#402c45] rounded-lg px-4 border-none outline-none text-white placeholder-gray-300"
                type="email"
                name="email"
                value={formInfo.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                className="w-1/2 h-[50px] bg-[#402c45] rounded-lg px-4 border-none outline-none text-white placeholder-gray-300"
                type="text"
                name="phone"
                value={formInfo.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="w-full h-[200px] bg-[#402c45] rounded-lg">
              <textarea
                className="w-full h-full resize-none border-none outline-none px-4 py-3 bg-transparent text-white placeholder-gray-300"
                name="message"
                value={formInfo.message}
                onChange={handleChange}
                placeholder="Hit a Message"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[70px] bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Reserve Now
            </button>
          </form>

          
          {submitted && (
            <div className="mt-8 w-full p-6 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center gap-4 text-white animate-fadeIn">
              <CheckCircle className="w-10 h-10 text-white" />
              <div>
                <h3 className="font-bold text-xl">Thank you!</h3>
                <p>Your message has been received. We'll get back to you soon 🎉</p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3 h-[400px]">
          <EmbeddedMap />
        </div>
      </div>

      <Toaster />
    </div>
  );
}
