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
            <nav
                className={`absolute ${isClicked ? 'bg-pink-900' : 'bg-transparent'} w-full`}
            >
                <div className='border border-gray-500 bg-pink-900'>
                    <div className='flex h-16 items-center justify-between'>
                        <a className='mr-2 flex-shrink-0 object-cover' href='/'>
                            <Image src={logo} alt='IVE logo' height={45} />
                        </a>
                        {/* <a className='mr-[24rem] lg:text-2xl font-bold text-white flex-none text-sm' href='/'>
                            DIVE INTO IVE
                        </a> */}
                        <div className='hidden md:block'>
                            <div className='text-sm mr-[28rem] flex font-semibold flex-row space-x-4 tracking-wide text-white'>
                                <a
                                    href='/home'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
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
                                <a
                                    href='/gallery/rei'
                                    className='relative block cursor-pointer rounded-lg 
                                    p-2 duration-200 ease-in-out hover:text-black'
                                >
                                    Gallery
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center md:hidden'>
                            <button
                                className={`mr-4 inline-flex items-center justify-center rounded-lg border-2 border-black p-2 ${isClicked ? 'text-white' : ''} transition duration-300 hover:bg-gray-200  hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                                onClick={toggleNavbar}
                            >
                                {isClicked ? (
                                    <div>
                                        <svg
                                            className='h-6 w-6 text-gray-800'
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
                                            className='h-6 w-6 text-gray-800'
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
                        <div className='space-y-1 px-2 pb-4 pt-3 font-bold text-white'>
                            <a
                                href='/home'
                                className='relative block w-[4rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Home
                            </a>
                            <a
                                href='/albums'
                                className='relative block w-[5rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Albums
                            </a>
                            <a
                                href='/postcards'
                                className='relative block w-[6.2rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Postcards
                            </a>
                            <a
                                href='/photocards'
                                className='relative block w-[6.8rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Photocards
                            </a>
                            <a
                                href='/merch'
                                className='relative block w-[4.3rem] cursor-pointer rounded-lg
                                    p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Merch
                            </a>
                            <a
                                href='/gallery'
                                className='relative block w-[4.4rem] cursor-pointer rounded-lg
                                p-2  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                            >
                                Gallery
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
