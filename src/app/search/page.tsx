import Card from "@/components/card";
import { PageProps } from "../../../.next/types/app/search/page";
import { notFound } from "next/navigation";
import { searchProducts } from "../utils/api";
import { ProductObj } from "@/types";

type SearchPageProps = {
    searchParams: {
        q: string,
        min: string,
        max: string,
        rating: string
    } 
} & PageProps

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  return {
    title: q ? `Search Results for "${q}"` : "Search",
  };
}


export default async function SearchPage({ searchParams }: SearchPageProps) {
    const searchq = await searchParams
    const {q="", min, max, rating} = searchq;
    const products:ProductObj[] = await searchProducts(q);

    let results = products.filter(function(p){
        if(p.title.toLowerCase().includes(q.toLowerCase())) return true;
    })
    if(min){
        results = results.filter(function(p){
            if(p.price > parseInt(min)) return true
        })
    }
    if(max){
        results = results.filter(function(p){
            if(p.price < parseInt(max)) return true
        })
    }
    if(rating){
        results = results.filter(p => Math.floor(p.rating) >= parseInt(rating));
    }

    if(results.length === 0){
        return notFound();
    }



    return (
        <div className="p-2">
            <h2 className="text-2xl font-semibold m-2">Showing results for query : <span className="text-blue-500">{q}</span></h2>
            <div className="w-fit grid grid-cols-4 gap-5 p-5 m-2">
                {results.map(p=>{
                    return(
                        <Card key={p.id} p={p}/>
                    );
                })}
            </div>
        </div>
    )
}