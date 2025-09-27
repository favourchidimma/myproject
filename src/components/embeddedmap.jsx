"use client";
import React from "react";

export default function EmbeddedMap() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.75578794878487!2d3.3764769282930205!3d6.509961394876499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c59445441cd%3A0x86e2ff863721fb2c!2sUnivelcity!5e0!3m2!1sen!2sng!4v1758969815213!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
