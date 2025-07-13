"use client"

import { useEffect, useState } from "react";
import { ProductObj } from "@/types";

export default function AddToCartBtn({ item }: { item: ProductObj }) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("products") || "[]");
    setInCart(cartItems.some((cartItem: ProductObj) => cartItem.id === item.id));
  }, [item.id]);

  function handleAdd() {
    const cartItems = JSON.parse(localStorage.getItem("products") || "[]");
    const prevItem:ProductObj = cartItems.find(function(e:ProductObj){
      return e.id === item.id;
    })
    if(prevItem){
      {
        prevItem.quantity += 1; 
      }
    }
    else{
      cartItems.push({ ...item, inCart: true, quantity:1});
    }
    
    localStorage.setItem("products", JSON.stringify(cartItems));
    // Dispatch custom event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));
    setInCart(true);
  }

  function handleRemove() {
    let cartItems = JSON.parse(localStorage.getItem("products") || "[]");
    cartItems = cartItems.filter((cartItem: ProductObj) => cartItem.id !== item.id);
    localStorage.setItem("products", JSON.stringify(cartItems));
    // Dispatch custom event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));
    setInCart(false);
  }

  if (inCart) {
    return (
      <button
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        onClick={handleRemove}
      >
        Remove from cart
      </button>
    );
  }

  return (
    <button
      className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-600 transition"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
}