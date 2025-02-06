import React from 'react'
import "@/App.css"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import { Blog } from '@/pages/blog/Blog'
import Contact from '@/pages/contact/Contact'
import NotFound from '@/pages/notFound/NotFound'
import Detail from '../pages/details/Detail'
import Layout from '@/pages/layout/Layout'
import Wishlist from '@/pages/wishlist/Wishlist'

function MainRoutuer() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>  }>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:id' element={<Detail />} />
                <Route path='/wishlist' element={<Wishlist />} />

                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default MainRoutuer
