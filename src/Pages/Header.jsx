import React from 'react'
import Banner from '../Components/Banner'
import NavBar from '../Components/NavBar'
import Genres from '../Components/Genres'

export default function Header() {
    return (
        <div className='w-full max-w-full'>
            <NavBar/>
            <Banner/>
            <Genres/>
        </div>
    )
}
