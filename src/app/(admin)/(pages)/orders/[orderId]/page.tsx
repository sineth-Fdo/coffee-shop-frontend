'use client';

import Container from "@/src/components/layout/container";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { getOrderByIdAPI } from "@/src/api/product/orderAPI";
import Button from "@/src/components/ui/button";
import DetailItem from "../_components/DetailItem";
import MainImage from "@/src/components/ui/mainImage";
import CoffeeLoader from "@/src/components/ui/CoffeeLoader";

const Page = ({ params }: any) => {
  const { orderId } = params;
  const [cartItems, setCartItems] = useState([] as any);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getOrderId = async () => {
    const token = Cookies.get("token");
    try {
      const response = await getOrderByIdAPI(token as string, orderId as string);
      console.log(response.data);
      setCartItems(response.orderedCart);
      setOrderDetails(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderId();
  }, []);

  if (loading) {
    return <CoffeeLoader open={true} loadingName="Loading . . ." />;
  }

  const { orderedUser } = orderDetails;
  
  return (
    <div className="h-auto">
      <div className="relative w-full h-[50vh] overflow-hidden bg-[#000]">
        <MainImage alt="main-image" src="/assets/coffee-admin-banner.jpg" />
      </div>
      <Container>
        <div className="w-[100%] h-[100%] pt-7 md:flex justify-start items-start relative">
          <div className="w-[100%] h-[100%] md:w-[50%] relative">
            <ScrollArea className="w-[100%] h-[90%]">
              {cartItems.map((item: any) => {
                const imageUrl = `${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${item.product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`;
                return (
                  <div key={item._id} className="shadow-lg w-[100%] h-[130px] rounded-md bg-gradient-to-r from-[#c4711f] to-[#2c2117] md:h-[130px] flex justify-center items-center my-4">
                    <div className="w-[25%] h-[60%] relative">
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
              })}
            </ScrollArea>
          </div>
          <div className="w-[100%] md:w-[30%] h-auto rounded-lg shadow-xl flex flex-col lg:absolute lg:top-10 lg:right-0 lg:mr-20">
            <div className="w-[100%] h-auto rounded-lg flex flex-col items-start p-3 py-10">
              <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, minima!</h1>
              <br />
              {orderedUser ? (
                <>
                  <DetailItem label="Customer Name" value={orderedUser.username} />
                  <DetailItem label="Contact" value={orderedUser.mobile} />
                  <h1 className="text-3xl mt-10">Total :&nbsp;
                    <span className="text-[#000000c9]">
                      LKR {orderedUser.total}
                    </span>
                  </h1>
                </>
              ) : (
                <p>No order details available.</p>
              )}
            </div>
            <div className="w-[100%] h-[30%] flex justify-around items-center py-8">
              <Button 
                name="Reject"
                className="w-[100px] h-[40px] bg-[#d32020] text-[#fff] hover:bg-[#2c2117] hover:text-[#fff] rounded-md"
              />
              <Button 
                name="Accept"
                className="w-[100px] h-[40px] bg-[#008000] text-[#fff] hover:bg-[#2c2117] hover:text-[#fff] rounded-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
