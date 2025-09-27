"use client";

import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-zinc-900 rounded-2xl p-8 shadow-lg text-center text-white">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>
        <p className="text-gray-400 mb-6">
          Thank you for your purchase. Your order has been confirmed and a
          receipt has been sent to your email.
        </p>

        <button
          onClick={() => router.push("/events")}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
}
