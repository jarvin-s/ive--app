import React from 'react'

const Hero = () => {
    return (
        <div className='flex h-[75rem] justify-center px-4'>
            <div className='z-[-1] flex h-[100vh] w-[75rem] items-center justify-center rounded-lg bg-[#230202] md:h-[70vh]'>
                <div className='flex flex-col'>
                    <div className='text-6xl font-bold text-white'>
                        <div className='z-[-1] ml-[-48%] inline-block bg-[#AB0957] px-2'>
                            DIVE
                        </div>
                    </div>
                    <div>
                        <div className='text-6xl font-bold text-[#AB0957]'>
                            INTO
                        </div>
                    </div>
                    <div className='text-6xl font-bold text-white'>
                        <div className='z-[-1] ml-[57%] inline-block bg-[#AB0957] px-2'>
                            IVE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
