import React from 'react'
import banner from '../assets/banner.png'

export default function Banner() {
    return (
        <nav className='flex lg:flex-row flex-col items-center justify-center gap-10 text-white bg-blue-600'>
            <div className="flex flex-col gap-5 justify-center order-2 lg:order-1 items-center lg:my-[10rem]">
                <h1 className='text-md font-bold lg:text-3xl'>Books For All Your Interests</h1>
                <p className='w-[250px] text-xs lg:w-[500px] lg:text-2xl'>
                    Storage with most than 10000+ books online on all your interests.
                    Within a lot of genres chose your favorites.
                    Go on and check it up
                </p>
                <button className='border-2 border-yellow-300 mb-3 p-2 text-xs font-bold w-[100px] lg:text-xl lg:w-[250px]'>Select Books</button>
            </div>
            <img src={banner} alt="" className='w-[250px] lg:w-[400px]'/>
        </nav>
    )
}