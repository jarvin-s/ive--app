'use client'

import Image from 'next/image'
import React from 'react'
import main from '../../../public/images/ive-main.png'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <section className='flex h-screen flex-col items-center md:flex-row'>
                <div className='hidden h-screen w-full md:w-1/2 lg:block xl:w-2/3'>
                    <Image
                        className='h-full w-full'
                        alt={'IVE main'}
                        src={main}
                    />
                </div>
                <div
                    className='flex h-screen w-full bg-pink-950 px-6 pt-20 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
                    lg:px-16 xl:w-1/2 xl:px-12'
                >
                    <div className='h-100 w-full text-center text-white'>
                        <h1 className='text-4xl font-bold'>
                            IVE 아이브 |{' '}
                            <span className='text-pink-600'>DIVE</span> INTO{' '}
                            <span className='text-pink-600'>IVE</span>
                        </h1>
                        <h4 className='text-l'>
                            <span className='opacity-80'>
                                A collection of data, stats and info about IVE.
                            </span>
                        </h4>
                        <a href='/home'>
                            <button
                                type='button'
                                className='my-2 inline-flex w-full items-center justify-center rounded-lg border-2 bg-pink-600 px-2 py-2 text-sm
                                text-white duration-300 ease-in-out hover:bg-pink-400 disabled:pointer-events-none disabled:opacity-50 md:w-2/3'
                            >
                                Go to IVE collection
                                <svg
                                    className='size-4 flex-shrink-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                >
                                    <path d='M5 12h14'></path>
                                    <path d='m12 5 7 7-7 7'></path>
                                </svg>
                            </button>
                        </a>
                        <div className='group relative gap-2 p-2'>
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] rotate-[14deg] opacity-95 duration-300 ease-in-out group-hover:translate-x-12'
                                src='/images/wonyoung/wonyoung.jpg'
                            />
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] rotate-[-5deg] opacity-95 duration-300 ease-in-out group-hover:-translate-x-20 group-hover:rotate-[-18deg]'
                                src='/images/rei/rei.png'
                            />
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] opacity-95 duration-300 ease-in-out group-hover:translate-x-10'
                                src='/images/leeseo/leeseo.png'
                            />
                        </div>
                        {/* <div className='relative gap-2 p-2 sm:static sm:flex sm:flex-row'>
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] opacity-95 sm:static sm:block'
                                src='/images/liz/liz.png'
                                whileHover={{
                                    scale: 1.1,
                                }}
                            />
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] opacity-95 sm:static sm:block'
                                src='/images/yujin/yujin.jpg'
                                whileHover={{
                                    scale: 1.1,
                                }}
                            />
                            <motion.img
                                className='big-card absolute h-[300px] w-[23vh] opacity-95 sm:static sm:block'
                                src='/images/gaeul/gaeul.jpg'
                                whileHover={{
                                    scale: 1.1,
                                }}
                            />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
