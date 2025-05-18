import React from 'react'
import { Link } from 'react-router-dom'
import { SkillSection } from '../../Skills_Components/SkillSection'
import { Education } from '../../Educations_Compo/Education'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RNG from '../assets/RNG.pdf'

export const About = () => {

     useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-out-cubic', // Animation easing
          once: true, // Whether animation should happen only once
          disable: false // Disable AOS on mobile devices
        });
      }, []);

         useEffect(() => {
          document.title = " Rohan Gawade | About"
        })


  return (
    <>
      <div className='h-450 px-40 text-white bg-black relative  pt-25 max-sm:bg-black max-sm:h-700 max-sm:px-5 max-sm:mt-5 max-sm:overflow-hidden'  >
        <h1 className='text-center text-[110px] font-bold opacity-15 absolute left-138 top-28 max-sm:left-[45px] max-sm:text-[80px]' >RESUME</h1>
        <h1 className='text-[60px] font-bold text-center pt-10 max-sm:text-[45px] max-sm:w-80 max-sm:ml-5'  data-aos="fade-up" >ABOUT <span className='text-amber-400'  data-aos="fade-up">ME</span></h1>



        <div className='  text-white flex justify-around items-center max-sm:block ' data-aos="fade-up">

          <div className="Info flex justify-between items-center ">

            <div className="first-part w-100 mt-4 max-sm:block max-sm:w-190 ">
              <h1 className='text-[30px] font-bold  mt-10 max-sm:text-[20px] max-sm:flex-col'>PERSONAL <span className='text-amber-400 '>INFO</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-10'>First Name :  <span className='text-yellow-300'>Rohan</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-7'>Age :  <span className='text-yellow-300'>22 yrs</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-8'>Phone :  <span className='text-yellow-300'>9769637063</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-8'>Github :  <span className='text-yellow-300'><Link to="https://github.com/rohangawade-2604">rohangawade-2604</Link></span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px max-sm:text-[13px] max-sm:mt-8'>LinkedIn :  <span className='text-yellow-300'><Link to="https://www.linkedin.com/in/rohan-gawade-2604/">Rohan Gawade</Link></span></h1>

              <button className=" relative group border-2 border-amber-300 text-white rounded-3xl p-4 mt-10 cursor-pointer bg-transparent overflow-hidden transition-colors duration-300 ease-in-out 
           before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-amber-300 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:before:scale-x-100
           
           max-sm:p-2 max-sm:h-13 max-sm:mt-18">

                <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">
                  <a href={RNG}> DOWNLOAD CV  <i className="fa-solid fa-arrow-right-long ml-2"></i> </a> 
                  
                </span>

              </button>
            </div>

            <div className="second-part  ">
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-2'>Last Name :  <span className='text-yellow-300'>Gawade</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-6'>Nationality :  <span className='text-yellow-300'>Indian</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-6'>Address :  <span className='text-yellow-300'>Kandivali(East), Mumbai-400101</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-4'>Email :  <span className='text-yellow-300'>rohangawade2604@gmail.com</span></h1>
              <h1 className='mt-5 text-[15px] font-bold max-sm:text-[13px] max-sm:mt-3'>Languages :  <span className='text-yellow-300'>Marathi , Hindi , English</span></h1>
            </div>


          </div>

          <div className="counting-per mt-10">
            <div>
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRzcmpuMnU1bWFvdHYyNGk5NXd0eHUyNng3anlkNG5jYWI5MWV0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u2pmTWUi0MXjyrMaVj/giphy.gif" alt="being" className='h-90 '  data-aos="fade-up" />
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


