import Link from 'next/link'
import React from 'react'

const Cards = () => {
    return (
        <div className='grid gap-4 px-4 py-20 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='relative flex animate-small-bounce flex-col items-center'>
                <Link href='/photocards' passHref legacyBehavior>
                    <img
                        src='/images/photocard/main.png'
                        alt='Photocards'
                        className='z-10 cursor-pointer rounded-lg border-2 duration-300 hover:bg-pink-800 md:h-[22vw] lg:h-[18vw]'
                    />
                </Link>
                <div className='relative top-4 z-10 p-2 pr-3 text-4xl font-bold uppercase text-white'>
                    <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 justify-center bg-pink-800 p-8'></span>
                    Photocards
                </div>
            </div>
            <div className='relative flex animate-small-bounce flex-col items-center'>
                <Link href='/gallery/rei' passHref legacyBehavior>
                    <img
                        src='/images/gallery/main.jpg'
                        alt='Gallery'
                        className='z-10 cursor-pointer rounded-lg border-2 duration-300 hover:bg-pink-800 md:h-[22vw] lg:h-[18vw]'
                    />
                </Link>
                <div className='relative top-4 z-10 pb-3 pl-1 pr-3 pt-1 text-4xl font-bold uppercase text-white'>
                    <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 bg-pink-800'></span>
                    Gallery
                </div>
            </div>
            <div className='relative flex animate-small-bounce flex-col items-center'>
                <Link href='/merch' passHref legacyBehavior>
                    <img
                        src='/images/merch/main.jpg'
                        alt='Merch'
                        className='z-10 cursor-pointer rounded-lg border-2 p-2 duration-300 hover:bg-pink-800 md:h-[18vw] md:w-[14vw] md:p-0'
                    />
                </Link>
                <div className='relative top-4 z-10 pb-3 pl-1 pr-3 pt-1 text-4xl font-bold uppercase text-white'>
                    <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 bg-pink-800'></span>
                    Merch
                </div>
            </div>
        </div>
    )
}

export default Cards
