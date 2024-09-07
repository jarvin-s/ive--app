import React from 'react'

const Hero = () => {
    return (
        <div
            className='liz-hero flex h-[60vh] items-center justify-center bg-cover bg-no-repeat md:bg-center '
            style={{
                backgroundImage: `url('/images/liz/liz-wave.jpg')`,
            }}
        >
            <div className='flex flex-col justify-end items-end p-[24px] text-cyan-400 md:pl-[60%] md:mb-[4%]'>
                <h1 className='text-9xl font-black uppercase'>Liz</h1>
                <h2 className='mb-2 text-7xl font-black'>리즈</h2>
                <p className='w-full rounded-lg border-4 border-white bg-cyan-400 p-2.5 text-center text-white md:text-right lg:max-w-[500px]'>
                    Liz is a singer and a dancer under Starship
                    Entertainment. She debuted as a member of the girl group IVE
                    on December 1, 2021 with their single album ELEVEN.
                </p>    
            </div>
        </div>
    )
}

export default Hero
