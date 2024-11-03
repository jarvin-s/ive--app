import Image from 'next/image'
import React from 'react'

const Star = () => {
    return (
        <>
            <div className='absolute right-[30rem] top-[20px] -rotate-[16deg]'>
                <Image
                    className='h-auto w-[50px] opacity-20'
                    src='/icons/star.svg'
                    width={0}
                    height={0}
                    alt='Yellow star'
                />
            </div>
            <div className='absolute right-[26rem] top-[16px]'>
                <Image
                    className='h-auto w-[50px] opacity-40'
                    src='/icons/star.svg'
                    width={0}
                    height={0}
                    alt='Yellow star'
                />
            </div>
            <div className='absolute right-[22rem] top-[22px] rotate-[16deg]'>
                <Image
                    className='h-auto w-[50px] opacity-60'
                    src='/icons/star.svg'
                    width={0}
                    height={0}
                    alt='Yellow star'
                />
            </div>
        </>
    )
}

export default Star
