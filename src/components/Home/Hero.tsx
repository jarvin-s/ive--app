import React from 'react'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import SignOut from '../Auth/SignOut'

// TODO:
//! REMOVED Z-INDEX FROM HERO, NEXT STEP: REVAMP CARDS BELOW HERO & ADD QUIZ(?)

const Hero = () => {
    const currentLocale = useLocale()
    const t = useTranslations('index')

    return (
        <>
            <div className='relative mb-20 h-dvh w-screen overflow-x-hidden'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-5xl text-white md:text-9xl'>
                        IVE{' '}
                        <span className='font-bold text-pink-600'>아이브</span>
                    </h1>
                    <div className='mt-4 flex flex-col items-center gap-4 md:flex-row'>
                        <Button
                            size={'sm'}
                            className='text-md w-full border-b-4 border-pink-900 bg-pink-700 gap-1 text-white transition-all duration-150 hover:translate-y-[2px] hover:border-none hover:bg-pink-800 md:px-6 md:py-5 md:text-xl'
                        >
                            <Link href={`/${currentLocale}/dashboard`}>
                                {t('quiz_button')}
                            </Link>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M10 21v-8.25H3V21zm2 0h9v-8.25h-9zM3 10.75h18V3H3z'
                                />
                            </svg>
                        </Button>
                        <Button
                            size={'sm'}
                            className='text-md w-full border-b-4 border-[#2a2a2a] bg-black text-white transition-all duration-150 hover:translate-y-[2px] hover:border-none md:px-6 md:py-5 md:text-xl'
                        >
                            <Link href='/en/merch'>{t('merch_button')}</Link>
                        </Button>
                        <SignOut />
                    </div>
                    {/* <TextHoverEffect text='IVE'/> */}
                </div>
                {/* IVE SHOWCASE VIDEO (I AM) */}
                <video
                    src='/videos/hero-1.mp4'
                    muted
                    loop
                    autoPlay
                    className='absolute left-0 top-0 z-[-1] size-full object-cover object-center'
                ></video>
            </div>
        </>
    )
}

export default Hero
