import React from "react";
import { All_Products } from "@/utils/allproducts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const productdetail = (id: string | number) => {
  return All_Products.filter((product) => product.id === id);
};

export default function page({ params }: { params: { id: string } }) {

  const result = productdetail(params.id);

  return (
    <div>
      {result.map((product) => (
        <div key={product.id}>
          <div className="flex gap-44 text-3xl">
            <div>
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}              
              />
            </div>
            <div>{product.name}
              <div className="text-2xl font-extralight">{product.type} 
              </div>
              <Button className="gap-2 mt-10"><ShoppingCart/>Add to Cart</Button> {product.price} 
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
