"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [PaystackPop, setPaystackPop] = useState(null);

  useEffect(() => {
    // only runs on the client, safe to import
    import("@paystack/inline-js").then((mod) => {
      setPaystackPop(() => mod.default);
    });
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePayment = () => {
    if (!PaystackPop) return; // prevent errors before library loads

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY || "pk_test_your_public_key",
      amount: total * 100,
      email: "customer@email.com",
      onSuccess: () => {
        clearCart();
        router.push("/checkout/success");
      },
      onCancel: () => {
        alert("Payment cancelled!");
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Payment</h1>
        <p className="text-center text-gray-300 mb-6">
          You’re about to pay <span className="font-bold">₦{total}</span> for{" "}
          {cart.length} ticket(s).
        </p>
        <button
          onClick={handlePayment}
          disabled={!PaystackPop}
          className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold text-lg"
        >
          {PaystackPop ? "Pay Now" : "Loading..."}
        </button>
      </div>
    </div>
  );
}
