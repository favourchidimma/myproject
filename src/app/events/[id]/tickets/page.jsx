// app/events/[id]/tickets/page.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";

// All events with details
const EVENTS = [
	{
		id: "1",
		title: "DJ Event",
		date: "2025-12-15",
		time: "10:00 pm – 3:00 am",
		image: "/djimage.jpg",
		description:
			"Dance into the early hours with DJ Event's pulsating beats. Experience an unforgettable night of music, energy, and excitement.",
		gallery: ["/djimage.jpg", "/groove.jpg", "/dancefloor.jpg"],
		facilities: [
			"Live DJ Set",
			"VIP Lounge",
			"Dynamic Dancefloor",
			"Cocktail Bar",
		],
		soldOut: false,
	},
	{
		id: "2",
		title: "Comedy Show",
		date: "2025-12-25",
		time: "8:00 pm – 11:00 pm",
		image: "/comdeyimg.jpg",
		description:
			"Laugh out loud with the best comedians in town. A night of fun, jokes, and good vibes awaits you.",
		gallery: ["/comdeyimg.jpg", "/games.jpg"],
		facilities: ["Top Comedians", "VIP Seating", "Bar Service"],
		soldOut: false,
	},
	{
		id: "3",
		title: "Movienight",
		date: "2025-12-10",
		time: "7:00 pm – 10:00 pm",
		image: "/movienight.jpg",
		description:
			"Enjoy blockbuster movies under the stars. Bring your friends for a cozy cinematic experience.",
		gallery: ["/movienight.jpg", "/Karaoke.jpg"],
		facilities: [
			"Outdoor Screen",
			"Snack Bar",
			"VIP Loungers",
		],
		soldOut: false,
	},
	{
		id: "4",
		title: "Karaoke",
		date: "2025-12-28",
		image: "/Karaoke.jpg",
	},
	{
		id: "5",
		title: "Games",
		date: "2025-09-28",
		image: "/games.jpg",
	},
	{
		id: "6",
		title: "Tetra Drum Show",
		date: "2025-08-28",
		image: "/Tetradrum.jpg",
	},
	{
		id: "7",
		title: "Groove Night SHOW",
		date: "2025-07-28",
		image: "/groove.jpg",
	},
	{
		id: "8",
		title: "Dance Floor",
		date: "2025-06-28",
		image: "/dancefloor.jpg",
	},
];

// Ticket options
const TICKETS = [
	{ type: "Standard", price: 1000, soldOut: false },
	{ type: "VIP", price: 25000, soldOut: false },
];

function TicketOptions({ tickets, event }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [quantities, setQuantities] = useState(
    tickets.reduce((acc, t) => ({ ...acc, [t.type]: 1 }), {})
  );
  const [showEndedModal, setShowEndedModal] = useState(false);

  const handleQuantityChange = (type, value) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(1, Math.min(100, Number(value))),
    }));
  };

  const handleAddToCart = (ticket) => (e) => {
    e.preventDefault();
    const today = new Date();
    if (new Date(event.date) < today) {
      setShowEndedModal(true); // 🚨 Show modal if event ended
      return;
    }
    addToCart({
      eventId: event.id,
      eventTitle: event.title,
      ticketType: ticket.type,
      quantity: quantities[ticket.type],
      pricePerTicket: ticket.price,
      total: ticket.price * quantities[ticket.type],
      image: event.image,
    });
    router.push("/cart");
  };

  return (
    <>
      {/* Ticket Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className={`bg-zinc-900 rounded-xl p-6 flex flex-col items-center border-2 ${
              ticket.soldOut ? "border-red-500 opacity-60" : "border-purple-600"
            }`}
          >
            <span className="uppercase text-xs text-purple-400 font-bold mb-2">
              Package
            </span>
            <h3 className="text-xl font-semibold mb-2">{ticket.type}</h3>
            <div className="text-2xl font-bold mb-4">₦{ticket.price}</div>
            {ticket.soldOut ? (
              <span className="text-red-500 font-bold">Sold Out</span>
            ) : (
              <form
                className="flex flex-col items-center gap-2 w-full"
                onSubmit={handleAddToCart(ticket)}
              >
                <label className="text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantities[ticket.type]}
                  onChange={(e) =>
                    handleQuantityChange(ticket.type, e.target.value)
                  }
                  className="w-16 text-center p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-lg font-bold mt-2 w-full"
                >
                  Add to Cart
                </button>
              </form>
            )}
          </div>
        ))}
      </div>

      {/* Ended Event Modal */}
      {showEndedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black rounded-2xl shadow-xl max-w-sm w-full p-6">
            <h3 className="text-lg font-bold mb-2">This event has ended</h3>
            <p className="text-gray-600 mb-4">
              Don’t worry! You can still check out other exciting upcoming events.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/events")}
                className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                See Upcoming Events
              </button>
              <button
                onClick={() => setShowEndedModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



function EventInfo({ event }) {
	return (
		<section className="bg-zinc-900 rounded-2xl p-8 mt-10 shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-purple-400">
				{event.title}: Beats Beyond Boundaries
			</h2>
			<ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
				<li>
					<span className="font-semibold">Date & Time:</span> {event.date} ·{" "}
					{event.time}
				</li>
				<li>
					<span className="font-semibold">Summary:</span> {event.description}
				</li>
				{Array.isArray(event.facilities) &&
					event.facilities.map((facility, idx) => (
						<li key={idx}>{facility}</li>
					))}
			</ul>
		</section>
	);
}

function Gallery({ images }) {
	if (!images || images.length === 0) return null;
	return (
		<section className="mt-10">
			<h3 className="text-xl font-bold mb-4 text-purple-400">Gallery</h3>
			<div className="flex gap-4 overflow-x-auto pb-2">
				{images.map((img, idx) => (
					<div
						key={idx}
						className="min-w-[200px] h-[120px] relative rounded-lg overflow-hidden"
					>
						<Image
							src={img}
							alt={`Gallery ${idx + 1}`}
							fill
							className="object-cover"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

function MoreEvents({ events }) {
	return (
		<div className="mt-12">
			<h3 className="text-xl font-bold mb-4 text-purple-400">
				More Upcoming Events
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{events.map((e) => (
					<Link
						key={e.id}
						href={`/events/${e.id}/tickets`}
						className="bg-zinc-800 rounded-lg p-4 flex flex-col items-center hover:bg-zinc-700 transition"
					>
						<Image
							src={e.image}
							alt={e.title}
							width={200}
							height={120}
							className="rounded-md object-cover mb-3"
						/>
						<div className="text-center">
							<h4 className="font-semibold text-lg">{e.title}</h4>
							<p className="text-gray-400 text-sm">
								{e.date} · {e.time}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

function NewsletterSignup() {
	return (
		<section className="bg-zinc-900 rounded-2xl p-8 mt-16 flex flex-col items-center text-center">
			<h3 className="text-2xl font-bold mb-2 text-purple-400">
				Never miss a show of your favorite artist
			</h3>
			<p className="text-gray-300 mb-4">
				Get notifications delivered to your email weekly.
			</p>
			<form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
				<input
					type="email"
					placeholder="Your Email"
					className="flex-1 px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
				/>
				<button
					type="submit"
					className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
				>
					Subscribe
				</button>
			</form>
		</section>
	);
}

export default function TicketsPage({ params }) {
  const unwrappedParams = React.use(params); // ✅ unwraps promise
  const { id } = unwrappedParams;
	const event = EVENTS.find((e) => e.id === id);
	if (!event) return notFound();

	// Exclude current event from "More Events"
	const moreEvents = EVENTS.filter((e) => e.id !== id);

	return (
		<main className="bg-black text-white min-h-screen pb-20">
			{/* Hero */}
			<div className="relative w-full h-[400px] md:h-[520px]">
				<Image
					src={event.image}
					alt={event.title}
					fill
					className="object-cover rounded-b-2xl"
					priority
				/>
				<div className="absolute inset-0 bg-black/60 rounded-b-2xl" />
				<div className="absolute inset-0 flex flex-col justify-center items-center p-6">
					<h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
						{event.title}
					</h1>
					<p className="mt-2 text-gray-200 text-lg">
						{event.date} · {event.time}
					</p>
				</div>
			</div>

			{/* Description */}
			<section className="max-w-3xl mx-auto p-6 mt-8">
				<p className="text-lg text-gray-200 italic text-center">
					{event.description}
				</p>
			</section>

			{/* Tickets */}
			<section className="max-w-3xl mx-auto p-6">
				<h2 className="text-2xl font-bold mb-2 text-purple-400">Tickets</h2>
				<TicketOptions tickets={TICKETS} event={event} />
			</section>

			{/* Info Block */}
			<section className="max-w-3xl mx-auto p-6">
				<EventInfo event={event} />
			</section>

			{/* Gallery */}
			<section className="max-w-3xl mx-auto p-6">
				<Gallery images={event.gallery} />
			</section>

			{/* More Events */}
			<section className="max-w-3xl mx-auto p-6">
				<MoreEvents events={moreEvents} />
			</section>

			{/* Newsletter Signup */}
			<section className="max-w-3xl mx-auto p-6">
				<NewsletterSignup />
			</section>
		</main>
	);
}
