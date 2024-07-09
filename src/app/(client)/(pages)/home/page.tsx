'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/src/components/layout/container';
import Button from '@/src/components/ui/button';
import MainImage from '@/src/components/ui/mainImage';
import CoffeeCup from './_components/CoffeeCup';

const Page = () => {

  return (
    <div className="w-full">
      <div className="relative w-[100%] h-screen overflow-hidden">
        <Container>
          <div className=' w-[100%] md:w-[50%] h-[100vh] relative z-10 bottom-0 flex flex-col justify-end items-center'>
              <div className=' w-[100%] h-[80%] flex flex-col'>
                  <h1 className='text-[#fff] font-bold'>We&apos;ve got your morning covered with</h1> 
                  <div className=' w-[100%] h-[50%] relative my-1 md:my-6'>
                    <Image
                      alt="coffee"
                      src="/assets/coffee-name.png"
                      objectFit="contain"
                      layout="fill"
                      quality={100}
                    />

                  </div>
                  <h1 className='text-[#fff] '>
                      It is best to start your day with a cup of coffee. Discover the
                      best flavours coffee you will ever have. We provide the best
                      for our customers.
                  </h1>
                  <Button
                    name="Order Now"
                    className="w-40 h-10 hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] text-[#000] transition duration-500 ease-in-out mt-7"
                    onClick = {() => {console.log('clicked')}}
                  />
              </div>
          </div>
        </Container>
        <MainImage alt="main-image" src="/assets/main-bg.png" />
      </div>

      <Container>
            <CoffeeCup />

            <div className='border w-full h-[50vh] flex flex-col justify-start items-center'>

                <h1 className='text-2xl sm:text-4xl text-[#603809]'>Enjoy a new blend of coffee style</h1>
                <p className='text-sm pt-5 sm:pt-10 text-[#707070]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi perferendis eaque quisquam iusto, dolores facilis ipsa. Cumq</p>

            </div>

      </Container>
    </div>
  );
};

export default Page;
