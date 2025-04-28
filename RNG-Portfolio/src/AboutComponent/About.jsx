import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div className='  h-170 px-10 text-white bg-black'>
        <h1 className='text-[40px] font-bold'>About Me</h1>
        <h1>Personal Info</h1>
        <div className="Info flex justify-evenly">
           
            <div className="first-part">
                <h1 className='mt-5 text-[15px] font-bold'>First Name :  <span className='text-yellow-300'>Rohan</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Age :  <span className='text-yellow-300'>22 yrs</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Phone :  <span className='text-yellow-300'>9769637063</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Github :  <span className='text-yellow-300'><Link to="https://github.com/rohangawade-2604">rohangawade-2604</Link></span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>LinkedIn :  <span className='text-yellow-300'><Link to="https://www.linkedin.com/in/rohan-gawade-2604/">Rohan Gawade</Link></span></h1>
            </div>

            <div className="second-part">
                <h1 className='mt-5 text-[15px] font-bold'>Last Name :  <span className='text-yellow-300'>Gawade</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Nationality :  <span className='text-yellow-300'>Indian</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Address :  <span className='text-yellow-300'>Kandivali(East), Mumbai-400101</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Email :  <span className='text-yellow-300'>rohangawade2604@gmail.com</span></h1>
                <h1 className='mt-5 text-[15px] font-bold'>Languages :  <span className='text-yellow-300'>Marathi , Hindi , English</span></h1>
            </div>
        </div>

        <div className="counting-per">
            <div>
                
            </div>
        </div>
      </div>
    </>
  )
}


