import React from 'react'

const Hero = () => {
    return (
        <div
            className='leeseo-hero flex h-[60vh] items-center justify-center bg-cover bg-no-repeat md:bg-center '
            style={{
                backgroundImage: `url('/images/leeseo/leeseo-wave.jpg')`,
            }}
        >
            <div className='flex flex-col items-end justify-end p-[24px] text-yellow-300 md:mb-[4%] md:pl-[60%]'>
                <h1 className='text-9xl font-black uppercase'>Leeseo</h1>
                <h2 className='mb-2 text-7xl font-black'>이서</h2>
                <p className='w-full rounded-lg border-4 border-white bg-yellow-300 p-2.5 text-center text-white md:text-right lg:max-w-[500px]'>
                    Leeseo is a South Korean singer under Starship
                    Entertainment. She is the youngest member, or maknae, of the
                    girl group IVE.
                </p>
            </div>
        </div>
    )
}

export default Hero
