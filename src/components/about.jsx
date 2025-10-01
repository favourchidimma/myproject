"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { SiListmonk } from "react-icons/si";
import Form from './form';
const facilities = [
  {
    title: "Luxury Lounge",
    description: "A premium space for chilling, socializing, and enjoying the vibe in comfort and style.",
    image: "/Lounge2.jpg",
  },
  {
    title: "Private VIP Booths",
    description: "Experience exclusivity with personalized service and privacy in our VIP areas.",
    image: "/Lounge 3.jpg",
  },
  {
    title: "Signature Bar",
    description: "Enjoy handcrafted cocktails, premium spirits, and curated drink menus by top mixologists.",
    image: "/Lounge4.jpg",
  },
  {
    title: "Dance Floor",
    description: "A vibrant space that comes alive with energy and music. Move to the rhythm of the night.",
    image: "/dancefloor.jpg",
  },
  {
    title: "Outdoor Terrace",
    description: "Chill under the stars with open-air vibes and stunning views of the city.",
    image: "/rooftop.jpg",
  },
];

const About = () => {
  const [selectedFacility, setSelectedFacility] = useState(facilities[0]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
  
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-wide leading-tight mb-6">
            About Nightlife
          </h1>
          <p className="text-base sm:text-lg text-neutral-400">
            Learn more about our story, values, and what makes Nightlife unique.
          </p>
        </div>

        <div
          className="mt-12 sm:mt-16 rounded-3xl overflow-hidden h-60 sm:h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/backgroundvideo.gif')" }}
        />

        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
              Welcome to NIGHTLIFE,<br />where every beat tells a story
            </h2>
            <p className="text-neutral-300 text-lg italic">
              NIGHTLIFE stands as a testament to the marriage of style and substance.
            </p>
          </div>
          <div className="text-neutral-400 text-base sm:text-lg space-y-6">
            <p>
              Born from a passion for music, dance, and creating extraordinary experiences,
              NIGHTLIFE is not just a venue; it's a pulsating heartbeat in the rhythm of the city.
            </p>
            <p>
              Our journey began with a vision to redefine nightlife, offering a haven for those who
              seek more than just a night out. We curate an eclectic mix of events that cater to
              diverse tastes—each night promises something new.
            </p>
            <p>
              Whether it’s the soulful tunes of Acoustic Tuesdays or the energetic beats of DJ
              Antony, our story is one of celebration, unity, and the vibrant spirit of the night.
            </p>
          </div>
        </div>
        <div className="mt-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Facilities</h2>
            <p className="text-neutral-400 text-base sm:text-lg mb-12 sm:mb-16 text-center">
              Discover the spaces designed to elevate your nightlife experience.
            </p>

            <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-12">

              <div className="flex flex-col gap-4 w-full md:w-1/3">
                {facilities.map((facility, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFacility(facility)}
                    className={`text-left px-6 py-3 w-full rounded-full border border-neutral-800 hover:border-white transition-all duration-300 font-semibold
                      ${
                        selectedFacility.title === facility.title
                          ? "bg-purple-700 text-black"
                          : "bg-neutral-800 text-white hover:bg-neutral-700"
                      }`}
                  >
                    {facility.title}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  width={600}
                  height={350}
                  className="w-full max-w-md rounded-2xl object-cover mb-6"
                />
                <p className="text-center text-base sm:text-lg text-neutral-300 max-w-xl">
                  {selectedFacility.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 rounded-2xl items-center bg-gradient-to-br from-black via-neutral-900 to-black px-6 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Let the night belong to you
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mb-10">
              Where the music is alive, the atmosphere is electric, and every night is a celebration waiting to unfold.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="/events"
                className="border border-white text-white px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Events
              </a>
              <a
                href="/reservations"
                className="border border-white text-white px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Reservations
              </a>
            </div>
          </div>
        </div>

        <section className="my-20 border border-white bg-black text-white rounded-2xl py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-left mb-12 sm:mb-20">
              The Club Rules
            </h1>
            <ul className="space-y-8">
              {[
                {
                  title: "Age Restriction",
                  description:
                    "All attendees must be 21 years or older. Please have a valid ID ready for verification.",
                },
                {
                  title: "Dress Code",
                  description:
                    "Dress to impress! Smart casual or upscale attire is encouraged. No athletic wear or excessively casual clothing.",
                },
                {
                  title: "Behavior Standards",
                  description:
                    "Respect fellow patrons, staff, and performers. Any disruptive or disrespectful behavior will not be tolerated.",
                },
                {
                  title: "No Illegal Substances",
                  description:
                    "The use or possession of illegal substances is strictly prohibited. Violators will be reported to the authorities.",
                },
                {
                  title: "Security Checks",
                  description:
                    "Security checks are mandatory. Bags and personal items may be subject to inspection.",
                },
                {
                  title: "No Outside Food or Drinks",
                  description:
                    "Outside food and drinks are not allowed. Our bar offers a diverse selection to meet your preferences.",
                },
                {
                  title: "Photography and Recording",
                  description:
                    "Photography and recording of performances are allowed only with the consent of the performers and venue management.",
                },
                {
                  title: "Reserved Seating",
                  description:
                    "Respect reserved seating areas. These are designated for VIP ticket holders or special guests.",
                },
                {
                  title: "Fire Safety",
                  description:
                    "Follow all fire safety regulations. Smoking is only permitted in designated areas.",
                },
                {
                  title: "Lost and Found",
                  description:
                    "Nightlife is not responsible for lost or stolen items. Please check the lost and found for any misplaced belongings.",
                },
              ].map((rule, index) => (
                <li key={index} className="flex items-start gap-4">
                  <SiListmonk className="bg-purple-700 text-white rounded-full p-2 text-3xl shrink-0" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                      {rule.title}
                    </h2>
                    <p className="text-neutral-300 text-base sm:text-lg">
                      {rule.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Form />
      </div>
    </div>
  );
};

export default About;
