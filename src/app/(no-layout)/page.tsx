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
                    className='flex h-screen w-full bg-pink-950 px-6 pt-20 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
                    lg:px-16 xl:w-1/3 xl:px-12'
                >
                    <div className='h-100 w-full text-white'>
                        <h1 className='text-6xl font-bold'>IVE 아이브</h1>
                        <h4 className='text-l'>
                            <span className='font-bold text-blue-600'>
                                DIVE INTO IVE
                            </span>
                            : A collection of data, stats and info about IVE!
                        </h4>
                        <div className='flex flex-row'>
                            <motion.img
                                className='big-card h-[300px] w-[23vh] origin-bottom'
                                whileHover={{ scale: 1.2 }}
                                src='/images/wonyoung/wonyoung.jpg'
                            />
                            <motion.img
                                className='big-card h-[300px] w-[23vh] origin-bottom'
                                whileHover={{ scale: 1.2 }}
                                src='/images/rei/rei.png'
                            />
                        </div>
                        <div className='flex flex-row'>
                            <motion.img
                                className='big-card h-[300px] w-[23vh] opacity-95'
                                whileHover={{ scale: 1.2 }}
                                src='/images/leeseo/leeseo.png'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
