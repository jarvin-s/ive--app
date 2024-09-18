import React from 'react'

const Hero = () => {
    return (
        <div className='relative h-[50rem] font-bold'>
            <div className='absolute left-[40%] top-[12%] px-4 text-6xl text-white'>
                <span className='absolute -left-1 -right-1 z-[-1] h-full w-full bg-black'></span>
                DIVE
            </div>
            <div>
                <span className='absolute left-[45%] top-[20%] text-6xl text-[#AB0957]'>
                    INTO
                </span>
            </div>
            <div className='absolute left-[50%] top-[28%] px-4 text-6xl text-white'>
                <span className='absolute -left-1 -right-1 z-[-1] h-full w-full bg-black'></span>
                IVE
            </div>
        </div>
    )
}

export default Hero
