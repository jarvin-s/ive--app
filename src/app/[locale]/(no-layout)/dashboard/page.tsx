'use client'

import React from 'react'
import { Gabarito } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

const gabarito = Gabarito({
    weight: ['400'],
    subsets: ['latin'],
})

const QuizDashboard = () => {
    const currentLocale = useLocale()
    const router = useRouter()

    const handleStartQuiz = () => {
        const quizId = uuidv4()
        router.push(`/${currentLocale}/game/${quizId}`)
    }

    return (
        <>
            <div className='flex min-h-screen justify-center bg-zinc-900'>
                <div className='mt-20 flex flex-col gap-2'>
                    <h1
                        className={`${gabarito.className} text-7xl text-pink-800`}
                    >
                        Quiz dashboard
                    </h1>
                    <Button
                        onClick={handleStartQuiz}
                        className='border-b-4 border-pink-900 bg-pink-700 py-6 text-2xl text-white transition-all duration-150 ease-in-out hover:translate-y-[4px] hover:border-none hover:bg-pink-800'
                    >
                        Play quiz
                    </Button>
                </div>
            </div>
        </>
    )
}

export default QuizDashboard
