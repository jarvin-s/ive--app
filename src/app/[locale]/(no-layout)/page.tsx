'use client'

import Image from 'next/image'
import React from 'react'
import main from '/public/images/ive-main.png'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const Home = () => {
    const t = useTranslations('index')

    return (
        <>
            <section className='flex h-screen flex-col items-center md:flex-row'>
                <div className='hidden h-screen w-full md:w-1/2 lg:block xl:w-2/3'>
                    <Image
                        className='h-full w-full'
                        alt={'IVE main'}
                        src={main}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
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
                                {t('description')}
                            </span>
                        </h4>
                        <a href='/en/home'>
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
                        <div className='group relative ml-[5rem] w-3/12 gap-2 pt-4 md:ml-[2rem] md:w-4/12 xl:ml-[6rem]'>
                            <motion.img
                                className='big-card absolute z-10  rotate-[5deg] opacity-95 duration-[400ms] ease-in-out group-hover:translate-x-[4rem] group-hover:rotate-[15deg] md:group-hover:translate-x-[10rem] md:group-hover:translate-y-12'
                                src='/images/rei/rei.png'
                            />
                            <motion.img
                                className='big-card absolute z-[11] opacity-95 duration-[400ms] ease-in-out group-hover:-translate-y-2 md:group-hover:translate-y-7'
                                src='/images/leeseo/leeseo.png'
                            />
                            <motion.img
                                className='big-card absolute z-[12] rotate-[-5deg] opacity-95 duration-[400ms] ease-in-out group-hover:-translate-x-[4rem] group-hover:translate-y-2 group-hover:rotate-[-18deg] md:group-hover:-translate-x-[10rem] md:group-hover:translate-y-[3.5rem]'
                                src='/images/wonyoung/wonyoung.jpg'
                            />
                        </div>
                        <div className='group relative ml-[12rem] w-3/12 gap-2 md:ml-[13rem] md:w-4/12 xl:ml-[23rem]'>
                            <motion.img
                                className='big-card absolute rotate-[8deg] opacity-95 duration-[400ms] ease-in-out group-hover:translate-x-[4rem] group-hover:rotate-[20deg] md:group-hover:translate-x-[7.6rem] md:group-hover:translate-y-10'
                                src='/images/liz/liz.png'
                            />
                            <motion.img
                                className='big-card absolute opacity-95 duration-[400ms] ease-in-out group-hover:-translate-y-2 md:group-hover:translate-y-5'
                                src='/images/yujin/yujin.jpg'
                            />
                            <motion.img
                                className='big-card absolute rotate-[-5deg] opacity-95 duration-[400ms] ease-in-out group-hover:z-[13] group-hover:-translate-x-[4rem] group-hover:rotate-[-12deg] md:group-hover:-translate-x-[10rem] md:group-hover:translate-y-10'
                                src='/images/gaeul/gaeul.jpg'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
