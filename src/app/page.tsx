import Card from "@/components/card";
import { products } from "@/constants/data";

export default function Home() {
  
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold m-2 text-center">Products</h1>
      <div className="w-fit grid grid-cols-4 gap-5 p-5 m-2">
      {
        products.map(p => {
          return(
            <Card p={p} key={p.id}/>
          );
        })
      }
      </div>

    </main>
  );
}
