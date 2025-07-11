"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";
import { ProductObj } from "@/types";



export default function page() {
  const [cartItems, setCartItems] = useState<ProductObj[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products") || "[]");
    const itemsWithQty = items.map((item: ProductObj) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(itemsWithQty);
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setTotal(totalAmount);
  }, [cartItems]);

  const updateQuantity = (id: number, delta: number) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key= {nanoid()}
                className="flex flex-col md:flex-row gap-4 items-center border-b pb-4"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain w-28 h-28"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-500 mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Summary */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <p className="mb-2 text-gray-700">
            Subtotal ({cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)} items):{" "}
            <span className="font-bold">${total.toFixed(2)}</span>
          </p>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded mt-4 transition">
            Proceed to Buy
          </button>
          <Link href="/" className="block text-blue-600 mt-4 text-sm hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
