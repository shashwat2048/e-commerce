import { ProductObj } from "@/types";
import Card from "./card";

export default function ProductsPage({products}:{products:ProductObj[]}){
    return(
        <div className="w-fit grid grid-cols-4 gap-5 p-5 m-2">
        {
          products.map(p => {
            return(
              <Card p={p} key={p.id}/>
            );
          })
        }
        </div>
    );
}