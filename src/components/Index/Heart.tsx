import Image from 'next/image'
import React from 'react'

const Hearts = () => {
    return (
        <>
            <div className='animate-heart-bounce absolute right-[52px] top-[20px] opacity-40'>
                <Image
                    src='/icons/red-heart.svg'
                    width={0}
                    height={0}
                    alt='Red heart'
                    className='h-auto w-full'
                />
            </div>
            <div className='absolute bottom-0 right-[52px] w-[100px] opacity-20'>
                <Image
                    src='/icons/finger-heart.svg'
                    width={0}
                    height={0}
                    alt='Pink heart'
                    className='h-auto w-full'
                />
            </div>
        </>
    )
}

export default Hearts
