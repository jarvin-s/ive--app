'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../public/images/logo.png'
import Dropdown from './Dropdown'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
    const [isClicked, setisClicked] = useState(false)
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const t = useTranslations('navbar')

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    const toggleNavbar = () => {
        setisClicked(!isClicked)
    }

    // Old navbar colour rgba(58,21,47,0.78)
    return (
        <>
            <nav className={`border-bg sticky top-0 z-10 w-full bg-pink-950`}>
                <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2'>
                    <a href='/' className='flex items-center space-x-3'>
                        <Image
                            src={logo}
                            alt='IVE logo'
                            width={0}
                            height={45}
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                        />
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
                        <ul className='mt-4 flex flex-col border-[1px] border-gray-200 p-2 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-none'>
                            <li>
                                <a
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/home'
                                            : '/kr/home'
                                    }
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    {t('nav.home')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/albums'
                                            : '/kr/albums'
                                    }
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    {t('nav.albums')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/postcards'
                                            : '/kr/postcards'
                                    }
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    {t('nav.postcards')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/photocards'
                                            : '/kr/photocards'
                                    }
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    {t('nav.photocards')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/merch'
                                            : '/kr/merch'
                                    }
                                    className='block rounded px-3 py-2 text-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-white md:hover:underline'
                                >
                                    {t('nav.merch')}
                                </a>
                            </li>
                            <Dropdown />
                            <LanguageSwitcher />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
