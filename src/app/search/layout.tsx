"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("q") || "";
    const minAmt = searchParams.get("min") || "";
    const maxAmt = searchParams.get("max") || "";

    const[min, setMin] = useState(minAmt);
    const[max, setMax] = useState(maxAmt);

    function handleMin(event: React.ChangeEvent<HTMLInputElement>) {
        setMin(event.target.value);
    }
    function handleMax(event: React.ChangeEvent<HTMLInputElement>) {
        setMax(event.target.value);
    }

    function handleGo(){
        let url = "/search?";
        if(min){
            url = url + "&min=" + min ;
        }
        if(max){
            url = url + "&max=" + max ;
        }
        if(searchTerm){
            url = url + "&q=" + searchTerm ;
        }
        
        router.push(url);
    }
    return (
        <div className="flex flex-row min-h-[calc(100vh-60px)] w-full">
            <aside className="w-60 bg-gray-100 flex flex-col items-center p-2">
                <h2>Filters Container</h2>
                <div className="flex flex-col gap-2 p-2">
                    <input className="border-2 border-gray-500 p-1 rounded-lg" onChange={(e)=>{handleMin(e)}} type="number" name="min" value={min} placeholder="enter min value"/>
                    <input className="border-2 border-gray-500 p-1 rounded-lg" onChange={(e)=>{handleMax(e)}} type="number" name="max" value={max} placeholder="enter max amount"/>
                    <button className="shadow-lg p-1 rounded-lg bg-[#FFAE42]"  type="submit" onClick={handleGo}>Go</button>
                </div>
            </aside>

            {children}
        </div>
    )
}