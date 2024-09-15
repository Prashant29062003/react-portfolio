import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

import pic from "../assets/img/portfolio.jpg" 

function Home() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 z-10">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="left md:w-1/2 mt-12 md:mt-24 space-y-2 flex flex-col items-center md:items-start">
                    <span>Welcome In My Feed</span>
                    <div className="flex gap-2">
                    <h1 className='text-2xl md:text-4xl'>Hello, I'm a </h1>
                    {/* <span className='text-red-700 font-bold text-2xl md:text-4xl'>Developer</span> */}
                    <ReactTyped strings={["Developer.", "Programmer.", "Coder."]} typeSpeed={120} backSpeed={50} loop className='text-red-700 font-bold text-2xl md:text-4xl'/>
                    </div>
                    <br />
                    <p className='text-sm md:text-md text-justify'>
                        As a full-stack developer, I handle everything from front-end to back-end development. Whether it's creating responsive user interfaces with React.js or building robust APIs with Node.js and Express.js, I thrive on turning ideas into reality.
                    </p>
                    <br />
                    <div className="social flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 w-full">
                        <div className="left space-y-1 flex flex-col items-center md:items-start">
                            <h3 className='font-bold'>Available on</h3>
                            <ul className='flex gap-6 md:gap-4'>
                                <li><a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="https://in.linkedin.com/" target="_blank"><FaLinkedin className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank"><FaYoutube className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="https://www.telegram.com/" target="_blank"><FaTelegram className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                            </ul>
                        </div>
                        <div className="right space-y-1 flex flex-col items-center md:items-start">
                            <h3 className='font-bold'>Currently working on</h3>
                            <ul className='flex gap-6 md:gap-4'>
                                <li><a href="Mongodb"><DiMongodb className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="Express"><SiExpress className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="React"><FaReact className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li><a href="NodeJs"><FaNodeJs className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="right md:w-1/2 flex justify-center items-center mt-10 md:ml-24">
                    <img src={pic} className="rounded-full h-[250px] w-[250px] md:h-[450px] md:w-[450px] object-cover" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home