import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Footer from './Components/Footer'

export default function App() {
    return (
        <div className='overflow-x-hidden'>
            <BrowserRouter>
            <div className="w-screen max-w-screen">
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer/>
            </div>
            </BrowserRouter>
        </div>
    )
}
