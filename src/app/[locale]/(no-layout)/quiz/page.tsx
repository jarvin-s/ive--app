'use client'

import React from 'react'
import { Anton } from 'next/font/google'
import { useTranslations } from 'next-intl'
import QuizButton from '@/components/Quiz/QuizButton'

const anton = Anton({ subsets: ['latin'], weight: ['400'] })

const Quiz = () => {
    const t = useTranslations('quiz')

    return (
        <div className='flex min-h-screen flex-col items-center bg-stone-950 px-6 pt-20'>
            <div className='w-full text-center text-white'>
                <h1 className={`${anton.className} text-4xl font-bold`}>
                    ✨ IVE Quiz ✨
                </h1>
                <h4 className='mt-4 text-lg opacity-80'>{t('description')}</h4>

                <div className='mt-8'>
                    <QuizButton />
                </div>

                <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='rounded-lg border border-pink-600 p-6'>
                        <h3 className='text-xl font-semibold text-pink-600'>
                            {t('categories')}
                        </h3>
                        <p className='mt-2 text-sm opacity-80'>
                            {t('categories_description')}
                        </p>
                    </div>
                    <div className='rounded-lg border border-pink-600 p-6'>
                        <h3 className='text-xl font-semibold text-pink-600'>
                            {t('score')}
                        </h3>
                        <p className='mt-2 text-sm opacity-80'>
                            {t('score_description')}
                        </p>
                    </div>
                    <div className='rounded-lg border border-pink-600 p-6'>
                        <h3 className='text-xl font-semibold text-pink-600'>
                            {t('learn')}
                        </h3>
                        <p className='mt-2 text-sm opacity-80'>
                            {t('learn_description')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Quiz
