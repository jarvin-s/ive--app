'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/ive-main.jpg'
import { motion } from 'framer-motion'

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
                    className='pt-20 flex h-screen w-full bg-pink-950 px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
                    lg:px-16 xl:w-1/3 xl:px-12'
                >
                    <div className='h-100 w-full text-white'>
                        <h1 className='text-6xl font-bold'>IVE 아이브</h1>
                        <h4 className='text-l'>
                            <span className='font-bold text-blue-600'>DIVE INTO IVE</span>: A
                            collection of data, stats and info about IVE!
                        </h4>
                        <div className='relative'>
                            <motion.img
                                className='absolute h-[300px] w-[23vh] rounded'
                                whileHover={{ scale: 1.2, rotate: 4 }}
                                src='/images/wonyoung/wonyoung.jpg'
                            />
                            <motion.img
                                className='absolute h-[300px] w-[23vh] rounded pl-2'
                                whileHover={{ scale: 1.2, rotate: 12 }}
                                src='/images/wonyoung/wonyoung.jpg'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
