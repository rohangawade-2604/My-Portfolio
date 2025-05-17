import React from 'react'
import My from '../assets/bg1.png'
import bgImg from "../assets/bgimg.png"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Animation easing
      once: true, // Whether animation should happen only once
      disable: false // Disable AOS on mobile devices
    });
  }, []);

  return (
    <>
      <div className='flex justify-center items-center gap-10 h-170 px-10 text-white'
        style={{ backgroundImage: `url(${bgImg})` }} >
        <div className="img">
          <img src={My} alt="" data-aos="fade-up" className='  bg-center w-150 bg-black bg-sticky bg-cover  rounded-4xl h-130 shadow-[10px_20px_20px_rgba(0,0,10,10.100)]' />
        </div>

        <div className="content w-200 " data-aos="fade-up">
          <h1 className='text-[51px] font-bold text-yellow-300'>_I'M Rohan Gawade</h1>
          <h2 className='text-[51px] font-bold'>Web Developer</h2>
          <p className='text-[17px] mt-8 font-semibold'>I'm a passionate Frontend Developer with a love for creating beautiful, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React. I'm excited to bring ideas to life on the web and constantly learning new technologies to improve my craft. Let's build something amazing together!</p>

          <button className="relative group border-2 border-amber-300 text-white rounded-3xl p-4 mt-5 cursor-pointer bg-transparent overflow-hidden transition-colors duration-300 ease-in-out 
           before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-amber-300 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:before:scale-x-100">

            <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">
              <Link to="/about"> MORE ABOUT <i className="fa-solid fa-arrow-right-long ml-2"></i></Link>

            </span>

          </button>

        </div>

      </div>

    </>
  )
}


