import { products } from "@/constants/data";
import Image from "next/image"; 
import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/products/[id]/page";
type ProductProps =  {
    params:{
        id : string,
    }
} & PageProps
export default async function Page({params}:ProductProps){
    const prod = await params;
    const id = parseInt(prod.id);
    const item = products.find(function(p){
        if(p.id == id) return p;
    })
    if (!item) {
        notFound();
      }

    return(
        <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-2xl shadow p-4">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
  
          {/* item Info */}
          <div>
            <span className="inline-block bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
            <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
            <p className="text-gray-700 mt-2">{item.description}</p>
  
            <div className="flex items-center mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(item.rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927C9.35 2.005 10.65 2.005 10.951 2.927l1.132 3.495a1 1 0 00.95.69h3.666c.969 0 1.371 1.24.588 1.81l-2.967 2.155a1 1 0 00-.364 1.118l1.132 3.495c.3.922-.755 1.688-1.54 1.118l-2.967-2.155a1 1 0 00-1.175 0l-2.967 2.155c-.785.57-1.84-.196-1.54-1.118l1.132-3.495a1 1 0 00-.364-1.118L2.713 8.922c-.783-.57-.38-1.81.588-1.81h3.666a1 1 0 00.95-.69l1.132-3.495z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(2)})</span>
            </div>
  
            <div className="mt-6 text-2xl font-semibold text-gray-900">${item.price}</div>
  
            <button className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}