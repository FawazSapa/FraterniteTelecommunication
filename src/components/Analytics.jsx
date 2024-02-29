import React from 'react'
import Fraternité from '../assets/Fraternité.png'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Fraternité} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Consumer Choice</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Great Deals with Fraternité! Internet starting from just $50</h1>
                    <p className=''>Fast, reliable, and secure internet starting at $49.99/mo. Already a Fraternité mobile customer? Call us now to get it X-XXX-XXX-0213.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>

            </div>

        </div>
    )
}

export default Analytics