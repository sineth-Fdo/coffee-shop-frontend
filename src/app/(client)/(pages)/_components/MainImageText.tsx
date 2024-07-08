import React from 'react'


const MainImageText = (props : {name : string}) => {
return (
    <>
        <h1 className='text-[#fff] absolute z-10 text-3xl sm:text-7xl tracking-[0.5em]'>{props.name}</h1>
    </>
)
}

export default MainImageText
