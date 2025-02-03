import React from 'react'
import Summer from "@/assets/Summer.png"

const SummerHome = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex items-center justify-between max-[950px]:flex-col-reverse'>
                    <div>
                        <img src={Summer} alt="" />
                    </div>
                    <div className='max-[950px]:text-center'>
                        <span className='text-[#BDBDBD] mb-8'>SUMMER 2020</span>
                        <h2 className='text-[40px] font-bold max-[414px]:text-[40px]'>Part of the Neural
                            Universe</h2>
                        <p className='text-xl text-[#737373] py-8 font-medium max-w-[376px] max-[950px]:mx-auto'>We know how large objects will act,
                            but things on a small scale.</p>
                        <div className='flex gap-[10px] max-[950px]:justify-center mb-6 max-[500px]:text-[40px]'>
                            <button className='py-4 px-10 max-[404px]:px-6 max-[404px]:py-3 bg-[#2DC071] text-sm font-bold rounded-md text-white'>BUY NOW</button>
                            <button className='py-4 px-10 max-[404px]:px-6 max-[404px]:py-3 bg-inherit text-sm font-bold rounded-md text-[#2DC071] border-[#2DC071] border-2 border-solid'>READ MORE</button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SummerHome