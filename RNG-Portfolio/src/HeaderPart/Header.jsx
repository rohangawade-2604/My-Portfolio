import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {

  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" },
  ];

  const defaultStyle = {
    color: "white"
  }

  const activeStyle = {
    color: "yellow"

  }

 


  return (
    <>
      <div className=' '>
        <div className='gap-20 pl-10 text-[18px] border-b-2 border-white flex justify-center items-center h-25 w-full bg-black font-bold bg-fixed relative '>

          <img src="https://cdn4.vectorstock.com/i/1000x1000/58/93/rng-letter-logo-design-monogram-initials-vector-42005893.jpg" alt="" className='h-20 absolute left-10 bottom-3 ' />
          {
            links.map((data) => (

              <div className="" key={data.path}>
                <NavLink style={({ isActive }) => {
                  return isActive ? activeStyle : defaultStyle;
                }} key={data.path} to={data.path} end >
                  {data.title}

                </NavLink>
              </div>

            ))
          }

         <div className="buttons absolute right-10 ">
           <button className=' p-[3px] cursor-pointer ml-3'><i className="fa-brands fa-linkedin" style={{ color: "#FFD43B", fontSize: "25px" }}></i></button>

            <button className=' p-[3px] ml-3 cursor-pointer'><i className="fa-brands fa-github" style={{ color: "#FFD43B", fontSize: "25px" }}></i>
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px]  cursor-pointer'><i className="fa-brands fa-facebook" style={{ color: "#FFD43B", fontSize: "25px" }}></i>
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px] cursor-pointer'><i className="fa-brands fa-instagram" style={{ color: "#FFD43B", fontSize: "25px" }}></i>
            </button>
         </div>

        </div>

       
       
      </div>



    </>
  )
}



