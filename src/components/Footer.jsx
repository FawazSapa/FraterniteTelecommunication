import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='max-w-[1240 px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Fraternité.</h1>
                <p className='py-4'>Stay connected with the world around you through Fraternité's premier telecommunication services. Offering a range of solutions tailored to meet your personal and business needs, we ensure reliable coverage and unparalleled customer support. Explore our latest technology and join a community that values speed, connectivity, and quality.



                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Why Fraternité</li>
                        <li className='py-2 text-sm'>Store Locator</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>


                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>Help</li>


                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Site Map</li>
                        <li className='py-2 text-sm'>Careers</li>



                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>


                    </ul>
                </div>


            </div>

        </div>
    )
}
