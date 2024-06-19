import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/ive-main.jpg'

const Home = () => {
    return (
        <>
            <section className='flex h-screen flex-col items-center md:flex-row'>
                <div className='hidden h-screen w-full md:w-1/2 lg:block xl:w-2/3'>
                    <Image
                        className='h-full w-full object-cover'
                        alt={'IVE main'}
                        src={logo}
                    />
                </div>

                <div
                    className='flex h-screen w-full items-center justify-center bg-white px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
                    lg:px-16 xl:w-1/3 xl:px-12'
                >
                    <div className='h-100 w-full'>
                        <h1 className='text-4xl font-bold'>IVE 아이브</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
