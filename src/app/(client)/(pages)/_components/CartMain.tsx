"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCartItems , deleteCartItem } from "@/src/api/product/cartAPI";
import Cookies from "js-cookie";
import Image from "next/image";
import Lottie from "lottie-react";
import EmptyCart from "@/src/data/lottie/Empty-cart-animation.json";
import { IoCartOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

interface CartMainProps {
  cartSide?: string;
}

const CartMain = (props : CartMainProps) => {

  const { cartSide } = props;

  const [cartItems, setCartItems] = useState([] as any);
  const [cartTotal, setCartTotal] = useState(0 as number);

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

  const removeCartItem = async (product_id: string) => {
    const token = Cookies.get("token");
    try {
      const response = await deleteCartItem(token as string, product_id);
      console.log(response);
      getCart();
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
        <div className=" p-4 relative">
          <div className=" w-[20px] h-[20px] bg-[#725326] top-0 right-0 rounded-full flex justify-center items-center p-3 absolute">
            <h1 className="text-white text-sm">{cartItems.length}</h1>
          </div>
          <IoCartOutline className="text-white text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
        </div>
      </SheetTrigger>
      <SheetContent side={cartSide == "top" ? cartSide : "right"}>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>
            <div className=" w-[100%] h-[90vh] relative"> 
              <ScrollArea className="w-[100%] h-[80%]">
                {
                  cartItems.length === 0 ? (
                    <div className="border w-[100%] h-[60vh] flex justify-center items-center">
                      <Lottie 
                        animationData={EmptyCart} 
                        loop={false}
                        autoplay={true}
                        className="w-[50%] h-[50%]"
                      />
                    </div>
                  ) : cartItems.map((item : any) => (
                    <div key={item._id} className=" shadow-lg w-[100%] h-[130px] rounded-md bg-gradient-to-r from-[#c4711f] to-[#2c2117] md:h-[130px] flex justify-center items-center my-4">
                      <div className=" w-[25%] h-[50%] relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${item.product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                          layout="fill"
                          objectFit="cover"
                          alt="product"
                          quality={100}
                        />
                      </div>
                      <div className=" w-[55%] h-[100%] px-2 pt-2 flex flex-col justify-start items-start">
                        <h1 className="text-md sm:text-lg text-[#fff]">{item.product.name}</h1>
                        <h1 className="text-sm text-[#fff]"> Price : {item.itemPrice}</h1>
                        <h1 className="text-sm text-[#fff]">{item.quantity}</h1>
                      </div>
                      <div 
                      onClick={() => removeCartItem(item._id)}
                      className=" w-[15%] h-[100%] flex justify-end items-start pt-1 pr-1 sm:pt-2 sm:pr-2">
                        <TiDeleteOutline  className="text-[red] hover:text-[#ff000074] text-3xl hover:text-md transition duration-500 ease-in-out" />
                      </div>
                    </div>
                  ))
                }

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
