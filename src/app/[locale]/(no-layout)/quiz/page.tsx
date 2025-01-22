'use client'

import React, { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Quiz from '@/components/Quiz/Quiz'
import Link from 'next/link'
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
})

const QuizPage = () => {
    const locale = useLocale()
    const t = useTranslations('quiz')
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch(`/api/quiz?locale=${locale}`)
                const data = await response.json()

                if (!response.ok) {
                    console.error('Error fetching questions:', data.error)
                } else {
                    setQuestions(data)
                }
            } catch (err) {
                console.error('Failed to fetch questions:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchQuestions()
    }, [locale])

    if (loading) {
        return (
            <div
                className={`${anton.className} flex min-h-screen items-center justify-center gap-2 text-7xl uppercase text-white`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='72'
                    height='72'
                    viewBox='0 0 24 24'
                >
                    <path
                        fill='currentColor'
                        d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
                        opacity='.25'
                    />
                    <path
                        fill='currentColor'
                        d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'
                    >
                        <animateTransform
                            attributeName='transform'
                            dur='0.75s'
                            repeatCount='indefinite'
                            type='rotate'
                            values='0 12 12;360 12 12'
                        />
                    </path>
                </svg>
                {t('loading')}
            </div>
        )
    }

    return (
        <div className='mt-20 flex flex-col items-center'>
            <Link href={'/'}>
                <h1
                    className={`${anton.className} mb-20 text-center text-7xl font-bold uppercase text-white md:text-left`}
                >
                    {t('title')}
                </h1>
            </Link>
            <Quiz questions={questions} quizId='1' />
        </div>
    )
}

export default QuizPage
