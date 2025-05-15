import React from 'react'
import Aussies from "../assets/Aussies_Projects.png"; // correct
import Coffee from "../assets/Coffie_web.png"
import Creative from "../assets/Creative_Des.png"
import Deepport from "../assets/Deepak_Portfolio.png"
import mdmr from "../assets/mdm.png"
import Todo from "../assets/Todo_List.png"

const Portfolio = () => {

  const Projects = [
    {
      id:1,
      img:Aussies,
      title:"Aussies Buckets Website"
    },

    {
      id:2,
      img:Coffee,
      title: "Coffee Delite Website"
    },

    {
      id:3,
      img:Creative,
      title:"Creative Company Website"
    },

    {
      id:4,
      img:Deepport,
      title:"Gym Portfolio Website"
    },

    {
      id:5,
      img:mdmr,
      title:"1MDM website"
    },

    {
      id:6,
      img:Todo,
      title:"Todo List"
    },

    {
      id:7,
      img:Aussies,
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


        <div className="Content-part">
          {
            Projects.map((el , id) => (
              <div className="card">
                <img src={el.img} alt="" key={id}/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Portfolio
