'use client'
import React from 'react'
import Link from 'next/link'
import { navList } from './navList'
import Button from '../ui/button'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'

const NavMenu = (props:any) => {
  const token = Cookies.get("token");
  const router = useRouter();

  return (
    <>
      {props.navName === "big" ? (
        <div className='flex w-[100%]'>
          {navList.map((item, index) => (
            <Link href={item.link} key={index}>
              <h1 className="text-white text-md mr-12 hover:text-[#ffffffb0] hover:text-md hover:underline transition duration-500 ease-in-out ">{item.title}</h1>
            </Link>
          ))}
        </div>
      ) : props.navName === "small" ? (
        <div className='flex flex-col w-[100%] h-screen bg-[#00000085] shadow top-0 lg:hidden relative items-center justify-center'>
            {navList.map((item, index) => (
                <Link href={item.link} key={index}>
                    <h1 className="text-white text-2xl my-5">{item.title}</h1>
                </Link>
            ))}
            
            <Button 
                name = {token ? "Logout" : "Login"}
                className="hover:bg-[#795b30] bg-[#bd914e] hover:text-[#ffe6bf] transition duration-500 ease-in-out w-40 h-8"
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
