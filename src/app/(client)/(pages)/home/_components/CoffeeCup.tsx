import Button from '@/src/components/ui/button'
import React from 'react'
import Image from 'next/image'

const CoffeeCup = () => {
  return (
    <div className=' w-full h-auto flex justify-center items-start sm:items-start py-6 lg:py-20 '>
        <div className=' w-[100%] h-[30%] flex justify-center'>
            <div className=' w-[100%]'> 
                <h1 className='text-2xl sm:text-4xl text-[#603809]' >Discover the best coffee</h1>
                <p className='text-sm pt-5 sm:pt-10 text-[#707070]' >Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <Button
                    name="Learn More"
                    className="w-[120px] sm:w-40 h-8 sm:h-10 hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] text-[#000] text-sm  transition duration-500 ease-in-out mt-7"
                    onClick = {() => {console.log('clicked')}}
                  />
            </div>
              <div className='hidden w-[50%] sm:flex justify-center items-start '>
                  <Image 
                    src={'/assets/coffee-cup-home.png'} 
                    alt={'coffee cup'}
                    objectFit='cover'
                    width={500}
                    height={500}
                    />
              </div>

          </div>
    </div>
  )
}

export default CoffeeCup
