// app/events/[id]/page.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import TicketSelector from "./TicketSelector.client";
import TableSelector from "./TableSelector.client";
import Gallery from "./Gallery.client.jsx";
import MoreEvents from "./MoreEvents.client";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


const EVENTS = [
  {
    id: "1",
    slug: "dj-event",
    title: "DJ Event",
    date: "2025-12-15",
    time: "10:00 PM — 3:00 AM",
    venue: "Downtown Club",
    priceStandard: 10000,
    priceVIP: 25000,
    description: "Dance into the early hours with DJ Event's pulsating beats. Experience an unforgettable night of music, energy, and excitement.",
    image: "/djimage.jpg",
    gallery: ["/djimage.jpg", "/groove.jpg", "/dancefloor.jpg"],
    video: "",
  },
  {
    id: "2",
    slug: "comedy-show",
    title: "Comedy Show",
    date: "2025-12-25",
    time: "8:00 PM — 11:00 PM",
    venue: "Riverside Hall",
    priceStandard: 8000,
    priceVIP: 20000,
    description: "Laugh out loud with the best comedians in town. A night of fun, jokes, and good vibes awaits you.",
    image: "/comdeyimg.jpg",
    gallery: ["/comdeyimg.jpg", "/games.jpg"],
    video: "",
  },
  {
    id: "3",
    slug: "movienight",
    title: "Movienight",
    date: "2025-12-10",
    time: "7:00 PM — 10:00 PM",
    venue: "Open Air Cinema",
    priceStandard: 5000,
    priceVIP: 12000,
    description: "Enjoy blockbuster movies under the stars. Bring your friends for a cozy cinematic experience.",
    image: "/movienight.jpg",
    gallery: ["/movienight.jpg", "/Karaoke.jpg"],
    video: "",
  },
  {
    id: "4",
    slug: "karaoke",
    title: "Karaoke",
    date: "2025-12-28",
    time: "9:00 PM — 1:00 AM",
    venue: "Sing Lounge",
    priceStandard: 6000,
    priceVIP: 15000,
    description: "Sing your heart out at our legendary Karaoke night!",
    image: "/Karaoke.jpg",
    gallery: ["/Karaoke.jpg"],
    video: "",
  },
  {
    id: "5",
    slug: "games",
    title: "Games",
    date: "2025-09-28",
    time: "6:00 PM — 11:00 PM",
    venue: "Game Arena",
    priceStandard: 4000,
    priceVIP: 10000,
    description: "Game night fun for everyone. Board games, video games, and more.",
    image: "/games.jpg",
    gallery: ["/games.jpg"],
    video: "",
  },
  {
    id: "6",
    slug: "tetra-drum-show",
    title: "Tetra Drum Show",
    date: "2025-08-28",
    time: "8:00 PM — 12:00 AM",
    venue: "Percussion Hall",
    priceStandard: 9000,
    priceVIP: 22000,
    description: "Feel the rhythm with the Tetra Drum Show. Percussion at its best.",
    image: "/Tetradrum.jpg",
    gallery: ["/Tetradrum.jpg"],
    video: "",
  },
  {
    id: "7",
    slug: "groove-night-show",
    title: "Groove Night SHOW",
    date: "2025-07-28",
    time: "10:00 PM — 2:00 AM",
    venue: "Groove Club",
    priceStandard: 11000,
    priceVIP: 27000,
    description: "Groove all night with the best DJs and dancefloor vibes.",
    image: "/groove.jpg",
    gallery: ["/groove.jpg"],
    video: "",
  },
  {
    id: "8",
    slug: "dance-floor",
    title: "Dance Floor",
    date: "2025-06-28",
    time: "9:00 PM — 1:00 AM",
    venue: "Main Hall",
    priceStandard: 7000,
    priceVIP: 18000,
    description: "The ultimate dance floor experience. Lights, music, action!",
    image: "/dancefloor.jpg",
    gallery: ["/dancefloor.jpg"],
    video: "",
  },
];

export default function Page({ params }) {
  const { id } = params;
  const event = EVENTS.find((e) => e.id === id);

  if (!event) return notFound();

  const { addToCart } = useCart();
  const router = useRouter();

  const [ticketType, setTicketType] = useState("standard");
  const [quantity, setQuantity] = useState(1);

  const pricePerTicket = ticketType === "standard" ? event.priceStandard : event.priceVIP;
  const totalPrice = pricePerTicket * quantity;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      eventId: event.id,
      eventTitle: event.title,
      ticketType,
      quantity,
      pricePerTicket,
      total: totalPrice,
    });
    router.push("/cart"); 
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    addToCart({
      eventId: event.id,
      eventTitle: event.title,
      ticketType,
      quantity,
      pricePerTicket,
      total: totalPrice,
      image: event.image,
    });
    router.push("/cart");
  };

  return (
    <main className="bg-black text-white min-h-screen">
     
      <div className="relative w-full h-[420px] md:h-[520px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-4xl text-center z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold">{event.title}</h1>
            <p className="mt-3 text-sm md:text-lg text-gray-200">
              {event.date} · {event.time} · {event.venue}
            </p>
            <p className="mt-4 text-gray-200 max-w-2xl mx-auto">{event.description}</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
         
          <section className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold">Event Details</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <strong>Standard:</strong> ₦{event.priceStandard.toLocaleString()}
              </li>
              <li>
                <strong>VIP:</strong> ₦{event.priceVIP.toLocaleString()} — premium seating & welcome drink
              </li>
              <li>Live music · Dress code: Smart casual</li>
            </ul>
          </section>

         
          <Gallery gallery={event.gallery} video={event.video} />

          <section className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">About this event</h3>
            <p className="mt-3 text-gray-300">
              {event.description} — expect live sets, curated drinks and a stylish crowd. Book early.
            </p>
          </section>

          <MoreEvents events={EVENTS.filter((e) => e.id !== id)} />
        </div>

       
        <aside className="space-y-6">
         
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Add to Cart</h3>
            <form onSubmit={handleAddToCart} className="flex flex-col gap-4">
              <label className="font-semibold">
                Ticket Type
                <select
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value)}
                  className="block w-full mt-2 p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                >
                  <option value="standard">Standard (₦{event.priceStandard.toLocaleString()})</option>
                  <option value="vip">VIP (₦{event.priceVIP.toLocaleString()})</option>
                </select>
              </label>
              <label className="font-semibold">
                Number of Persons
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="block w-full mt-2 p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                >
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>
              <div className="text-lg font-bold text-purple-400">
                Total: ₦{totalPrice.toLocaleString()}
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-lg font-bold"
              >
                Add to Cart
              </button>
            </form>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Buy Tickets</h3>
            <TicketSelector event={event} />
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Reserve a Table</h3>
            <TableSelector event={event} />
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Quick Buy</h3>
            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-lg font-bold"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
