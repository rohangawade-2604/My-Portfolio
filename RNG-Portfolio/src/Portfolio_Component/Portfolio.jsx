import React from 'react'

const Portfolio = () => {
  return (
    <>
      <div className='Portfolio_Part bg-black text-white h-200 w-full relative'>
        
        <h1 className='text-[110px] font-bold text-center absolute left-140 ml-8 opacity-15'>WORKS</h1>
        <h1 className='text-center font-bold text-[45px] ml-13 pt-15'>MY <span className='text-amber-400'>PORTFOLIO</span></h1>

        <div className="button mt-15 text-center ">
          <button className='ml-15 font-semibold cursor-pointer'>ALL</button>
          <button className='ml-15 font-semibold cursor-pointer'>HTML & CSS & JAVASCRIPT</button>
          <button className='ml-15 font-semibold cursor-pointer'>REACT.JS</button>
          <button className='ml-15 font-semibold cursor-pointer'>TAILWIND CSS</button>

        </div>
      </div>
    </>
  )
}

export default Portfolio
