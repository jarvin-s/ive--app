'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/images/logo.png'

const Navbar = () => {
    const [isClicked, setisClicked] = useState(false)

    const toggleNavbar = () => {
        setisClicked(!isClicked)
    }

    return (
        <>
            <nav className='bg-gray-100'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <a href='/' className='text-4xl '>
                                    {/* <Image
                                        src={logo}
                                        alt='IVE logo'
                                    /> */}
                                    IVE
                                </a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4 text-black'>
                                <a
                                    href='/'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Home
                                </a>
                                <a
                                    href='/yujin'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Yujin
                                </a>
                                <a
                                    href='/wonyoung'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Wonyoung
                                </a>
                                <a
                                    href='/gaeul'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Gaeul
                                </a>
                                <a
                                    href='/rei'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Rei
                                </a>
                                <a
                                    href='/liz'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Liz
                                </a>
                                <a
                                    href='/leeseo'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                                >
                                    Leeseo
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center md:hidden'>
                            <button
                                className='inline-flex items-center justify-center rounded-md border border-white p-2  transition duration-300 hover:bg-black  hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={toggleNavbar}
                            >
                                {isClicked ? (
                                    <div>
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div>
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M4 6h16M4 12h16m-7 6h7'
                                            />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClicked && (
                    <div className='md:hidden'>
                        <div className='space-y-1 px-2 pb-4 pt-3'>
                            <a
                                href='/'
                                className='relative block w-16 cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Home
                            </a>
                            <a
                                href='/yujin'
                                className='relative block w-14 cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Yujin
                            </a>
                            <a
                                href='/wonyoung'
                                className='relative block w-[6rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Wonyoung
                            </a>
                            <a
                                href='/gaeul'
                                className='relative block w-16 cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Gaeul
                            </a>
                            <a
                                href='/rei'
                                className='relative block w-10 cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Rei
                            </a>
                            <a
                                href='/liz'
                                className='relative block w-10 cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Liz
                            </a>
                            <a
                                href='/leeseo'
                                className='relative block w-[4.4rem] cursor-pointer rounded-lg
                                p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Leeseo
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
