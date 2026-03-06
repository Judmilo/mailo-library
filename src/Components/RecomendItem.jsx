import React from 'react'

export default function RecomendItem({ cover, title, author }) {
    return (
        <div className='flex gap-2'>
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt="" className='w-[60px] h-[70px]' />
            <div className="flex flex-col gap-4 text-[.8rem]">
                <h3 className='font-semibold w-[150px]'>{title}</h3>
                <span className='text-slate-500'>by {author ? author[0] : ''}</span>
            </div>
        </div>
    )
}
