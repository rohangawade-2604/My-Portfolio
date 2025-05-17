import React from 'react'
import { Link } from 'react-router-dom'
import { SkillSection } from '../../Skills_Components/SkillSection'
import { Education } from '../../Educations_Compo/Education'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {

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
      <div className='h-450 px-40 text-white bg-black relative'  >
        <h1 className='text-center text-[110px] font-bold opacity-15 absolute left-138' >RESUME</h1>
        <h1 className='text-[60px] font-bold text-center pt-10'  data-aos="fade-up" >ABOUT <span className='text-amber-300'  data-aos="fade-up">ME</span></h1>



        <div className=' bg-black  text-white flex justify-around items-center' data-aos="fade-up">

          <div className="Info flex justify-between items-center ">

            <div className="first-part w-100 mt-4">
              <h1 className='text-[30px] font-bold  mt-10'>Personal <span className='text-amber-300'>Info</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>First Name :  <span className='text-yellow-300'>Rohan</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Age :  <span className='text-yellow-300'>22 yrs</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Phone :  <span className='text-yellow-300'>9769637063</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Github :  <span className='text-yellow-300'><Link to="https://github.com/rohangawade-2604">rohangawade-2604</Link></span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>LinkedIn :  <span className='text-yellow-300'><Link to="https://www.linkedin.com/in/rohan-gawade-2604/">Rohan Gawade</Link></span></h1>

              <button className=" relative group border-2 border-amber-300 text-white rounded-3xl p-4 mt-10 cursor-pointer bg-transparent overflow-hidden transition-colors duration-300 ease-in-out 
           before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-amber-300 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:before:scale-x-100">

                <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">
                  DOWNLOAD CV <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </span>

              </button>
            </div>

            <div className="second-part  ">
              <h1 className='mt-5 text-[15px] font-bold'>Last Name :  <span className='text-yellow-300'>Gawade</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Nationality :  <span className='text-yellow-300'>Indian</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Address :  <span className='text-yellow-300'>Kandivali(East), Mumbai-400101</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Email :  <span className='text-yellow-300'>rohangawade2604@gmail.com</span></h1>
              <h1 className='mt-5 text-[15px] font-bold'>Languages :  <span className='text-yellow-300'>Marathi , Hindi , English</span></h1>
            </div>


          </div>

          <div className="counting-per mt-10">
            <div>
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRzcmpuMnU1bWFvdHYyNGk5NXd0eHUyNng3anlkNG5jYWI5MWV0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u2pmTWUi0MXjyrMaVj/giphy.gif" alt="being" className='h-90 ' />
            </div>
          </div>

        </div>

      {/*-------- Skills Sections-------------- */}

      <SkillSection/>
      
      {/*--------- Education Section--------------- */}
      <Education/>


      </div>
    </>
  )
}


