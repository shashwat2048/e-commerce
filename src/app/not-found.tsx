"use client";

import Link from "next/link";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Image
        src="/not-found.jpg"
        alt="Not Found"
        width={150}
        height={150}
        className="mb-6"
      />

      <h1 className="text-3xl font-semibold mb-2">Sorry, we couldn’t find that product</h1>
      <p className="text-gray-600 mb-6">
        The product you’re looking for may no longer be available or the URL may be incorrect.
      </p>

      <Link
        href="/"
        className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-medium transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
