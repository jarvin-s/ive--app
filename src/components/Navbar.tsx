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
            <nav className={`w-full`}>
                <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
                    <a href='/' className='flex items-center space-x-3'>
                        <Image src={logo} alt='IVE logo' height={45} />
                        <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
                            <span className='text-pink-600'>DIVE</span> INTO{' '}
                            <span className='text-pink-600'>IVE</span>
                        </span>
                    </a>
                    <button
                        data-collapse-toggle='navbar-multi-level'
                        type='button'
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 lg:hidden ${isClicked ? 'text-black' : ''}`}
                        aria-controls='navbar-multi-level'
                        aria-expanded={isClicked}
                        onClick={toggleNavbar}
                    >
                        <span className='sr-only'>Open main menu</span>
                        {isClicked ? (
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
                        ) : (
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
                        )}
                    </button>
                    <div
                        className={`${isClicked ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}
                        id='navbar-multi-level'
                    >
                        <ul className='mt-4 flex flex-col border-[1px] border-gray-200 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-none'>
                            <li>
                                <a
                                    href='/home'
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/albums'
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    Albums
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/postcards'
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    Postcards
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/photocards'
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    Photocards
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/merch'
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    Merch
                                </a>
                            </li>
                            <Dropdown />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
