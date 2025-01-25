'use client'

import React, { useEffect, useState } from 'react'
import { Gabarito } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

const gabarito = Gabarito({
    weight: ['900'],
    subsets: ['latin'],
})

// Define a type for the quiz
interface PastQuizzes {
    session_id: string
    language: string
    correct_answer: string
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
                    `/api/quiz?locale=${currentLocale}`
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

    const handleStartQuiz = () => {
        const quizId = uuidv4()
        router.push(`/${currentLocale}/game/${quizId}`)
    }

    return (
        <>
            <div className='flex min-h-screen justify-center bg-zinc-900 px-20'>
                <div className='mt-20 flex flex-col gap-2'>
                    <h1
                        className={`${gabarito.className} text-center text-5xl uppercase text-pink-600 md:text-left md:text-7xl`}
                    >
                        <span className='text-white'>Quiz</span> dashboard
                    </h1>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                        <Button
                            onClick={handleStartQuiz}
                            className='border-b-4 border-pink-900 bg-pink-700 py-6 text-2xl text-white transition-all duration-150 ease-in-out hover:translate-y-[4px] hover:border-none hover:bg-pink-800'
                        >
                            {t('play_button')}
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
                        <h1
                            className={`${gabarito.className} text-2xl uppercase text-white`}
                        >
                            Quiz <span className='text-pink-600'>history</span>
                        </h1>
                        <table className='mt-2 min-w-full bg-zinc-800'>
                            <thead>
                                <tr className='bg-pink-600 text-white'>
                                    <th className='px-4 py-2 text-left'>
                                        Quiz ID
                                    </th>
                                    <th className='px-4 py-2 text-left'>
                                        Score
                                    </th>
                                    <th className='px-4 py-2 text-left'>
                                        Played on
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pastQuizzes.map((quiz: PastQuizzes) => (
                                    <tr
                                        key={quiz.session_id}
                                        className='border-b border-zinc-700'
                                    >
                                        <td
                                            className='cursor-pointer px-4 py-2 text-white hover:text-blue-500 hover:underline'
                                            onClick={() =>
                                                router.push(
                                                    `/${currentLocale}/game/${quiz.session_id}`
                                                )
                                            }
                                        >
                                            {quiz.session_id}
                                        </td>
                                        <td className='px-4 py-2 text-white'>
                                            {quiz.score}
                                        </td>
                                        <td className='px-4 py-2 text-white'>
                                            {new Date(
                                                quiz.created_at
                                            ).toLocaleDateString('en-GB')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizDashboard
