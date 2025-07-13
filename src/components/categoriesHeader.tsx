"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface CategoryNavProps {
  categories: string[];
}

export default function CategoriesHeader({ categories }: CategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth, scrollLeft } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-15 relative bg-primary-background text-light-text border-b border-gray-600">
      {/* Left chevron */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-5 p-2 bg-black/20 hover:bg-black/60 text-white rounded-full"
        aria-label="Scroll categories left"
      >
        <ChevronLeftIcon size={20} />
      </button>

      {/* Scrollable list */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scroll-smooth py-2 px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {categories.map((ct, idx) => (
          <Link key={idx} href={`/category/${ct}`}>
            <span className="inline-block mx-2 px-4 py-1 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground text-sm cursor-pointer select-none">
              {ct.replace(/-/g, " ")}
            </span>
          </Link>
        ))}
      </div>

      {/* Right chevron */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-5 p-2 bg-black/20 hover:bg-black/60 text-white rounded-full"
        aria-label="Scroll categories right"
      >
        <ChevronRightIcon size={20} />
      </button>
    </div>
  );
}
