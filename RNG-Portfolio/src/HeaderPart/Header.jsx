import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" },
  ];

  const defaultStyle = { color: "white" };
  const activeStyle = { color: "yellow" };

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="text-[18px] border-b-2 border-white flex justify-between items-center h-20 px-6 bg-black font-bold">


        {/* Logo */}
        <Link to="/">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/58/93/rng-letter-logo-design-monogram-initials-vector-42005893.jpg"
            alt="Logo"
            className="h-14"
          />
        </Link>


        {/* Hamburger Icon - visible only on small screens */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>



        {/* Navigation Links - hidden on small screens */}
        <div className="hidden sm:flex gap-10 ml-25">
          {links.map((data) => (
            <NavLink
              key={data.path}
              to={data.path}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
              end
            >
              {data.title}
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex gap-3 text-xl text-yellow-400">
          <a href="https://www.linkedin.com/in/rohan-gawade-112a942a7/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/rohangawade-2604" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/alpha_ronnie_26/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Mobile Menu - only visible when menuOpen is true */}
      {menuOpen && (
        <div className="sm:hidden bg-black text-white text-center p-4">
          {links.map((data) => (
            <NavLink
              key={data.path}
              to={data.path}
              onClick={() => setMenuOpen(false)} // close menu on link click
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
              className="block py-2"
              end
            >
              {data.title}
            </NavLink>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-4 mt-4 text-yellow-400 text-xl">
            <a href="https://www.linkedin.com/in/rohan-gawade-112a942a7/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/rohangawade-2604" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/alpha_ronnie_26/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
