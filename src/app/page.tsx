import {getProducts} from "./utils/api";
import { ProductObj } from "@/types";
import ProductsPage from "@/components/productsPage";
export default async function Home() {
  const products : ProductObj[] = await getProducts();
  console.log(products);
  
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold m-2 text-center">Products</h1>
      <ProductsPage products={products}/>
    </main>
  );
}
