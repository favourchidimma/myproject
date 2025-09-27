// src/app/checkout/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (item.pricePerTicket ?? item.price ?? 0) * (item.quantity ?? 1),
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 py-40">
      <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty.{" "}
          <Link href="/events" className="text-purple-400 hover:underline">
            Browse Events
          </Link>
        </p>
      ) : (
        <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl shadow-lg p-6">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-zinc-800 py-4">
              <div>
                <div className="font-semibold">{item.eventTitle || item.name}</div>
                <div className="text-sm text-gray-400">{item.ticketType} • Qty: {item.quantity}</div>
                <div className="text-purple-400 font-bold">
                  ₦{((item.pricePerTicket ?? item.price) || 0).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => removeFromCart(idx)}
                  className="text-sm text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
                <div className="text-sm text-gray-400">₦{((item.pricePerTicket ?? item.price) * (item.quantity ?? 1)).toLocaleString()}</div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 text-xl font-bold">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          <Link
            href="/checkout/payment"
            className="mt-6 block text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold"
          >
            Proceed to Payment
          </Link>
        </div>
      )}
    </div>
  );
}
