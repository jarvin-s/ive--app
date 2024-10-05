'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const t = useTranslations('404')
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-center p-4 text-center md:text-left'>
            <div className='rounded-lg border-b-4 border-pink-500 bg-stone-900 p-10'>
                <h1 className='mb-4 text-5xl font-bold text-pink-600'>
                    {t('title')}
                </h1>
                <Image
                    className='w-full'
                    src='/images/gaeul/gaeul-sad.gif'
                    alt='Gaeul sad GIF'
                    width={0}
                    height={0}
                />
                <p className='mb-6 pt-4 text-center text-lg text-white'>
                    {t('description')}
                </p>
                <div className='flex justify-center space-x-2'>
                    <a
                        onClick={handleGoBack}
                        className='flex cursor-pointer items-center gap-2 rounded-lg bg-white px-6 py-3 transition-all duration-300 ease-in-out hover:bg-gray-200'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='currentColor'
                                d='m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z'
                            />
                        </svg>
                        {t('back')}
                    </a>
                    <Link href='/' legacyBehavior>
                        <a className='rounded-lg bg-pink-500 px-6 py-3 text-center text-white transition-all duration-300 ease-in-out hover:bg-pink-600'>
                            {t('home')}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
