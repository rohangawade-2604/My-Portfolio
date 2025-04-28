import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const links = [
        {path: "/" , title: "Home"},
        {path: "/about" , title: "About"},
        {path: "/project" , title: "Project"},
        {path: "/contact" , title: "Contact"},
    ];

    const defaultStyle = {
        color : "white"
    }

    const activeStyle = {
        color: "yellow"

    }

  return (
    <>
   <div className='bg-fixed'>
   <div className='gap-20 pl-10 text-[18px] border-b-2 border-white flex justify-center items-center h-25 w-full bg-black font-bold bg-fixed'>
          {
            links.map((data) => (
              <NavLink style={({isActive}) => {
                return isActive ? activeStyle : defaultStyle;
              }} key={data.path} to={data.path} end >
                {data.title}
               
              </NavLink>
            ))
          }
        </div>
   </div>
    
   
        
    </>
  )
}



