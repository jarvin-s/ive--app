import Image from 'next/image'
import React from 'react'

const Hearts = () => {
    return (
        <>
            <div className='absolute right-[12px] top-[20px] animate-heart-bounce opacity-80 md:right-[52px]'>
                <Image
                    src='/icons/red-heart.svg'
                    width={0}
                    height={0}
                    alt='Red heart'
                    className='h-auto w-full'
                />
            </div>
            <div className='absolute hidden xl:block top-[16rem] -rotate-[45deg] opacity-20 md:right-[40rem] md:w-[100px]'>
                <Image
                    src='/icons/finger-heart.svg'
                    width={0}
                    height={0}
                    alt='Finger heart'
                    className='h-auto w-full'
                />
            </div>
        </>
    )
}

export default Hearts
