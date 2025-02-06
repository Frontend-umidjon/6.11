import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeaderContact from '@/components/headerContact/HeaderContact'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <HeaderContact />
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout