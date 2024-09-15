import React from 'react'
import { DiJava, DiReact } from 'react-icons/di'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiPython } from 'react-icons/si'
import { RiReactjsFill } from "react-icons/ri";
import { FaPython, FaJava } from "react-icons/fa";

function Experience() {
    const cardItem = [
        
        {
            id: 1,
            logo: RiReactjsFill,
            name: "ReactJS"
        },
        {
            id: 2,
            logo: FaNodeJs,
            name: "nodeJS"
        },
        {
            id: 3,
            logo: FaPython,
            name: "Python"
        },
        {
            id: 4,
            logo: FaJava,
            name: "Java"
        },
    ]
  return (
    <>
    <hr />
        <div name="Experience" className="projects max-w-screen-2xl container mx-auto p-4 md:px-20 my-10 z-10"> 
            <h1 className='font-bold text-2xl mb-5'>Exper<span className='text-red-600'>ience.</span></h1>
            <p className='font-semibold'></p>
            <div className="project-cards grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                
                {
                    cardItem.map(({id, logo: Logo, name, link}) => (
                        <div className='rounded-full w-[150px] h-[150px] shadow-xl hover:scale-105 duration-200 flex flex-col items-center justify-center' key={id}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Logo className='w-[100px] h-[100px] rounded-full border-[2px] object-cover'/>
                            </a>
                            
                            <p>{name}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </>
  )
}

export default Experience