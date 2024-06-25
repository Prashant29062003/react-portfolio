import React from 'react'
import { DiJava, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiPython } from 'react-icons/si'
import pic from "../assets/img/logo.jpg"

function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: pic,
            name: "Bhojan.",
            link: "https://bhojan-del.netlify.app/"
        },
        {
            id: 2,
            logo: SiExpress,
            name: "Express"
        },
        {
            id: 3,
            logo: DiReact,
            name: "ReactJS"
        },
        {
            id: 4,
            logo: FaNodeJs,
            name: "nodeJS"
        },
        {
            id: 5,
            logo: SiPython,
            name: "Python"
        },
        {
            id: 6,
            logo: DiJava,
            name: "Java"
        },
    ]
  return (
    <>
    <hr />
        <div name='Projects' className="projects max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 z-10 mb-4"> 
            <h1 className='font-bold text-2xl mb-5'>Proj<span className='text-red-600'>ects.</span></h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className="project-cards grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {
                    cardItem.map(({id, logo, name, link}) => (
                        <div className='md:w-[300px] md:h-[300px] mt-4 rounded-lg shadow-xl p-1 hover:scale-105 duration-200 flex flex-col items-center justify-around' key={id}>
                            <a href={link} target="_blank"><img src={logo} alt="" className='w-16 h-16 rounded-full border-[2px] object-cover'/></a>
                            <div className='flex flex-col items-center text-center'>
                                <h4 className='font-semibold text-xl mb-2'>{name}</h4>
                                <p className='text-sm font-medium px-2 text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo molestiae, </p>
                            </div>
                            <div className='card-bottom grid grid-cols-2 gap-x-6'>
                                <button class="btn bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 cursor-pointer"><a href="#">Link</a></button>
                                <button class="btn bg-green-500 hover:bg-green-700 text-white rounded-md px-2 cursor-pointer"><a href="#">Source code</a></button>
                            </div>
                            
                        </div>
                    ))
                }
                
            </div>
        </div>
    </>
  )
}

export default Projects