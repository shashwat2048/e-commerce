
import { ProductObj } from "@/types";
import ProductsPage from "@/components/productsPage";
import { getProductsByCategory } from "@/app/utils/api";
import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/category/[categoryName]/page";
type categoryProps = {
    params : {
        categoryName:string,
    }
} & PageProps

export default async function Home({params}:categoryProps) {
  try {
    const products: ProductObj[] = await getProductsByCategory(params.categoryName);
    
    if (!products || products.length === 0) {
      notFound();
    }
    
    return (
      <main className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-2 text-center">
          {params.categoryName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <ProductsPage products={products}/>
      </main>
    );
  } catch (error) {
    console.error(`Error fetching products for category "${params.categoryName}":`, error);
    notFound();
  }
}