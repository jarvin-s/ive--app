import React from 'react'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { Button } from '../ui/button'
import Link from 'next/link'
import Slider from '../Slider'

const Hero = () => {
    return (
        <>
            <div className='relative mb-20 h-dvh w-screen overflow-x-hidden'>
                <div className='absolute left-20 top-40 z-50'>
                    <h1 className='text-9xl text-white'>
                        IVE{' '}
                        <span className='font-bold text-pink-600'>아이브</span>
                    </h1>
                    <Button>
                        <Link href='/'>
                            <span className='text-white'>
                                <span className='font-bold text-pink-600'>
                                    Watch trailer
                                </span>
                            </span>
                        </Link>
                    </Button>
                    {/* <TextHoverEffect text='IVE'/> */}
                </div>
                <div className='flex min-h-screen items-center justify-center'>
                    <Slider />
                </div>
                {/* IVE SHOWCASE VIDEO (I AM) */}
                <video
                    src='/videos/hero-1.mp4'
                    muted
                    loop
                    autoPlay
                    className='absolute left-0 top-0 z-[-1] size-full object-cover object-center'
                ></video>
            </div>
        </>
    )
}

export default Hero
