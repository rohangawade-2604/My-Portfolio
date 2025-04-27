import React from 'react'
import My from '../assets/image.png'

export const Home = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-10 h-170 px-10  text-white bg-black '>
        <div className="img">
            <img src={My} alt="" className=' border-2 bg-center w-150 bg-black bg-cover ring-1 rounded-4xl h-130 shadow-[20px_20px_10px_rgba(0,0,10,10.100)]' />
        </div>

        <div className="content w-200 ">
            <h1 className='text-[51px] font-bold text-yellow-300'>_I'M Rohan Gawade</h1>
            <h2 className='text-[51px] font-bold'>Web Developer</h2>
            <p className='text-[17px] mt-5'>I'm a passionate Frontend Developer with a love for creating beautiful, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React. I'm excited to bring ideas to life on the web and constantly learning new technologies to improve my craft. Let's build something amazing together!</p>

            <button className='border-2 border-amber-300 rounded-3xl p-4 mt-5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-amber-300 font-bold '>More About <i class="fa-solid fa-arrow-right-long" ></i></button>
        </div>
    </div>
        
    </>
  )
}


