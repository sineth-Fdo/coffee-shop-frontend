'use client';

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { IoCartOutline } from 'react-icons/io5';

const CartMain = () => {
  return (
    <Sheet>
    <SheetTrigger>
      <IoCartOutline 
        className="text-white text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out"
      />
    </SheetTrigger>
    <SheetContent side={"right"}>
      <SheetHeader>
        <SheetTitle>My Cart</SheetTitle>
        <SheetDescription>
            <h1>
              Cart is empty
            </h1>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
</Sheet>
  )
}

export default CartMain
