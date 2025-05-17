import React from 'react'
import AB from "../assets/AB.png"; // correct
import CW from "../assets/CW.png"
import CD from "../assets/CD.png"
import DP from "../assets/DP.png"
import md from "../assets/md.png"
import TL from "../assets/TL.png"

export const Portfolio = () => {

  const Projects = [
    {
      id:1,
      img:AB,
      title:"Aussies Buckets Website"
    },

    {
      id:2,
      img:CW,
      title: "Coffee Delite Website"
    },

    {
      id:3,
      img:CD,
      title:"Creative Company Website"
    },

    {
      id:4,
      img:DP,
      title:"Gym Portfolio Website"
    },

    {
      id:5,
      img:md,
      title:"1MDM website"
    },

    {
      id:6,
      img:TL,
      title:"Todo List"
    },

    {
      id:7,
      img:AB,
      title:"Aussies"
    }



  ]

  return (
    <>
      <div className='Portfolio_Part bg-black text-white h-200 w-full relative'>
        
        <h1 className='text-[110px] font-bold text-center absolute left-140 ml-5 opacity-15'>WORKS</h1>
        <h1 className='text-center font-bold text-[45px] ml-8 pt-15'>MY <span className='text-amber-400'>PORTFOLIO</span></h1>

        <div className="button mt-15 text-center ">
          <button className='ml-15 font-semibold cursor-pointer'>ALL</button>
          <button className='ml-15 font-semibold cursor-pointer'>HTML & CSS & JAVASCRIPT</button>
          <button className='ml-15 font-semibold cursor-pointer'>REACT.JS</button>
          <button className='ml-15 font-semibold cursor-pointer'>TAILWIND CSS</button>

        </div>


        <div className="Content-part grid grid-cols-3">
          {
            Projects.map((el , id) => (
              <div className=''>
                 <div className="card text-white ">
                <img src={el.img} alt="" key={id} className='h-20'/>
                <h1>{el.title}</h1>
              </div>
              </div>
             
            ))
          }
        </div>
      </div>
    </>
  )
}


