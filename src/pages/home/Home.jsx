import React from 'react'
import Hero from './Hero'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import HeaderContact from './HeaderContact'
import EditorHome from './EditorHome'
import ProductsHome from './ProductsHome'
import SummerHome from './SummerHome'
import FeaturedHome from './FeaturedHome'

export const Home = () => {
    return (
        <>
            <HeaderContact />
            <Header />
            <Hero />
            <EditorHome />
            <ProductsHome />
            <SummerHome />
            <FeaturedHome />
            <Footer />
        </>
    )
}

export default Home