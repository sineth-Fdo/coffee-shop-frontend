'use client'
import React from 'react'
import Link from 'next/link'
import { navList } from './navList'
import Button from '../ui/button'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'
import CartMain from '@/src/app/(client)/(pages)/_components/CartMain'

const NavMenu = (props:any) => {
  const token = Cookies.get("token");
  const router = useRouter();

  return (
    <>
      {props.navName === "big" ? (
        <div className='flex w-[100%]'>
          {navList.map((item, index) => (
            <Link href={item.link} key={index}>
              <h1 className="text-white text-md mr-12 hover:text-[#bd914e] hover:text-md hover:underline transition duration-500 ease-in-out ">{item.title}</h1>
            </Link>
          ))}
        </div>
      ) : props.navName === "small" ? (
        <div className='flex flex-col mr-3 w-[70%] sm:w-[30%] h-auto py-5 rounded-lg bg-[#000000e7] shadow top-0 lg:hidden relative items-center justify-center transition duration-300'>
            {navList.map((item, index) => (
                <Link 
                onClick={props.onClick}
                href={item.link} key={index}>
                    <h1 className="text-white text-md my-4">{item.title}</h1>
                </Link>
            ))}

{
                token && Cookies.get("role") === "customer" ? (
                      <CartMain cartSide = 'top'/>
                ) : null
              }
            
            <Button 
                name = {token ? "Logout" : "Login"}
                className=" text-[#fff] hover:bg-[#bd914e] bg-[#bd914e] mt-5  transition duration-500 ease-in-out w-40 h-8"
                onClick={() => {
                    if (token) {
                        Cookies.remove("token");
                        Cookies.remove("role");
                        router.push("/login");
                    } else {
                        router.push("/home");
                    }
                }}
                />
        </div>
      ) : null}
    </>
  );
}

export default NavMenu;
