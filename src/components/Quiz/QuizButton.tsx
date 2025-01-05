'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { generateQuizId } from '@/lib/generateQuizId'
import { useState } from 'react'

export default function QuizButton() {
    const router = useRouter()
    const t = useTranslations('quiz')
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)

    const handleStartQuiz = () => {
        const quizId = generateQuizId()
        if (selectedLocale === 'en') {
            router.push(`/en/game/${quizId}`)
        } else {
            router.push(`/kr/game/${quizId}`)
        }
    }

    return (
        <button
            onClick={handleStartQuiz}
            className='inline-flex w-48 items-center justify-center rounded-lg border-2 bg-pink-800 px-4 py-3 text-lg
            text-white duration-150 ease-in-out hover:bg-pink-700 disabled:pointer-events-none disabled:opacity-50'
        >
            {t('button')}
        </button>
    )
}
