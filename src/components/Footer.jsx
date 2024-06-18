import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <hr />
        <footer className='max-w-screen flex justify-center'>
            <div className="py-12 w-[350px]">
                <div className="social flex justify-center">
                    <ul className='flex gap-4 items-center'>
                        <li><a href="#"><FaFacebook className='hover:scale-110 duration-100' size={24}/></a></li>
                        <li><a href="#"><FaTwitter className='hover:scale-110 duration-100' size={24}/></a></li>
                        <li><a href="#"><FaInstagram className='hover:scale-110 duration-100' size={24}/></a></li>
                        <li><a href="#"><FaLinkedin className='hover:scale-110 duration-100' size={24}/></a></li>
                    </ul>
                </div>
                <div className="w-full mt-8 border-t border-slate-600 pt-8 flex flex-col items-center">
                    <p className='text-sm font-medium '>&copy; 2024 Prashant Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer