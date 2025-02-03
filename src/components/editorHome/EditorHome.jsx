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
                <div className='h-[500px]  grid grid-cols-2 self-center gap-8 mt-12 max-[950px]:grid-cols-1 max-[950px]:h-auto '>
                    <div style={{ backgroundImage: `url(${Editor1})`, backgroundSize: 'cover', height: '500px' }}>
                        <div className='flex  items-end h-full p-7'>
                            <button className='py-3 px-16 bg-white font-bold'>Men</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-8 self-center max-[500px]:grid-cols-1'>
                        <div style={{ backgroundImage: `url(${Editor2})`, backgroundSize: 'cover', height: '500px' }}>
                            <div className='flex  items-end h-full p-7'>
                                <button className='py-3 px-16 bg-white font-bold'>WOMEN</button>
                            </div>
                        </div>
                        <div className='grid gap-4 self-center '>
                            <div style={{ backgroundImage: `url(${Editor3})`, backgroundSize: 'cover', height: '240px', }}>
                                <div className='flex  items-end h-full p-5'>
                                    <button className='py-3 px-6 bg-white font-bold'>ACCESSORIES</button>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${Editor4})`, backgroundSize: 'cover', height: '240px' }}>
                                <div className='flex  items-end h-full p-5'>
                                    <button className='py-3 px-14 bg-white font-bold'>KIDS</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorHome