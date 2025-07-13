"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { ProductObj } from "@/types"; // Added import

export default function CartBtn(){
    const [totalItems, setTotalItems] = useState(0);
    
    function getCartItems(){
        try{
            const cartItems = localStorage.getItem("products") || "[]";
            if(cartItems){
                const items = JSON.parse(cartItems);
                const total = items.reduce((sum: number, item: ProductObj) => sum + (item.quantity || 1), 0);
                setTotalItems(total);
            }
        }
        catch(err){
            console.log("error getting items from local storage:",err);
            setTotalItems(0);
        }
    }
    
    useEffect(()=>{
        getCartItems();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "products") {
                getCartItems();
            }
        };

        // Listen for custom events from the same tab
        const handleCartUpdate = () => {
            getCartItems();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('cartUpdated', handleCartUpdate);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    },[])

    return(
        <Link href="/cart">
            <button className="relative cursor-pointer">
                <LuShoppingCart size={25} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {totalItems > 99 ? '99+' : totalItems}
                    </span>
                )}
            </button>
        </Link>
    );
}