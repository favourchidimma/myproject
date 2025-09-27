// src/context/CartContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Primary hook name
export function useCartState() {
  return useContext(CartContext);
}

// Alias for backward compatibility (so imports like `useCart` keep working)
export const useCart = useCartState;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount (client only)
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    } catch (err) {
      console.warn("Failed to read cart from localStorage", err);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.warn("Failed to write cart to localStorage", err);
    }
  }, [cart]);

  const addToCart = (item) =>
    setCart((prev) => [
      ...prev,
      // normalize item to ensure consistent shape
      {
        // preserve passed fields but ensure defaults
        eventId: item.eventId ?? item.id ?? null,
        eventTitle: item.eventTitle ?? item.name ?? "Event",
        ticketType: item.ticketType ?? item.type ?? "Standard",
        quantity: Number(item.quantity ?? 1),
        pricePerTicket: Number(item.pricePerTicket ?? item.price ?? 0),
        image: item.image ?? item.thumbnail ?? null,
        // keep any other custom fields
        ...item,
      },
    ]);

  const removeFromCart = (index) =>
    setCart((prev) => prev.filter((_, i) => i !== index));

  const clearCart = () => setCart([]);

  const updateQuantity = (index, newQty) =>
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Number(newQty) } : item
      )
    );

  // compute total safely using normalized fields
  const total = cart.reduce((sum, item) => {
    const price = Number(item.pricePerTicket ?? item.price ?? 0);
    const qty = Number(item.quantity ?? 1);
    return sum + price * qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
