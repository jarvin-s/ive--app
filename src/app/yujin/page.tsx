import Image from 'next/image'
import React from 'react'

const ImageWithText = () => {
    return (
        <div className='flex h-screen items-center justify-center overflow-hidden border-2 border-red-400'>
            <div className='mr-[20rem] text-center'>
                <Image
                    className='rounded-lg'
                    src='/images/yujin.jpg'
                    alt='Image'
                    width={300}
                    height={200}
                />
            </div>
            <div className='text-left text-4xl'>
                <p>An Yujin </p>
            </div>
        </div>
    )
}

export default ImageWithText
