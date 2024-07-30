'use client';

import React from 'react'

interface DetailItemProps {
    label: string;
    value: string | number;
}

const DetailItem = (props : DetailItemProps) => {
    const {label, value} = props;
  return (
    <h1 className=''>
    {label} : &nbsp;
    <span className="text-[#000000c9]">
      {value}
    </span>
  </h1>
  )
}

export default DetailItem
