import React from 'react'
import SiteLogo from '@/assets/SiteLogo.svg'
import { NavLink } from "react-router-dom";
import { FOOTERLINK } from '@/static';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='flex justify-between bg-[#FAFAFA] px-[240px] py-10 max-lg:flex-col max-lg:py-3 max-lg:px-3'>
                    <NavLink to={"/"}>
                        <img src={SiteLogo} alt="" />
                    </NavLink>
                    <div className='flex gap-5 text-[#23A6F0] text-xl max-lg:mt-3'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
                <hr className='max-w-[1057px] m-auto h-[2px] text-[#E6E6E6] mb-12' />


                <div className='container'>
                    <nav className='flex justify-between gap-10 max-lg:flex-col'>

                        <ul className='flex gap-[88px] max-lg:gap-5 max-lg:justify-between  max-sm:flex-col '>
                            {
                                FOOTERLINK?.map((item, inx) => (
                                    <div key={inx} className=''>
                                        <h3 className='font-bold'>{item.title}</h3>
                                        <ul className='mt-5'>
                                            {item.link.map((link, linkIndex) => (
                                                <li className='mb-2  font-bold' key={linkIndex}>
                                                    <span className='text-sm text-[#737373]'>{link}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }
                        </ul>
                        <div className='max-w-[321px] w-full'>
                            <h3 className='font-bold mb-5'>Get In Touch</h3>
                            <form action="" className='flex items-center relative'>
                                <input className='w-full bg-[#F9F9F9] border-2 border-[#EBF0F94D] py-5 px-5 rounded rounded-r-none border-r-0 focus:outline-[#23A6F0]' type="email" placeholder='Your email' />
                                <button className='bg-[#23A6F0] border-2 border-white text-white py-5 px-5 rounded mr-1 absolute right-[-5px]'>Subscribe</button>
                            </form>
                            <p className='text-[#737373] text-xs font-medium mt-2'>Lore imp sum dolor Amit</p>
                        </div>
                    </nav>
                </div>
                <div className='bg-[#FAFAFA] px-[240px] py-6 max-lg:py-3 max-lg:px-3 max-lg:text-center'>
                    <span className='text-[#737373] font-bold text-[14px]'>Made With Love By Finland All Right Reserved </span>
                </div>
            </footer>
        </>
    )
}

export default Footer