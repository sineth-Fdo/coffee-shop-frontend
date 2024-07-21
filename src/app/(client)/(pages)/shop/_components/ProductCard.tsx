"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addToCart } from "@/src/api/product/cartAPI";
import Cookies from "js-cookie";
import Image from "next/image";
import { IoMdDoneAll } from "react-icons/io";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast";
import Link from "next/link";


const ProductCard = (props: any) => {
  const { products } = props;
  const { toast } = useToast();

  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [quantity, setQuantity] = useState(1);


  const handleQuantity = (type: string) => {
      
    if (type === "increment") {
      if (quantity < 10)
      setQuantity(quantity + 1);
    }else {
      if (quantity !== 1 ) 
      setQuantity(quantity - 1);
    }
  };


  const handleAddToCart = async (product_id : string) => {
    const token = Cookies.get("token") as string;

    try {
      const response = await addToCart(token, product_id, quantity);
      console.log(response);
      setQuantity(1);
      toast({
        title: `${response.message}`,
        action: 
        <ToastAction altText="Try again">
          {
            response.message === "Product added to cart successfully" ? (
              <IoMdDoneAll className="text-[#fff] text-2xl hover:text-md transition duration-500 ease-in-out" />  
            ) : (
                <Link href="/shop">
                  <h1 className="text-[#fff] text-sm hover:text-[#ffffff96] transition duration-500 ease-in-out">Go to Cart</h1>
                </Link>
            )
          }
        </ToastAction>,
        className: `border-none ${response.message === "Product added to cart successfully" ? "bg-[#008000]" : "bg-[#725326]" } text-[#fff]  hover:text-md transition duration-500 ease-in-out`,

      })
    }catch(error:any){
      console.log(error);
    }

  };

  useEffect(() => {
    const token = Cookies.get("token") as string;
    const role = Cookies.get("role") as string;
    setToken(token);
    setRole(role);
  }, []);


  return (
    <div className="flex flex-wrap justify-center w-[100%] h-[100%] gap-6">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="w-[300px] h-[300px] flex flex-col justify-center items-center shadow-lg rounded-xl cursor-default"
        >
          <div className="w-[90%] h-[90%]">
            <Dialog 
            onOpenChange={
              (isOpen) => {
                if (!isOpen) {
                  setQuantity(1);
                }
              }
            }
            
            >
              <DialogTrigger className="w-[100%] h-[60%] relative overflow-hidden rounded-xl cursor-pointer">
                <Image
                  src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                  alt={product.name}
                  objectFit="cover"
                  layout="fill"
                  quality={100}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </DialogTrigger>
              <DialogContent className="w-[100%] h-[80%] bg-[#ffffff] flex flex-col justify-start items-start">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#603809]">
                    <div className="flex flex-col">
                      {product.name}
                      <p className=" text-sm text-[#008000a4] flex gap-2 justify-start items-center">
                        <GiCoffeeBeans className="text-[#000] text-2xl hover:text-md transition duration-500 ease-in-out" />
                        {product.stock}
                        <p className="text-sm text-[#000000d2] ml-4">
                          Category : {product.category}
                        </p>
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription>

                    {
                      token && role === "customer" ? (
                        <div className=" w-[100%] py-1 flex gap-2 text-center">
                          <button
                            onClick={() => handleQuantity("decrement")}
                            className={` font-extrabold w-[20%] py-1 rounded-md  ${quantity === 1 ? "bg-[#6037096f] " : "bg-[#603809]"} text-[#fff] active:bg-[#6037096f] `}>-</button>
                          <div className=" w-[40%] font-extrabold py-1">{quantity}</div>
                          <button 
                            onClick={() => handleQuantity("increment")}
                            className={` w-[20%] font-extrabold py-1 rounded-md bg-[#603809] text-[#fff] active:bg-[#603709a3] ${quantity === 10 ? "bg-[#6037096f] " : "bg-[#603809]"}`}>+</button>
                        </div>
                      ) : null
                    }
                    
                  </DialogDescription>
                </DialogHeader>
                <div className=" w-[100%] h-[90%]">
                  <div className="w-[100%] h-[60%] relative overflow-hidden rounded-xl cursor-pointer">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                      alt={product.name}
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                    />
                  </div>
                  <div className="w-[100%] h-[40%] flex flex-col justify-between">
                    <p className="text-md text-[#000000d2] pt-3">
                      {product.description}
                    </p>
                    <div></div>
                    <div className="w-[100%] flex justify-between">
                      <p className="text-4xl text-[#603809] font-bold">
                        LKR {product.price * quantity}
                      </p>

                      {token && role === "admin" ? (
                        <button className="w-[40%] h-[40px] flex justify-center items-center bg-[#603809] hover:bg-[#d1a158] text-white rounded-xl shadow-lg transition duration-500 ease-in-out">
                          <MdModeEdit className="text-[#fff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                        </button>
                      ) : (
                        <button
                        onClick={() => handleAddToCart(product._id)}
                        className="w-[40%] h-[40px] flex justify-center items-center bg-[#603809] hover:bg-[#d1a158] text-white rounded-xl shadow-lg transition duration-500 ease-in-out"
                        >
                          <IoCartOutline className="text-[#ffffff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col justify-center items-center pt-3">
              <h1 className="text-lg text-[#603809]">{product.name}</h1>
              <div className="w-[100%] flex justify-between items-center pt-5">
                <p className="text-lg text-[#603809]">LKR {product.price}</p>

                <div className="w-[40%] h-[40px] flex gap-4 justify-center items-center bg-[#d1a158] text-white rounded-xl">
                  <GiCoffeeBeans className="text-[#fff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                  <h1 className="text-[#fff] text-lg hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out">
                    {product.stock}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;