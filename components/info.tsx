"use client"
import { Product } from "@/types";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Currency from "./currency";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                {data.name}
            </h1>

            <div className="mt-3 flex items-end justify-between">
                <div className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </div>
            </div>

            <hr className="my-4" />

            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>{data?.size?.name}</div>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
            </div>

            <div className="mt-10 flex items-center gap-x-3">




            <Button
   className="inline-flex flex-row items-center gap-x-2 
   bg-black text-white rounded-full 
   px-4 py-2 text-sm"
>
  <span>Add To Cart</span>
  <ShoppingCart className="h-4 w-4" />
</Button>




            </div>
        </div>
    );
};

export default Info;

