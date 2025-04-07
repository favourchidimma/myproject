import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

const events = [
  { src: '/djimage.jpg', alt: 'DJ Event', date: '2025-03-15' },
  { src: '/comdeyimg.jpg', alt: 'Comedy Show', date: '2025-04-25' },
  { src: '/movienight.jpg', alt: 'Movienight', date: '2025-04-10' },
  { src: '/Karoke.jpg', alt: 'Karoke', date: '2025-05-28' },
  { src: '/games.jpg', alt: 'Games', date: '2025-04-28' },
];

const Upcomingevent = () => {
  const today = dayjs().startOf('day'); 

  const upcomingEvents = events.filter(event => dayjs(event.date).isAfter(today, 'day'));
  const pastEvents = events.filter(event => dayjs(event.date).isBefore(today, 'day'));

  return (
    <div className="w-full mx-auto flex flex-col items-center py-10 bg-black">
      

      <div 
        className="relative w-full h-60 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/image3.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-50 rounded-lg flex justify-center items-center">
          <p className="text-white text-5xl font-bold text-center px-6 py-3">
            EVENTS CALENDAR
          </p>
        </div>
      </div>


      <div className="mt-10 w-full">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10">
          {pastEvents.map(event => (
            <div key={event.date} className="flex flex-col items-center bg-gray-900 p-5 rounded-lg shadow-lg">
              <Image src={event.src} alt={event.alt} width={400} height={400} className="rounded-lg" />
              <p className="text-white mt-3 text-lg font-semibold">{event.alt}</p>
              <p className="text-gray-400">{dayjs(event.date).format('MMMM D, YYYY')}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-16 w-full">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10">
          {upcomingEvents.map(event => (
            <div key={event.date} className="flex flex-col items-center bg-gray-800 p-5 rounded-lg shadow-lg">
              <Image src={event.src} alt={event.alt} width={400} height={400} className="rounded-lg opacity-70" />
              <p className="text-white mt-3 text-lg font-semibold">{event.alt}</p>
              <p className="text-gray-500">{dayjs(event.date).format('MMMM D, YYYY')}</p>
            </div>
          ))}
        </div>


        <div 
  className="relative bg-cover bg-center w-auto h-60 mt-20 flex flex-col justify-center items-center text-center px-6"
  style={{ backgroundImage: "url('/image3.jpg')" }}
>
  <p className="text-white font-bold text-3xl md:text-5xl">
    Never miss a show of your favorite artist
  </p>
  <form className="bg-white text-red-900 w-full max-w-lg flex flex-col sm:flex-row items-center mt-6 p-3 rounded-2xl shadow-lg">
    <input 
      type="text" 
      placeholder="Email or Phone Number" 
      className="flex-1 px-4 py-2 border-none outline-none text-gray-700 w-full sm:w-auto"
    />
    <button 
      type="submit" 
      className="bg-red-600 text-white px-5 py-2 rounded-lg mt-3 sm:mt-0 sm:ml-3 hover:bg-red-700 transition cursor-pointer"
    >
      Subscribe
    </button>
  </form>
</div>

      </div>
    </div>
  );
};

export default Upcomingevent;
