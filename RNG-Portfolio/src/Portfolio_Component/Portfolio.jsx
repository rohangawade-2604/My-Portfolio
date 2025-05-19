import { useState } from 'react'
import React from 'react'
import AB from "../assets/AB.png"; // correct
import CW from "../assets/CW.png"
import CD from "../assets/CD.png"
import DP from "../assets/DP.png"
import md from "../assets/md.png"
import TL from "../assets/TL.png"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Portfolio = () => {

  const [data, setData] = useState("All");

  const Projects = [
    {
      id: 1,
      img: AB,
      title: "Aussies Buckets Website",
      category: "react"
    },

    {
      id: 2,
      img: CW,
      title: "Coffee Delite Website",
      category: "HCJ",
    },

    {
      id: 3,
      img: CD,
      title: "Creative Company Website",
      category: "HCJ",
    },

    {
      id: 4,
      img: DP,
      title: "Gym Portfolio Website",
      category: "react",
    },

    {
      id: 5,
      img: md,
      title: "1MDM website",
      category: "react",
    },

    {
      id: 6,
      img: TL,
      title: "Todo List",
      category: "HCJ",
    },


  ]


  const filterData = data === "All" ? Projects : Projects.filter((el) => {
    return el.category === data;
  })

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Animation easing
      once: true, // Whether animation should happen only once
      disable: false // Disable AOS on mobile devices
    });
  }, []);

  useEffect(() => {
    document.title = " Rohan Gawade | Portfolio"
  })
  return (
    <>
      <div className='Portfolio_Part bg-black text-white h-250 w-full relative pt-25 max-sm:pt-30 max-sm:h-500'>

        <h1 className='text-[110px] font-bold text-center absolute left-140 ml-5 opacity-15 max-sm:text-[80px] max-sm:left-[53px] max-sm:top-35 '>WORKS</h1>
        <h1 className='text-center font-bold text-[45px] ml-8 pt-15 max-sm:text-[30px] max-sm:mb-10'>MY <span className='text-amber-400'>PORTFOLIO</span></h1>

        <div className="button mt-15 text-center max-sm:text-[13px]  " data-aos="fade-up">
          <button onClick={() => setData("All")} className='ml-15 font-semibold cursor-pointer max-sm:ml-1'>ALL</button>
          <button onClick={() => setData("HCJ")} className='ml-15 font-semibold cursor-pointer max-sm:ml-3'>HTML & <span className='text-amber-400'>CSS &</span>  JAVASCRIPT</button>
          <button onClick={() => setData("react")} className='ml-15 font-semibold cursor-pointer max-sm:ml-3'>REACT.JS & <span className='text-amber-400'>TAILWIND CSS</span> </button>


        </div>


        <div className="Content-part grid grid-cols-3 my-20 justify-items-center mx-23 gap-10 max-sm:block max-sm:w-100 max-sm:mx-2">
          {
            filterData.map((el, id) => (
              <div className='' key={id} data-aos="fade-right">
                <div className="card text-white text-center font-bold text-[17px]" data-aos="fade-right">
                  <img src={el.img} alt={el.category || "project"} key={id} className='h-40 mt-10 max-sm:w-80 ' data-aos="fade-right" />
                  <h1 className='mt-5' data-aos="fade-right">{el.title}</h1>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </>
  )
}


