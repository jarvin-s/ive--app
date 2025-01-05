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
                <div className='absolute left-20 top-40'>
                    <h1 className='text-9xl text-white'>
                        IVE{' '}
                        <span className='font-bold text-pink-600'>아이브</span>
                    </h1>
                    <Button>
                        {selectedLocale === 'en' ? (
                            <Link href='/en/quiz'>
                                <span className='text-white'>
                                    <span className='font-bold text-pink-600'>
                                        {t('quiz_button')}
                                    </span>
                                </span>
                            </Link>
                        ) : (
                            <Link href='/kr/quiz'>
                                <span className='text-white'>
                                    <span className='font-bold text-pink-600'>
                                        {t('quiz_button')}
                                    </span>
                                </span>
                            </Link>
                        )}
                    </Button>
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
