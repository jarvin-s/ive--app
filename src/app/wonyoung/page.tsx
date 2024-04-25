import Image from 'next/image'
import React from 'react'

const Wonyoung = () => {
    return (
        <div className='bg-red-600 p-20'>
            <div className='rounded-lg bg-white shadow-2xl md:flex'>
                <Image
                    src='/images/wonyoung.jpg'
                    alt='Boat'
                    className='w-full rounded-l-lg md:w-1/6'
                    width={300}
                    height={200}
                />

                <div className='p-6'>
                    <h2 className='mb-2 text-xl font-bold md:text-4xl'>
                        Jang Won-young | 장원영
                    </h2>
                    <p>
                        Jang Won-young, also known mononymously as Wonyoung, is
                        a South Korean singer. She is a member of Ive, a South
                        Korean girl group under Starship Entertainment and
                        former member of project girl group Iz*One, having
                        finished first in Mnet&apos;s girl group survival reality
                        television show Produce 48 in 2018.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Wonyoung
