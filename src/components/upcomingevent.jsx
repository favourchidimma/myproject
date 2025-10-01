"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import Form from './form';


const events = [
  { id: 1, src: '/djimage.jpg', alt: 'DJ Event', date: '2025-12-15' },
  { id: 2, src: '/comdeyimg.jpg', alt: 'Comedy Show', date: '2025-12-25' },
  { id: 3, src: '/movienight.jpg', alt: 'Movienight', date: '2025-12-10' },
  { id: 4, src: '/karaoke.jpg', alt: 'Karaoke', date: '2025-12-28' },
  { id: 5, src: '/games.jpg', alt: 'Games', date: '2025-01-28' },
  { id: 6, src: '/Tetradrum.jpg', alt: 'Tetra Drum Show', date: '2025-12-28' },
  { id: 7, src: '/groove.jpg', alt: 'Groove Night SHOW', date: '2025-12-28' },
  { id: 8, src: '/dancefloor.jpg', alt: 'Dance Floor', date: '2025-12-28' },
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
  
  const today = dayjs().startOf('day');
  const upcomingEvents = events.filter(event => dayjs(event.date).isAfter(today));
  const pastEvents = events.filter(event => dayjs(event.date).isBefore(today));

  return (
    <div className="bg-black text-white py-10 px-6">
      
      <div
        className="relative w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/city.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />
        <h1 className="relative z-10 text-4xl font-bold text-center">EVENTS CALENDAR</h1>
      </div>

      
      <section className="mt-14 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

    <Form/>
    </div>
  );
};

export default Upcomingevent;
