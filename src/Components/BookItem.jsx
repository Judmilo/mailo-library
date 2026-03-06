import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function BookItem({ title, authors, cover}) {
    return (
        <div className='flex gap-3 shadow-md shadow-slate-300 max-h-[300px] max-w-[1000px]'>
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt="" className='w-[150px] h-[200px] lg:w-[200px] lg:h-[300px]'/>
            <div className="flex flex-col gap-2 p-[.5rem] lg:gap-6">
                <h3 className='font-semibold text-xs lg:text-[1rem]'>{title}</h3>
                <span className='text-slate-500 text-xs lg:text-[1rem]'>by {authors? authors[0].name || authors[0] : 'Anonymous'}</span>
                <div className="flex gap-1">
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaRegStar className='text-slate-300'/>
                </div>
                <p className='text-slate-700 text-[10px] lg:text-[.9rem]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non explicabo, repellat magni dolor 
                    recusandae tenetur, consequuntur reprehenderit maiores vero 
                </p>
                <button className='bg-blue-600 text-xs text-white w-[70px] rounded-xl lg:text-sm lg:p-1'>Read</button>
            </div>
        </div>
    )
}
