'use client'

import MainImage from '@/src/components/ui/mainImage'
import React from 'react'
import MainImageText from '../_components/MainImageText'

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
                <MainImageText name="MENU" />
                <MainImage alt="shop-main-image" src="/assets/main2.jpg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt nesciunt laborum maiores itaque, id nihil at consequatur, ea cumque deleniti hic libero eaque tempora nam maxime sequi explicabo dolore error totam corporis, harum ipsum eligendi. Cum amet ut obcaecati. Incidunt, quaerat dicta quod rem excepturi consequuntur ea quibusdam blanditiis iusto quidem veniam quam suscipit corporis quis natus, veritatis similique, iste ipsa? Eius provident earum, ipsa omnis totam commodi repudiandae accusantium, illo esse fugiat molestiae, quidem quo dolore. Ut doloribus amet inventore laboriosam beatae sit. Ipsa, odit necessitatibus veniam similique dolores quam magni quisquam, ab quidem accusamus aliquam voluptatibus id?</h1>
    </div>
  )
}

export default Page
