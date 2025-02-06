import React from 'react'
import Editor1 from '@/assets/Editor1.png'
import Editor2 from '@/assets/Editor2.png'
import Editor3 from '@/assets/Editor3.png'
import Editor4 from '@/assets/Editor4.png'

const EditorHome = () => {
    return (
        <div className='py-20'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold text-[#252B42]'>EDITOR’S PICK</h3>
                    <p className='text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>
                <div className='grid grid-cols-4 gap-[15px]  '>
                    <div  style={{backgroundImage:`url(${Editor1})`,backgroundSize:'cover' , backgroundPosition:'center' } } className='border min-h-[242px] row-start-1 row-end-3  col-start-1 col-end-3    flex items-end justify-start'>
                        <button className='mb-[31px] ml-[16px]  border-transparent  py-4 px-8 bg-white uppercase text-[#252B42] font-[700] block items-end  hover:bg-transparent hover:text-white border-white  hover__effect '>Men</button>
                    </div>
                    <div  style={{backgroundImage:`url(${Editor2})`,backgroundSize:'cover' , backgroundPosition:'center' } } className='border min-h-[242px] row-start-1 row-end-3  flex items-end justify-start'>
                        <button className='mb-[31px] ml-[16px]  border-transparent  py-4 px-8 bg-white uppercase text-[#252B42] font-[700] block items-end  hover:bg-transparent hover:text-white border-white  hover__effect '>woMen</button>
                    </div>
                    <div  style={{backgroundImage:`url(${Editor3})`,backgroundSize:'cover' , backgroundPosition:'center' } } className='border min-h-[242px]  flex items-end justify-start'>
                        <button className='mb-[31px] ml-[16px]  border-transparent  py-4 px-8 bg-white uppercase text-[#252B42] font-[700] block items-end  hover:bg-transparent hover:text-white border-white  hover__effect '>Accessories</button>
                    </div>
                    <div  style={{backgroundImage:`url(${Editor4})`,backgroundSize:'cover' , backgroundPosition:'center' } } className='border min-h-[242px]  flex items-end justify-start'>
                        <button className='mb-[31px] ml-[16px]  border-transparent  py-4 px-8 bg-white uppercase text-[#252B42] font-[700] block items-end  hover:bg-transparent hover:text-white border-white  hover__effect '>Kids</button>
                    </div>
                </div> 
            </div>
        </div>
    ) 
}

export default EditorHome