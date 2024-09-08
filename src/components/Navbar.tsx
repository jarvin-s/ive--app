'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/images/logo.png'
import Dropdown from './Dropdown'

const Navbar = () => {
    const [isClicked, setisClicked] = useState(false)

    const toggleNavbar = () => {
        setisClicked(!isClicked)
    }

    return (
        <>
            <nav
                className={`absolute ${isClicked ? 'bg-pink-900' : 'bg-transparent'} w-full`}
            >
                <div className='border-b-[1px] border-gray-200 bg-pink-950'>
                    <div className='flex h-16 items-center justify-between'>
                        <a className='flex md:ml-[20rem]' href='/'>
                            <Image src={logo} alt='IVE logo' height={45} />
                            <span className='mt-2 pl-2 text-2xl font-bold text-white'>
                                <span className='text-pink-600'>DIVE</span> INTO{' '}
                                <span className='text-pink-600'>IVE</span>
                            </span>
                        </a>
                        <div className='hidden md:block'>
                            <div className='mr-[30rem] flex flex-row space-x-2 text-sm font-semibold tracking-wide text-white'>
                                <a
                                    href='/home'
                                    className='relative block cursor-pointer rounded-lg p-2 
                                    duration-200 ease-in-out hover:underline'
                                >
                                    Home
                                </a>
                                <a
                                    href='/albums'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
                                >
                                    Albums
                                </a>
                                <a
                                    href='/postcards'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
                                >
                                    Postcards
                                </a>
                                <a
                                    href='/photocards'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
                                >
                                    Photocards
                                </a>
                                <a
                                    href='/merch'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
                                >
                                    Merch
                                </a>
                                <Dropdown />
                            </div>
                        </div>
                        <div className='flex items-center md:hidden'>
                            <button
                                className={`mr-4 inline-flex items-center justify-center rounded-lg border-2 border-black p-2 ${isClicked ? 'text-white' : ''} transition duration-300 hover:bg-gray-400  hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                                onClick={toggleNavbar}
                            >
                                {isClicked ? (
                                    <div>
                                        <svg
                                            className='h-6 w-6 text-black'
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
                                            className='h-6 w-6 text-black'
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
                    <div className='bg-pink-900 md:hidden'>
                        <div className='space-y-1 px-2 pb-4 pt-3 font-semibold text-white'>
                            <a
                                href='/home'
                                className='relative block w-[4rem] cursor-pointer rounded-lg
                                    p-2  duration-200 ease-in-out hover:text-black'
                            >
                                Home
                            </a>
                            <a
                                href='/albums'
                                className='relative block w-[5rem] cursor-pointer rounded-lg
                                    p-2  duration-200 ease-in-out hover:text-black'
                            >
                                Albums
                            </a>
                            <a
                                href='/postcards'
                                className='relative block w-[6.2rem] cursor-pointer rounded-lg
                                    p-2  duration-200 ease-in-out hover:text-black'
                            >
                                Postcards
                            </a>
                            <a
                                href='/photocards'
                                className='relative block w-[6.8rem] cursor-pointer rounded-lg
                                    p-2  duration-200 ease-in-out hover:text-black'
                            >
                                Photocards
                            </a>
                            <a
                                href='/merch'
                                className='relative block w-[4.3rem] cursor-pointer rounded-lg
                                    p-2  duration-200 ease-in-out hover:text-black'
                            >
                                Merch
                            </a>
                            <Dropdown />
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
