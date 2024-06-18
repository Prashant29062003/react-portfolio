import React from 'react'
import { DiJava, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiPython } from 'react-icons/si'
import pic from "../assets/img/42.jpg"

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: pic,
            name: "Mongodb"
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
        <div name="Experience" className="projects max-w-screen-2xl container mx-auto p-4 md:px-20 my-10 z-10"> 
            <h1 className='font-bold text-2xl mb-5'>Exper<span className='text-red-600'>ience.</span></h1>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="project-cards grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                
                {
                    cardItem.map(({id, logo, name}) => (
                        <div className='rounded-full w-[150px] h-[150px] shadow-xl hover:scale-105 duration-200 flex flex-col items-center justify-center' key={id}>
                            <img src={logo} alt="" className='w-[100px] h-[100px] rounded-full border-[2px] object-cover'/>
                            
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