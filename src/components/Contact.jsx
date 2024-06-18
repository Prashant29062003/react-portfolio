import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'



function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/pbmqnnnb", userInfo)
            toast.success("Your message has been sent.")
        } catch (error) {
            toast.error(error.message);
        }
      }

  return (
    <>
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <h1 className='text-3xl font-bold m-4'>Contact <span className='text-red-600'>Us</span></h1>
            <div className='flex flex-col justify-center items-center '>
            <p>Please fill the form below.</p>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    // action="https://getform.io/f/pbmqnnnb"
                    // method="POST"
                    className='w-96 bg-gray-400 px-7 py-6 rounded-md shadow-lg'>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className='block text-slate-800'>Full Name</label>
                        <input 
                            {...register("name", {required: true})}
                            name="name" 
                            type="text" 
                            className='shadow appearance-none border w-full rounded py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' 
                            placeholder='Enter your name' 
                            id='name' 
                        />
                        {errors.name && <span>This field is required!</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className='block text-slate-800'>Email</label>
                        <input 
                            {...register("email", {required: true})} 
                            name="email" 
                            type="email" 
                            className='shadow appearance-none border w-full rounded py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' 
                            placeholder='Enter your email address' id='email' 
                        />
                        {errors.email && <span>This field is required!</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="message" className='block text-slate-800'>Message</label>
                        <textarea 
                            {...register("message", {required: true})}
                            name="message" 
                            type="message" 
                            className='shadow appearance-none border w-full rounded py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' 
                            placeholder='Enter your Query' 
                            id='message' 
                        />
                        {errors.message && <span>This field is required!</span>}
                    </div>
                    <button type='submit' className='text-white bg-black rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact