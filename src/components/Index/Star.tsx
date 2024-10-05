import Image from 'next/image'
import React from 'react'

const Star = () => {
    return (
        <>
            <div className='absolute bottom-[20px] right-[44rem] -rotate-[16deg]'>
                <Image
                    className='h-auto w-[50px] opacity-30'
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
