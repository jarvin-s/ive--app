import React from 'react'

const Hero = () => {
    return (
        <div
            className='yujin-hero flex h-[60vh] items-center justify-center bg-cover bg-no-repeat md:bg-center '
            style={{
                backgroundImage: `url('/images/yujin/yujin-wave.jpg')`,
            }}
        >
            <div className='flex w-[1216px] flex-col items-end p-[24px] text-pink-500 md:pr-[30%]'>
                <h1 className='text-9xl font-black uppercase'>Yujin</h1>
                <h2 className='text-7xl font-black mb-2'>유진</h2>
                <p className='w-full rounded-lg border-4 border-white bg-pink-500 p-2.5 text-center md:text-right text-white lg:max-w-[500px]'>
                    An Yu-jin, known mononymously as Yujin, is a South Korean
                    singer. She is the leader of the South Korean girl group IVE
                    under Starship Entertainment and a former member of South
                    Korean-Japanese girl group Iz*One.
                </p>
            </div>
        </div>
    )
}

export default Hero
