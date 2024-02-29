import React from 'react'
import { ReactTyped } from "react-typed";

// [] are used to add custom values
//md:text-7xl' anyuthing over medium  i.e 750 px is 7xl
//md:text-5xl sm:text-4xl text-xl font-bold
//anything over medium:5xl over small 4xl and for mobile devices text-xl and font bold
//typespeef:speed of typing,backspeed-speed of backspace and loop infinetely


export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING TOGETHER MADE FASTER</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast,Secure,Reliable for </p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['YOU', 'ME', 'EVERYONE']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Join us to build the next generation of sustainable data solutions</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>

            </div>
        </div>
    )
}
