"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCartItems } from "@/src/api/product/cartAPI";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

const CartMain = () => {
  const [cartItems, setCartItems] = useState([] as any);
  const [cartTotal, setCartTotal] = useState(0);

  const getCart = async () => {
    const token = Cookies.get("token");
    try {
      const response = await getCartItems(token as string);
      console.log(response.data.cart);
      setCartItems(response.data.cart);
      setCartTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <IoCartOutline className="text-white text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>
            <div className="border border-[red] w-[100%] h-[90vh] relative">
              <ScrollArea className="w-[100%] h-[80%]">
                {cartItems.map((item : any) => (
                  <div key={item._id} className="border border-[green] w-[100%] h-[130px] flex justify-center items-center my-4">
                    <div className="border w-[30%] h-[100%] relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${item.product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                        layout="fill"
                        objectFit="cover"
                        alt="product"
                        quality={100}
                      />
                    </div>
                    <div className="border w-[55%] h-[100%] px-2">
                      <h1 className="text-lg text-[#603809]">{item.product.name}</h1>
                      <h1> Price : {item.itemPrice}</h1>
                      <h1>{item.quantity}</h1>
                    </div>
                    <div className="border w-[15%] h-[100%] flex justify-center items-start pt-2">
                    <TiDeleteOutline  className="text-[red] hover:text-[#ff000074] text-3xl hover:text-md transition duration-500 ease-in-out" />
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="border border-[blue] w-[100%] h-[20%]">
                <h1>{cartTotal}</h1>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartMain;
