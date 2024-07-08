import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface IMainImage {
    alt: string,
    src: string
}

const MainImage = (props : IMainImage) => {

    const { alt , src } = props;


    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
       <Image
          alt= {alt}
          src= {src}
          objectFit="cover"
          layout="fill"
          quality={100}
          style={{
            transform: `scale(${1 + scrollY / 3000})`,
            transition: 'transform 1s ease-out',
          }}
        />
    </>
  )
}

export default MainImage;
