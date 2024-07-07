"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";
import NavigationMenu from "./NavMenu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <div>
      <nav className="bg-[#00000085] fixed w-full z-50 top-0 shadow ">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-5 mb-5 py-2">
          <div className="pl-4 flex items-center mr-1">
            <Link href="/home">
              <Image
                src="/assets/coffee-logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden w-[50%] h-6 lg:flex items-center  ">
            <NavigationMenu navName="big" />
            <div className="flex items-center justify-center">
              <Link href="/login">
                <h1 className="text-[#fff] mr-8 text-sm underline hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out">
                  Register
                </h1>
              </Link>
              <Button
                name="Login"
                className="hover:bg-[#795b30] hover:text-[#ffe6bf] transition duration-500 ease-in-out w-20 h-8"
               
              />
            </div>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center p-1 text-white hover:text-gray-400 focus:outline-none focus:shadow-outline"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <NavigationMenu navName={isOpen ? "small" : ""} />
      </nav>
    </div>
  );
};

export default Navbar;
