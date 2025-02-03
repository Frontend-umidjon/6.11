import React from 'react';
import HeroBg from '@/assets/Hero.png';

export const Hero = () => {
    return (

        <div style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover', height: '716px' }} className='max-md:bg-bottom max-[500px]:bg-center'>
            <div className='container'>
                <div className='flex justify-center flex-col h-[716px] max-md:text-center'>
                    <div className='text-white '>
                        <span className='font-bold'>SUMMER 2020</span>
                        <h2 className='text-[58px] font-bold py-9 max-sm:text-[40px]'>NEW COLLECTION</h2>
                        <p className='max-w-[376px] text-xl pb-9 max-md:mx-auto'>We know how large objects will act,
                            but things on a small scale.</p>
                        <button className='py-4 px-10 rounded-[5px] text-2xl font-bold bg-[#2DC071]'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
