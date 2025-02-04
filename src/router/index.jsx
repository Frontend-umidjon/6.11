import React from 'react'
import "@/App.css"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import { Blog } from '@/pages/blog/Blog'
import Contact from '@/pages/contact/Contact'
import NotFound from '@/pages/notFound/NotFound'
import Detail from '../pages/details/Detail'

function MainRoutuer() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/product/:id' element={<Detail />} />
            </Routes>
        </>
    )
}

export default MainRoutuer
