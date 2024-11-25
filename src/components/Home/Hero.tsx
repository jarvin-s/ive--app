import Image from 'next/image'
import img from '../../../public/images/gallery/card-image.jpg'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative h-[100vh]'>
            <div className='mx-auto mb-[30rem] flex max-w-7xl justify-center px-4'>
                <div className='mt-6 flex bg-[rgb(0,0,0,0.85)] px-4 py-4'>
                    <div className='text-9xl font-bold text-[#AB0957] md:text-left text-center'>
                        DIVE{' '}
                        <span className='text-9xl font-bold text-white'>
                            INTO{' '}
                        </span>
                        IVE
                    </div>
                </div>
                {/* <p className='mt-12 text-white'>
                        Explore their journey, achievements, and more
                    </p> */}
            </div>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-[-1]'>
                <Image
                    className='h-full w-full object-cover'
                    src={img}
                    alt='IVE hero image'
                    width={0}
                    height={0}
                />
            </div>
        </div>
    )
}

export default Hero
