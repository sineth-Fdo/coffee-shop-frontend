'use client'

import MainImage from '@/src/components/ui/mainImage'
import React from 'react'
import MainImageText from '../_components/MainImageText'
import ProductsMain from './_components/ProductsMain'

const Page = () => {

  return (
    <div>
        <div className="relative w-full h-[50vh] lg:h-screen overflow-hidden flex justify-center items-center">
                <MainImageText name="SHOP" />
                <MainImage alt="shop-main-image" src="/assets/main2.jpg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        </div>
        <div>
            <ProductsMain />
        </div>
    </div>
  )
}

export default Page
