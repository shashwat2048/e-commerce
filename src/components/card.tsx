import { ProductObj } from "@/types";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import AddToCartBtn from "./addToCartBtn";

export default function Card ({p}:{p:ProductObj}){
    return(
      
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white p-4">
        <Link href={`/products/${p.id}`}>
        <Image
          className="w-full h-64 object-contain bg-gray-100 rounded-md"
          src={p.thumbnail}
          alt={p.title}
          width={300}
          height={256}
        />
        </Link>
        <div className="mt-4">
          <span className="text-sm px-2 py-1 bg-pink-100 text-pink-800 rounded-full">
            {p.category}
          </span>
          <Link href={`/products/${p.id}`}>
          <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
          <p className="text-gray-600 text-sm mt-1 line-clamp-3">
            {p.description}
          </p>
          </Link>
          {/* for stars */}
          <div className="flex items-center mt-3 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < p.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.35 2.005 10.65 2.005 10.951 2.927l1.132 3.495a1 1 0 00.95.69h3.666c.969 0 1.371 1.24.588 1.81l-2.967 2.155a1 1 0 00-.364 1.118l1.132 3.495c.3.922-.755 1.688-1.54 1.118l-2.967-2.155a1 1 0 00-1.175 0l-2.967 2.155c-.785.57-1.84-.196-1.54-1.118l1.132-3.495a1 1 0 00-.364-1.118L2.713 8.922c-.783-.57-.38-1.81.588-1.81h3.666a1 1 0 00.95-.69l1.132-3.495z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 text-sm">({p.rating.toFixed(2)})</span>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="mt-4 text-xl font-bold text-gray-800">${p.price}</div>
            <AddToCartBtn item={p}/>
          </div>
        </div>
      </div>
      
    );
}