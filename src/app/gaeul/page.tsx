import Image from 'next/image'
import React from 'react'

const Gaeul = () => {
    return (
        <div className='bg-blue-600 p-20'>
            <div className='rounded-lg bg-white shadow-2xl md:flex'>
                <Image
                    src='/images/gaeul.jpg'
                    alt='Boat'
                    className='w-full md:rounded-l-lg rounded-t-lg md:w-1/6'
                    width={300}
                    height={200}
                />

                <div className='p-6'>
                    <h2 className='mb-2 text-xl font-bold md:text-4xl'>
                        Kim Gaeul | 가을
                    </h2>
                    <p>
                        Gaeul is a South Korean
                        rapper and singer under Starship Entertainment. She is
                        the eldest member of the girl group IVE.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gaeul
