import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <div className=' fixed top-0 left-0 right-0 z-10'>
        <div className='gap-15 text-[18px] border-b-2 border-white flex justify-center items-center h-25 w-full bg-black font-bold relative '>

          <Link to="/">  <img src="https://cdn4.vectorstock.com/i/1000x1000/58/93/rng-letter-logo-design-monogram-initials-vector-42005893.jpg" alt="" className='h-20 absolute left-10 bottom-3 ' /></Link>

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
            <button className=' p-[3px] cursor-pointer ml-3'>
              <Link to="https://www.linkedin.com/in/rohan-gawade-112a942a7/">
                <i className="fa-brands fa-linkedin" style={{ color: "#FFD43B", fontSize: "px" }}></i>
              </Link>
            </button>

            <button className=' p-[3px] ml-3 cursor-pointer'>
              <Link to="https://github.com/rohangawade-2604">
                <i className="fa-brands fa-github" style={{ color: "#FFD43B", fontSize: "px" }}></i>
              </Link>
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px]  cursor-pointer'><i className="fa-brands fa-facebook" style={{ color: "#FFD43B", fontSize: "px" }}></i>
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px] cursor-pointer'>
              <Link to="https://www.instagram.com/alpha_ronnie_26/">
                <i className="fa-brands fa-instagram" style={{ color: "#FFD43B", fontSize: "px" }}></i></Link>
            </button>
          </div>

        </div>



      </div>



    </>
  )
}



