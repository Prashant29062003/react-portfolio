import React from 'react'
import { DiJava, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiPython } from 'react-icons/si'
import pic_1 from "../assets/img/bhojan_app_favicon.png";
import pic_2 from "../assets/img/joke_app_favicon.png";
import pic_3 from "../assets/img/infinite_favicon.png";
import pic_4 from "../assets/img/Analog_Clock_favicon.png";
import pic_5 from "../assets/img/Random_Quote_Favicon.png";
import pic_6 from "../assets/img/picture_in_picture_favicon.png";
import pic_7 from "../assets/img/Ankit_Portfolio_favicon.png";
import pic_8 from "../assets/img/Dictionary.png";

function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: pic_1,
            name: "Bhojan.",
            link: "https://bhojan-del.netlify.app/",
            source: "https://github.com/Prashant29062003/Bhojan-delivery",
            desc: "Developed Bhojan: A food delivery platform offering fresh, home-cooked meals."
            
        },
        {
            id: 2,
            logo: pic_2,
            name: "Joke App",
            link: "https://prashant29062003.github.io/joke-catch/",
            source: "https://github.com/Prashant29062003/joke-catch",
            desc: "Created Joke App: A fun platform delivering random jokes for entertainment."
            
        },
        {
            id: 3,
            logo: pic_3,
            name: "Infinite Scrolling",
            link: "https://prashant29062003.github.io/Infinite-Scrolling/",
            source: "https://github.com/Prashant29062003/Infinite-Scrolling",
            desc: "Built Infinite Scrolling: A seamless content-loading app with endless scrolling."
            
        },
        {
            id: 4,
            logo: pic_4,
            name: "Analog Clock",
            link: "https://prashant29062003.github.io/analog-clock/",
            source: "https://github.com/Prashant29062003/analog-clock",
            desc: "Developed Analog Clock: A simple, interactive clock with real-time updates."
            
        },
        {
            id: 5,
            logo: pic_5,
            name: "Random Quote",
            link: "https://prashant29062003.github.io/random-quotes/",
            source: "https://github.com/Prashant29062003/random-quotes",
            desc: "Created Random Quote: An app that generates and displays inspiring quotes."
            
        },
        {
            id: 6,
            logo: pic_6,
            name: "Picture and In Picture",
            link: "https://prashant29062003.github.io/pictureInPicture/",
            source: "https://github.com/Prashant29062003/pictureInPicture",
            desc: "Developed Picture-in-Picture: An app enabling video playback in a floating window."
            
        },
        {
            id: 7,
            logo: pic_7,
            name: "Sample Portfolio",
            link: "https://prashant29062003.github.io/Ankit-s-Portfolio/",
            source: "https://github.com/Prashant29062003/Ankit-s-Portfolio",
            desc: "Sample Portfolio: A showcase of diverse projects and development skills."
            
        },
        {
            id: 8,
            logo: pic_8,
            name: "Dictionary App",
            link: "https://prashant29062003.github.io/dictionary-app/",
            source: "https://github.com/Prashant29062003/dictionary-app",
            desc: "Dictionary app: Find any word and know their meanings."
            
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
                    cardItem.map(({id, logo, name, link, source, desc}) => (
                        <div className='md:w-[300px] md:h-[300px] mt-4 rounded-lg shadow-xl p-1 hover:scale-105 duration-200 flex flex-col items-center justify-around' key={id}>
                            <a href={link} target="_blank"><img src={logo} alt="" className='w-16 h-16 rounded-full border-[2px] object-cover'/></a>
                            <div className='flex flex-col items-center text-center'>
                                <h4 className='font-semibold text-xl mb-2'>{name}</h4>
                                <p className='text-sm font-medium px-2 text-slate-600'>{desc}</p>
                            </div>
                            <div className='card-bottom grid grid-cols-2 gap-x-6'>
                                <button class="btn bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 cursor-pointer"><a href={link}>Link</a></button>
                                <button class="btn bg-green-500 hover:bg-green-700 text-white rounded-md px-2 cursor-pointer"><a href={source}>Source code</a></button>
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
