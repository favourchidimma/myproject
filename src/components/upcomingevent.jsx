"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';


const events = [
  { id: 1, src: '/djimage.jpg', alt: 'DJ Event', date: '2025-12-15' },
  { id: 2, src: '/comdeyimg.jpg', alt: 'Comedy Show', date: '2025-12-25' },
  { id: 3, src: '/movienight.jpg', alt: 'Movienight', date: '2025-12-10' },
  { id: 4, src: '/Karaoke.jpg', alt: 'Karaoke', date: '2025-12-28' },
  { id: 5, src: '/games.jpg', alt: 'Games', date: '2025-09-28' },
  { id: 6, src: '/Tetradrum.jpg', alt: 'Tetra Drum Show', date: '2025-12-28' },
  { id: 7, src: '/groove.jpg', alt: 'Groove Night SHOW', date: '2025-12-28' },
  { id: 8, src: '/dancefloor.jpg', alt: 'Dance Floor', date: '2025-06-28' },
];

const EventCard = ({ event }) => (
  <div className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-lg">
    <div className="w-full overflow-hidden rounded-xl">
      <Image
        src={event.src}
        alt={event.alt}
        width={500}
        height={300}
        className="rounded-xl object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
      />
    </div>
    <p className="text-white mt-4 text-xl font-bold">{event.alt}</p>
    <p className="text-gray-400 mb-4">{dayjs(event.date).format('MMMM D, YYYY')}</p>
    <div className="flex space-x-4">
      <Link
        href={`/events/${event.id}/tickets`}
        className="bg-purple-600 transition text-white px-4 py-2 rounded-lg text-sm"
      >
        Tickets
      </Link>
      <Link
        href="/reservations"
        className="border border-purple-600 text-purple-600 hover:text-white transition px-4 py-2 rounded-lg text-sm"
      >
        Tables
      </Link>
    </div>
  </div>
);

const Upcomingevent = () => {
  // const [showCart, setShowCart] = useState(false);
  const today = dayjs().startOf('day');
  const upcomingEvents = events.filter(event => dayjs(event.date).isAfter(today));
  const pastEvents = events.filter(event => dayjs(event.date).isBefore(today));

  return (
    <div className="bg-black text-white py-10 px-6">
      {/* Header Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/city.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />
        <h1 className="relative z-10 text-4xl font-bold text-center">EVENTS CALENDAR</h1>
      </div>

      {/* Past Events */}
      <section className="mt-14 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Subscription Section */}
     <section
  className="relative bg-cover bg-center w-full h-60 mt-20 flex flex-col justify-center items-center text-center"
  style={{ backgroundImage: "url('/city.jpg')" }}
>
  <div className="bg-opacity-70 w-full h-full absolute top-0 left-0 z-0" />
  <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
    <p className="text-white font-bold text-2xl sm:text-3xl md:text-5xl mb-4">
      Never miss a show of your favorite artist
    </p>
    <form
      className="bg-white text-gray-900 w-full max-w-lg flex flex-col sm:flex-row justify-center items-center mt-2 p-3 rounded-2xl shadow-lg gap-3"
      onSubmit={e => {
        e.preventDefault();
        // Add your submission logic here
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg border-none outline-none text-gray-700 w-full"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto hover:bg-purple-700 transition font-semibold"
      >
        Subscribe
      </button>
    </form>
    <p className="text-white text-sm mt-4">
      Get notifications delivered to your email weekly.
    </p>
  </div>
</section>
    </div>
  );
};

export default Upcomingevent;
