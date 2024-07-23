'use client';

import MainImage from '@/src/components/ui/mainImage';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Cookies from "js-cookie";

import React, { useEffect, useState } from 'react'
import { getAllOrdersAPI } from '@/src/api/product/orderAPI';

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
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toTimeString().split(' ')[0]; 
  }

  useEffect(() => {
    getAllOrders();
  }, []);



  return (
    <div>
        <div className="relative w-full h-[50vh] overflow-hidden bg-[#000]"> 
            {/* <MainImage alt="main-image" src="/assets/coffee-admin-banner.jpg" /> */}
        </div>

        <div>

        <Table>
          <TableCaption> A list of Orders </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Customer Mobile</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              orders.map((order:any) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{formatDate(order.date)}</TableCell>
                  <TableCell className="font-medium">{formatTime(order.date)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.orderedUser.username}</TableCell>
                  <TableCell>{order.orderedUser.mobile}</TableCell>
                  <TableCell>LKR {order.orderedUser.total}.000</TableCell>
                </TableRow> 
              ))
            }
          </TableBody>
      </Table>

        </div>
    </div>
  )
}

export default Page;
