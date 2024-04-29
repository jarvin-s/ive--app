import React from 'react'

const Hero = () => {
    return (
        <div
            className='wonyoung-hero flex h-[60vh] justify-end bg-cover bg-no-repeat md:bg-center'
            style={{ backgroundImage: "url('/images/wonyoung/wonyoung-wave.jpg')" }}
        >
            <div className='flex mt-[4rem] flex-col items-end text-end p-[24px] text-red-500 md:pr-[20%]'>
                <h1 className='text-8xl font-black uppercase'>Wonyoung</h1>
                <h2 className='text-6xl'> 원영</h2>
                <p className=' w-full rounded-lg border-4 border-white bg-red-500 p-4 text-right text-white lg:max-w-[500px]'>
                    Jang Won-young, also known mononymously as Wonyoung, is a
                    South Korean singer. She is a member of Ive, a South Korean
                    girl group under Starship Entertainment and former member of
                    project girl group Iz*One, having finished first in
                    Mnet&apos;s girl group survival reality television show
                    Produce 48 in 2018.
                </p>
            </div>
        </div>
    )
}

export default Hero
