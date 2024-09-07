import React from 'react'

const Hero = () => {
    return (
        <div
            className='rei-hero flex h-[60vh] items-center justify-center bg-cover bg-no-repeat md:bg-center '
            style={{
                backgroundImage: `url('/images/rei/rei-wave.jpg')`,
            }}
        >
            <div className='flex flex-col items-end justify-end p-[24px] text-green-500 md:mb-[4%] md:pl-[60%]'>
                <h1 className='text-9xl font-black uppercase'>Rei</h1>
                <h2 className='mb-2 text-7xl font-black'>레이</h2>
                <p className='w-full rounded-lg border-4 border-white bg-green-500 p-2.5 text-center text-white md:text-right lg:max-w-[500px]'>
                    Rei (레이) is a Japanese rapper, singer and songwriter under
                    Starship Entertainment. She debuted as a member of the girl
                    group IVE on December 1, 2021 with their single album
                    ELEVEN. Starship Entertainment: Jan 1, 2021-present.
                </p>
            </div>
        </div>
    )
}

export default Hero
