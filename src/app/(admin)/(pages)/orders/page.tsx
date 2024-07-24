"use client";

import { getAllOrdersAPI } from "@/src/api/product/orderAPI";
import Container from "@/src/components/layout/container";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import TableMain from "./_components/TableMain";

const Page = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const token = Cookies.get("token") as string;
      const response = await getAllOrdersAPI(token);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div>
      <div className="relative w-full h-[50vh] overflow-hidden bg-[#000]">
        {/* <MainImage alt="main-image" src="/assets/coffee-admin-banner.jpg" /> */}
      </div>
      <Container>
        <TableMain orders={orders} />
      </Container>
    </div>
  );
};

export default Page;
