"use client";

import Image from "next/image";
import LoginForm from "./_components/LoginForm";

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
          <div className=" w-[75vw] sm:w-[35vw] h-[40vh] absolute right-0">
              <Image 
                      src="/assets/coffee-fallen-left.png"
                      alt="login"
                      objectFit="contain"
                      layout="fill"
                      quality={100}
                      style={
                        {
                          opacity: "0.4"
                        }
                      }
                      
                      />
          </div>
            <LoginForm />
        </div>
    
        </div>
  );
};

export default Page;
