"use client";

import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";

const Page = () => {
  return (

      <div className="w-full h-[100vh] flex justify-center">
        <div className=" hidden sm:block w-[30%] h-full overflow-hidden relative">
                <Image 
                src="/assets/login-coffee2.jpeg"
                alt="login"
                objectFit="cover"
                layout="fill"
                quality={100}
                
                />
        </div>
        <div className="border w-[100%] sm:w-[70%] h-[100%] bg-[#fff]">
            <RegisterForm />
        </div>
    
        </div>
  );
};

export default Page;
