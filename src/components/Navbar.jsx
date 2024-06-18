import React from 'react'
import pic from "../assets/img/portfolio.jpg" 
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import {Link} from "react-scroll"

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      navItem: "Home"
    },
    {
      id: 2,
      navItem: "About"
    },
    {
      id: 3,
      navItem: "Projects"
    },
    {
      id: 4,
      navItem: "Experience"
    },
    {
      id: 5,
      navItem: "Contact"
    },
  ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed left-0 top-0 right-0 z-50 bg-white'>
        <div className="flex h-14 items-center justify-between">
            <div className="logo flex items-center gap-2">
              <img src={pic} alt="" className='w-12 h-12 object-cover rounded-full'/>
              <h1 className='font-semibold text-xl cursor-pointer'>Pras
              <span className='text-red-700'>hant.</span>
              <p className='text-sm font-medium'>Web developer</p>
              </h1>
            </div>
            <div className="nav">
              {/* Desktop nav */}
              <ul className='md:flex hidden gap-5'>
                {
                  navItems.map(({id,navItem}) =>(
                    <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                      <Link 
                        to={navItem} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        activeClass="active"
                      >
                        {navItem}
                      </Link>
                    </li>
                  ))
                }
                {/* <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Expereince</a></li>
                <li><a href="#contact">Contact Us</a></li> */}
              </ul>
              <div className="hamburger cursor-pointer md:hidden" onClick={() => setMenu(!menu)}>{menu ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}</div>
            </div>
        </div>
        <div className="nav">
          {/* mobile nav */}
          {
            menu && (
              <div className="bg-white">
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                {
                  navItems.map(({id,navItem}) =>(
                    <li key={id} className="hover:scale-105 duration-200">
                      <Link 
                      to={navItem} 
                      smooth={true} 
                      duration={500} 
                      offset={-70} 
                      activeClass="active" 
                      className='font-medium cursor-pointer' 
                      onClick={() => setMenu(!menu)}>{navItem}</Link>
                    </li>
                  ))
                }
                {/* <li><a href="#" className='font-semibold'>Home</a></li>
                <li><a href="#about" className='font-semibold'>About</a></li>
                <li><a href="#projects" className='font-semibold'>Projects</a></li>
                <li><a href="#experience" className='font-semibold'>Expereince</a></li>
                <li><a href="#contact" className='font-semibold'>Contact Us</a></li> */}
              </ul>
              </div>
            )
          }
        </div>
    </div>
    </>
  )
}

export default Navbar