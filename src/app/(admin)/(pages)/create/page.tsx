'use client'

import MainImage from '@/src/components/ui/mainImage';
import React from 'react'
import CreateProductFrom from './_components/CreateProductFrom';
import Container from '@/src/components/layout/container';

const Page = () => {
  return (
      <div>
        <div className="relative w-full h-[50vh] overflow-hidden"> 
            <MainImage alt="main-image" src="/assets/coffee-admin-banner.jpg" />
        </div>

        <Container>
            <div className='w-full py-10'>
                <CreateProductFrom />
            </div>
        </Container>
        </div>
  )
}

export default Page;
