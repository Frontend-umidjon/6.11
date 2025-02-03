import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderContact = () => {
    return (
        <div className='bg-[#252B42] h-16 flex items-center max-[1120px]:hidden'>
            <div className='header__container'>
                <div className='text-white font-bold flex items-center justify-between'>
                    <div className='flex gap-5'>
                        <span className='flex gap-1 items-center'><BsTelephone className='text-xl' />(225) 555-0118</span>
                        <span className='flex gap-1 items-center'><MdOutlineMail className='text-xl' />michelle.rivera@example.com</span>
                    </div>
                    <div>
                        <span>Follow Us  and get a chance to win 80% off</span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <span>Follow Us  :</span>
                        </div>
                        <div className='flex gap-2 text-2xl'>
                            <FaInstagram />
                            <FaYoutube />
                            <FaFacebook />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderContact