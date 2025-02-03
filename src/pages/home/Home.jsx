import React from 'react'
import Hero from '../../components/hero/Hero'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import HeaderContact from '../../components/headerContact/HeaderContact'
import EditorHome from '../../components/editorHome/EditorHome'
import ProductsHome from '../../components/productsHome/ProductsHome'
import SummerHome from '../../components/summerHome/SummerHome'
import FeaturedHome from '../../components/feauturedHome/FeaturedHome'

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