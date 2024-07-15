"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../ui/button";
import NavigationMenu from "./NavMenu";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CartMain from "@/src/app/(client)/(pages)/_components/CartMain";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");


  const router = useRouter();


  useEffect(() => {
    const CookeToken = Cookies.get("token") as string;
    const CookeRole = Cookies.get("role") as string;
    setToken(CookeToken);
    setRole(CookeRole);

    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      {
        token ? (
          <nav className={`bg-[#00000000] lg:bg-[#00000085] flex flex-col justify-end items-end fixed w-screen z-50 top-0  transition duration-300 ${hideNavbar ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-5 mb-5 py-2">
            <div className="pl-4 flex items-center mr-1">
              <Link href={
                token && role === "customer" ? "/home" : token && role === "admin" ? "/dashboard" : "/"
              }>
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

          
              
              {
                token && Cookies.get("role") === "customer" ? (
                  <div className="mr-8">
                    <CartMain />
                  </div>
                ) : token && Cookies.get("role") === "admin" ? (
                  null
                ) : (
                  <Link href= '/register'>
                    <h1 className="text-[#fff] mr-8 text-sm underline hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out">
                      Register
                    </h1>
                  </Link>
                )
              }

                <Button
                  name={token ? "Logout" : "Login"}
                  className="hover:bg-[#795b30] bg-[#bd914e] hover:text-[#ffe6bf] transition duration-500 ease-in-out w-20 h-8"
                  onClick={() =>{
                    if(token){
                      Cookies.remove("token");
                      Cookies.remove("role");
                      router.push("/login");
                    }else{
                      router.push("/login");
                    }
                  
                  }}
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
          <NavigationMenu 
                navName={isOpen ? "small" : ""} 
                onClick={() => setIsOpen(false)}
          />
        </nav>
        ) : null
      }

    </div>
  );
};

export default Navbar;
