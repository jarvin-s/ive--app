import React from 'react'

const Hero = () => {
    return (
        <div
            className='wonyoung-hero flex h-[70vh] justify-end bg-cover bg-no-repeat md:bg-center'
            style={{ backgroundImage: "url('/images/gaeul/gaeul-wave.jpg')" }}
        >
            <div className='mt-[4rem] flex flex-col items-end p-[24px] text-end text-blue-800 md:pr-[30%]'>
                <h1 className='text-8xl font-black uppercase'>Gaeul</h1>
                <h2 className='text-6xl'> 가을</h2>
                <p className=' w-full rounded-lg border-4 border-white bg-blue-800 p-4 text-right text-white lg:max-w-[500px]'>
                    Gaeul is a South Korean rapper and singer under Starship
                    Entertainment. She is the eldest member of the girl group
                    IVE.
                </p>
            </div>
        </div>
    )
}

export default Hero
