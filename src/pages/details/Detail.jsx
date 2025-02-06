import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from '@/api';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import HeaderContact from '@/components/headerContact/HeaderContact';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get(`/products/${id}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <>
        
           
            <div className='container'>
                {loading ? (
                    <div className='flex justify-around items-center py-10 animate-pulse'>
                        <div className='bg-gray-300 rounded-lg w-[500px] h-[450px]'></div>
                        <div className='max-w-[510px]'>
                            <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>
                            <div className='flex gap-3 items-center'>
                                <div className='h-4 bg-gray-300 rounded w-1/4'></div>
                                <div className='h-4 bg-gray-300 rounded w-1/5'></div>
                            </div>
                            <div className='h-8 bg-gray-300 rounded w-1/2 mt-5'></div>
                            <div className='h-4 bg-gray-300 rounded w-1/3 mt-2'></div>
                            <div className='h-24 bg-gray-300 rounded mt-8'></div>
                            <hr className='w-full border-[1px] border-gray-300 my-8' />
                            <div className='flex gap-2 mt-3'>
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className='w-8 h-8 rounded-full bg-gray-300'></div>
                                ))}
                            </div>
                            <div className='flex items-center gap-3 mt-16'>
                                <div className='py-[10px] px-5 bg-gray-300 rounded-md w-32 h-10'></div>
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className='py-[10px] px-[10px] rounded-full bg-gray-300 w-10 h-10'></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-around items-center py-10'>
                        <div>
                            <img className='max-w-[500px] max-h-[450px]' src={data?.image} alt={data?.title} />
                        </div>
                        <div className='max-w-[510px]'>
                            <h4 className='text-xl font-medium mb-3'>{data?.title}</h4>
                            <div className='flex gap-3 items-center'>
                                <span className='text-yellow-400 font-bold'>Rate: {data?.rating.rate}</span>
                                <span className='text-[#737373] font-semibold text-sm block'>10 Reviews</span>
                            </div>
                            <p className='text-2xl font-bold mt-5'>${data?.price}</p>
                            <p className='text-sm text-[#737373] font-bold flex gap-2 mt-2'>Availability: <span className='text-sm text-[#23A6F0] font-bold'>{data?.category}</span></p>
                            <p className='mt-8 text-sm text-[#737373] font-medium'>{data?.description}</p>
                            <hr className='w-full border-[1px] border-[#BDBDBD] my-8' />
                            <div className='flex gap-2 mt-3'>
                                <div className='w-8 h-8 rounded-full bg-[#23A6F0]'></div>
                                <div className='w-8 h-8 rounded-full bg-[#23856D]'></div>
                                <div className='w-8 h-8 rounded-full bg-[#E77C40]'></div>
                                <div className='w-8 h-8 rounded-full bg-[#252B42]'></div>
                            </div>
                            <div className='flex items-center gap-3 mt-16'>
                                <button className='py-[10px] px-5 bg-[#23A6F0] rounded-md text-sm font-bold text-white'>Select Options</button>
                                <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid'><FaRegHeart className='text-xl' /></button>
                                <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid'><FiShoppingCart className='text-xl' /></button>
                                <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid'><IoEyeSharp className='text-xl' /></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
           
        </>
    );
};

export default Detail;
