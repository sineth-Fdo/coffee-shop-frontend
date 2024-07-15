import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import Image from 'next/image'

const ProductCard = ( props : any ) => {
    const { products } = props;
  return (
    <div className="flex flex-wrap justify-center  w-[100%] h-[100%] gap-6">
    {products.map((product: any) => (
      <div
        key={product.id}
        className=" w-[300px] h-[300px] flex flex-col justify-center items-center shadow-lg rounded-xl cursor-default"
      >
        <div className="w-[90%] h-[90%]">
          <div className=" w-[100%] h-[60%] relative overflow-hidden rounded-xl cursor-pointer">
            <Image
            
              src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
              alt={product.name}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-3">
            <h1 className="text-lg text-[#603809]">{product.name}</h1>
            <p className="text-sm text-[#6037099e]">
              {product.description}
            </p>
            <div className=" w-[100%] flex justify-between items-center pt-2">
              <p className="text-lg text-[#603809] ">
                LKR {product.price}
              </p>

              <button className="w-[40%] h-[40px] flex justify-center items-center bg-[#d1a158] text-white rounded-xl">
                <IoCartOutline 
                  className="text-[#fff] text-2xl hover:text-[#ffffffb0] hover:text-md transition duration-500 ease-in-out"
                />
                
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductCard
