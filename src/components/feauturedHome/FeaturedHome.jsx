import React from 'react'
import { FEATURED } from '@/static'
import { LuAlarmClock } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { FcNext } from "react-icons/fc";

const FeaturedHome = () => {
    return (
        <div className='py-28'>
            <div className='container'>
                <div className='text-center max-w-[469px] mx-auto mb-20'>
                    <span className='text-[#23A6F0] text-sm font-bold mb-3'>Practice Advice</span>
                    <h3 className='text-[40px] font-bold mb-3'>Featured Posts</h3>
                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:text-center'>
                        {
                            FEATURED?.map((item, inx) => (
                                <div className='shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]' key={inx}>
                                    <img className='max-md:mx-auto' src={item.img} alt={item.title} />
                                    <div className='py-6 px-6'>
                                        <div className='flex gap-4 text-xs font-medium max-md:justify-center'>
                                            <span className='text-[#8EC2F2]'>Google</span>
                                            <span className='text-[#737373]'>Trending</span>
                                            <span className='text-[#737373]'>New</span>
                                        </div>
                                        <h4 className='text-xl font-medium py-3'>{item.title}</h4>
                                        <p className='text-[#737373] text-sm font-medium'>{item.desc}</p>
                                        <div className='mt-6'>
                                            <div className='flex items-center justify-between'>
                                                <span className='flex items-center gap-2 text-xs text-[#737373] font-medium'><LuAlarmClock className='text-base text-[#23A6F0]' />{item.date}</span>
                                                <span className=' flex items-center gap-2 text-[#737373] font-medium  text-xs'><ImStatsBars className='text-[#23856D]' />{item.comment}</span>
                                            </div>
                                            <button className='text-[#737373] text-sm font-semibold mt-3 flex items-center gap-2'>Learn More <FcNext className='text-xl' /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedHome