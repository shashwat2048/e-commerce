"use client";

import Image from "next/image";
import Link from "next/link";

export default function NoProductsFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-6 text-center">
      <Image
        src="/no_prod.jpg"
        alt="No results"
        width={200}
        height={200}
        className="mb-6"
      />

      <h1 className="text-2xl font-semibold mb-2">
        No results for your search
      </h1>

      <p className="text-gray-600 mb-6 max-w-lg">
        Check your spelling or try using more general terms. You can also browse our categories or return to the homepage.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-medium transition"
        >
          Go to Homepage
        </Link>
        <Link
          href="/"
          className="px-5 py-2 border border-gray-300 hover:bg-gray-100 rounded-md font-medium transition"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}
