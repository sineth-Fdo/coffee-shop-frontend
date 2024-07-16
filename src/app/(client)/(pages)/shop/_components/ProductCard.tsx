"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";

const ProductCard = (props: any) => {
  const { products } = props;

  const [token, setToken] = useState("");
  const [role, setRole] = useState("");


  useEffect(() => {
    const token = Cookies.get("token") as string;
    const role = Cookies.get("role") as string;
    setToken(token);
    setRole(role);
  }, []);

  return (
    <div className="flex flex-wrap justify-center  w-[100%] h-[100%] gap-6">
      {products.map((product: any) => (
        <div
          key={product.id}
          className=" w-[300px] h-[300px] flex flex-col justify-center items-center shadow-lg rounded-xl cursor-default"
        >
          <div className="w-[90%] h-[90%]">
            <Dialog>
              <DialogTrigger className="w-[100%] h-[60%] relative overflow-hidden rounded-xl cursor-pointer ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                  alt={product.name}
                  objectFit="cover"
                  layout="fill"
                  quality={100}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </DialogTrigger>
              <DialogContent className="w-[100%] h-[70%] flex flex-col justify-start items-start">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#603809]">
                    <div className="flex flex-col">
                      {product.name}
                      <p className="text-sm text-[#008000a4] flex gap-2 justify-start items-center">
                        <GiCoffeeBeans className="text-[#000] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                        {product.stock}
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=" w-[100%] h-[90%]">
                  <div className="w-[100%] h-[60%] relative overflow-hidden rounded-xl cursor-pointer ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
                      alt={product.name}
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                    />
                  </div>
                  <div className=" w-[100%] h-[40%] flex flex-col justify-between">
                    <p className="text-md text-[#000000d2] pt-3">
                      {product.description}
                    </p>
                    <div className="w-[100%] flex justify-between">
                      
                      <p className="text-4xl text-[#603809] font-bold">
                        LKR {product.price}
                      </p>

                      {token && role === "admin" ? (
                        <button className="w-[40%] h-[40px] flex justify-center items-center bg-[#d1a158] text-white rounded-xl">
                          <MdModeEdit className="text-[#fff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                        </button>
                      ) : (
                        <button className="w-[40%] h-[40px] flex justify-center items-center bg-[#d1a158] text-white rounded-xl">
                          <IoCartOutline className="text-[#fff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col justify-center items-center pt-3">
              <h1 className="text-lg text-[#603809]">{product.name}</h1>
              <div className=" w-[100%] flex justify-between items-center pt-5">
                <p className="text-lg text-[#603809] ">LKR {product.price}</p>

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
