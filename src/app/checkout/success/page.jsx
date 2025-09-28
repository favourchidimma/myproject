"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Payment Successful 🎉
        </h1>
        <p className="mb-6 text-gray-300">
          Your ticket(s) have been booked. A confirmation email will be sent.
        </p>
        <Link
          href="/events"
          className="inline-block bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl font-semibold"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}
