"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle } from 'lucide-react';

function Filters({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const minAmt = searchParams.get("min") || "";
  const maxAmt = searchParams.get("max") || "";
  const minRating = searchParams.get("rating") || "";

  const [min, setMin] = useState(minAmt);
  const [max, setMax] = useState(maxAmt);
  const [rating, setRating] = useState(minRating);

  function handleMin(event: React.ChangeEvent<HTMLInputElement>) {
    setMin(event.target.value);
  }
  function handleMax(event: React.ChangeEvent<HTMLInputElement>) {
    setMax(event.target.value);
  }
  function handleRating(event: React.ChangeEvent<HTMLSelectElement>) {
    setRating(event.target.value);
  }

  function handleGo() {
    let url = "/search?";
    if (min) url += "&min=" + min;
    if (max) url += "&max=" + max;
    if (searchTerm) url += "&q=" + searchTerm;
    if (rating) url += "&rating=" + rating;
    router.push(url);
  }

  return (
    <div className="flex flex-row min-h-[calc(100vh-60px)] w-full">
      <aside className="w-60 bg-gray-100 flex flex-col items-center p-2">
        <h2>Filters Container</h2>
        <div className="flex flex-col gap-2 p-2">
          <input className="border-2 border-gray-500 p-1 rounded-lg" onChange={handleMin} type="number" name="min" value={min} placeholder="enter min value"/>
          <input className="border-2 border-gray-500 p-1 rounded-lg" onChange={handleMax} type="number" name="max" value={max} placeholder="enter max amount"/>
          <select className="border-2 border-gray-500 p-1 rounded-lg" name="rating" id="rating" value={rating} onChange={handleRating}>
            <option value="">Select min rating</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <button className="shadow-lg p-1 rounded-lg bg-[#FFAE42]" type="submit" onClick={handleGo}>Go</button>
        </div>
      </aside>
      {children}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen"><LoaderCircle className="animate-spin" /></div>}>
      <Filters>{children}</Filters>
    </Suspense>
  );
}