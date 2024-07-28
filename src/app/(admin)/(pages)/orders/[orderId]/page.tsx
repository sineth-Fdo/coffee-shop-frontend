'use client';

import Container from "@/src/components/layout/container";
import MainImage from "@/src/components/ui/mainImage";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { getOrderByIdAPI } from "@/src/api/product/orderAPI";

const Page = ({ params }: any) => {
  const { orderId } = params;
  const [cartItems, setCartItems] = useState([] as any);
  
  const getOrderId = async () => {
    const token = Cookies.get("token");
    try {
      const response = await getOrderByIdAPI(token as string, orderId as string);
      console.log(response.data.orderedUser.cart);
      setCartItems(response.orderedCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderId();
  }, []);

  return (
    <div>
      <div className="relative w-full h-[50vh] overflow-hidden bg-[#000]">
        <MainImage alt="main-image" src="/assets/coffee-admin-banner.jpg" />
      </div>
      <Container>
        <div className="border w-[100%] h-[100vh]">
          <h1>{orderId}</h1> 
          <div className=" w-[100%] h-[90vh] relative"> 
              <ScrollArea className="w-[100%] h-[80%]">
                {
                  cartItems.map((item : any) => {
                    const imageUrl = `${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${item.product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`;
                    return (
                      <div key={item._id} className="shadow-lg w-[100%] h-[130px] rounded-md bg-gradient-to-r from-[#c4711f] to-[#2c2117] md:h-[130px] flex justify-center items-center my-4">
                        <div className="w-[25%] h-[50%] relative">
                          <Image
                            src={imageUrl}
                            layout="fill"
                            objectFit="cover"
                            alt="product"
                            quality={100}
                          />
                        </div>
                        <div className="w-[55%] h-[100%] px-2 pt-2 flex flex-col justify-start items-start">
                          <h1 className="text-md sm:text-lg text-[#fff]">{item.product.name}</h1>
                          <h1 className="text-sm text-[#fff]"> Price : {item.itemPrice}</h1>
                          <h1 className="text-sm text-[#ffffffa8]"><span className="mr-1 text-sm ">X</span>{item.quantity}</h1>
                        </div>
                      </div>
                    );
                  })
                }
              </ScrollArea>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
