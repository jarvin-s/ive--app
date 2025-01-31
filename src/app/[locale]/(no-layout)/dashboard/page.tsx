'use client'

import React, { useEffect, useState } from 'react'
import { Gabarito } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const gabarito = Gabarito({
    weight: ['900'],
    subsets: ['latin'],
})

interface PastQuizzes {
    session_id: string
    language: string
    correct_answer: string
    completed: boolean
    created_at: string
    score: number
}

const QuizDashboard = () => {
    const t = useTranslations('quiz.dashboard')
    const currentLocale = useLocale()
    const router = useRouter()
    const [pastQuizzes, setPastQuizzes] = useState<PastQuizzes[]>([])

    useEffect(() => {
        const fetchPastQuizzes = async () => {
            try {
                const response = await fetch(
                    `/api/history?locale=${currentLocale}`
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setPastQuizzes(data.pastQuizzes)
            } catch (error) {
                console.error('Failed to fetch past quizzes:', error)
            }
        }
        fetchPastQuizzes()
    }, [currentLocale])

    return (
        <>
            <div className='flex min-h-screen justify-center bg-zinc-900 px-10'>
                <div className='mt-20 flex flex-col gap-2'>
                    <h1
                        className={`${gabarito.className} text-center text-5xl uppercase text-pink-600 md:text-7xl`}
                    >
                        <span className='text-white'>Quiz</span> dashboard
                    </h1>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                        <Button
                            asChild
                            className='border-b-4 border-pink-900 bg-pink-700 py-6 text-2xl text-white transition-all duration-150 ease-in-out hover:translate-y-[4px] hover:border-none hover:bg-pink-800'
                        >
                            <Link href={`/${currentLocale}/dashboard/config`}>
                                {t('play_button')}
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className='border-b-4 border-pink-900 bg-pink-700 py-6 text-2xl text-white transition-all duration-150 ease-in-out hover:translate-y-[4px] hover:border-none hover:bg-pink-800'
                        >
                            <Link href={`/${currentLocale}/home`}>
                                {t('home_button')}
                            </Link>
                        </Button>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-center gap-2'>
                            <h1
                                className={`${gabarito.className} text-4xl uppercase text-white`}
                            >
                                {t('quiz_history')}
                            </h1>
                        </div>
                        <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            {pastQuizzes.map((quiz: PastQuizzes) => (
                                <div
                                    key={quiz.session_id}
                                    className='rounded-lg bg-zinc-800 p-4 shadow-lg transition-all hover:scale-105'
                                >
                                    <div className='mb-2 flex items-center justify-between'>
                                        <span className='text-sm text-zinc-400'>
                                            {new Date(
                                                quiz.created_at
                                            ).toLocaleDateString('en-GB')}
                                        </span>
                                        <span className='rounded-full bg-pink-600 px-3 py-1 text-sm text-white'>
                                            {t('score')}: {quiz.score}
                                        </span>
                                    </div>
                                    <div className='flex'>
                                        <div className='text-sm font-bold text-white'>
                                            {t('quiz_id')}:{' '}
                                            <span
                                                className='cursor-pointer text-blue-400 hover:underline hover:text-blue-500'
                                                onClick={() =>
                                                    router.push(
                                                        `/${currentLocale}/game/${quiz.session_id}`
                                                    )
                                                }
                                            >
                                                {quiz.session_id}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`mt-2 text-sm font-bold ${quiz.completed ? 'text-green-400' : 'text-yellow-500'}`}
                                    >
                                        {quiz.completed
                                            ? t('quiz_status.completed')
                                            : t('quiz_status.in_progress')}
                                    </div>
                                </div>
                            ))}
                            {pastQuizzes.length === 0 && (
                                <div className='col-span-full text-center text-4xl font-bold text-zinc-400'>
                                    {t('no_quiz_history')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuizDashboard
