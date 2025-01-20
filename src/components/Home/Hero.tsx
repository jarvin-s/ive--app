import React from 'react'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

// TODO:
//! REMOVED Z-INDEX FROM HERO, NEXT STEP: REVAMP CARDS BELOW HERO & ADD QUIZ(?)

const Hero = () => {
    const selectedLocale = useLocale()
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
                            className='w-full bg-pink-600 text-lg text-white hover:bg-pink-800 md:px-6 md:py-5 md:text-xl'
                        >
                            {selectedLocale === 'en' ? (
                                <Link href='/en/quiz'>{t('quiz_button')}</Link>
                            ) : (
                                <Link href='/kr/quiz'>{t('quiz_button')}</Link>
                            )}
                        </Button>
                        <Button
                            size={'sm'}
                            className='w-full border-2 border-black text-lg text-white hover:bg-black md:px-6 md:py-[18px] md:text-xl'
                        >
                            <Link href='/en/merch'>{t('merch_button')}</Link>
                        </Button>
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
