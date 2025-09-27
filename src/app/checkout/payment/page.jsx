"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartState } from "@/context/CartContext";

export default function PaymentPage() {
  const { cart, total, clearCart } = useCartState(); 
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [PaystackPop, setPaystackPop] = useState(null);

  // Dynamically import Paystack only in the browser
  useEffect(() => {
    import("@paystack/inline-js").then((mod) => {
      setPaystackPop(() => mod.default);
    });
  }, []);

  const handlePay = () => {
    if (!email || !name || !phone) {
      setError("Please enter name, email and phone.");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (!PaystackPop) {
      setError("Payment system not ready. Please try again.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_KEY, 
        email,
        amount: total * 100, 
        metadata: {
          custom_fields: [
            { display_name: "Customer Name", variable_name: "name", value: name },
            { display_name: "Phone", variable_name: "phone", value: phone },
          ],
        },
        onSuccess: (transaction) => {
          console.log("Payment successful!", transaction);
          clearCart();
          router.push("/checkout/success");
        },
        onCancel: () => {
          setLoading(false);
          setError("Payment cancelled.");
        },
      });
    } catch (err) {
      console.error("pay error", err);
      setError("Payment failed to initialize.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-zinc-900 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Confirm & Pay</h2>
        <p className="text-sm text-gray-400 mb-4">
          You will be charged:{" "}
          <span className="font-semibold">
            ₦{total.toLocaleString()}
          </span>
        </p>

        <div className="space-y-3 mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full p-3 rounded bg-black/30"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded bg-black/30"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full p-3 rounded bg-black/30"
          />
        </div>

        {error && <div className="mb-3 text-sm text-red-400">{error}</div>}

        <button
          onClick={handlePay}
          disabled={loading || !PaystackPop}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold disabled:opacity-50"
        >
          {loading ? "Processing..." : `Pay ₦${total.toLocaleString()}`}
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Payments powered by Paystack. Use test card when in dev.
        </p>
      </div>
    </div>
  );
}
