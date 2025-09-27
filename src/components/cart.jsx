"use client";
import { useCart } from "@/context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

 
  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      ((item.pricePerTicket ?? item.price ?? 0) * (item.quantity ?? 1)),
    0
  );

  const handleQuantityChange = (idx, value) => {
    if (value < 1) return;
    updateQuantity(idx, value);
  };

  return (
    <main className="min-h-screen bg-black flex justify-center items-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <h2 className="text-xl font-bold text-gray-900">YOUR CART</h2>
          <Link href="/events" className="text-gray-500 hover:text-red-500 text-2xl">
            ×
          </Link>
        </div>

        <div className="flex-1 max-h-96 overflow-y-auto mb-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              Your cart is empty.{" "}
              <Link href="/events" className="text-purple-600 underline">
                Browse Events
              </Link>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 mb-6 border-b pb-4 last:border-b-0 last:pb-0"
              >
   
                <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.eventTitle || "Ticket"}
                    fill
                    className="object-cover"
                  />
                </div>

               
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {item.eventTitle || "Event Ticket"}
                  </div>
                  <div className="text-xs text-gray-500 capitalize">
                    {item.ticketType || "General"} Package
                  </div>
                  <div className="text-sm text-purple-700 font-bold mt-1">
                    ₦{((item.pricePerTicket ?? item.price ?? 0)).toLocaleString()}
                  </div>

              
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 text-lg text-gray-700 border rounded-l hover:bg-gray-200"
                      onClick={() => handleQuantityChange(idx, (item.quantity ?? 1) - 1)}
                      disabled={(item.quantity ?? 1) <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={item.quantity ?? 1}
                      onChange={(e) =>
                        handleQuantityChange(idx, Number(e.target.value))
                      }
                      className="w-12 text-center border-t border-b border-gray-300"
                    />
                    <button
                      className="px-2 py-1 text-lg text-gray-700 border rounded-r hover:bg-gray-200"
                      onClick={() => handleQuantityChange(idx, (item.quantity ?? 1) + 1)}
                      disabled={(item.quantity ?? 1) >= 100}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(idx)}
                  className="ml-2 text-red-500 hover:bg-red-100 rounded-full p-2"
                  title="Remove"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700 font-semibold">Subtotal</span>
              <span className="text-lg font-bold text-purple-700">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>
            <Link
              href="/checkout/payment"
              className="block text-center w-full py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition"
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
