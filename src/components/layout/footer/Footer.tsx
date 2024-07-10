'use client';

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Footer = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    setToken(token as string);
  }, [])

  return (
<>
        {
      
          token ? (
            <div className='w-full h-[300px] bg-[#000] text-[#fff] flex justify-center items-center'>
              <h1>Footer is under Development</h1>
            </div>
          ) : null
        }
        
</>
  )
}

export default Footer
