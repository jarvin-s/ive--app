'use client'

import { useEffect, useState } from 'react'
import Quiz from '@/components/Quiz/Quiz'
import { useLocale, useTranslations } from 'next-intl'
import { createClient } from '@/utils/supabase/client'
import { Anton } from 'next/font/google'
import { useRouter } from 'next/navigation'

const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
})

interface GamePageProps {
    params: {
        id: string
    }
}

interface QuizSession {
    current_question: number
    score: number
    questions: any[]
    answer_history: Array<{
        quizId: string
        userAnswer: string
        correctAnswer: string
        correct: boolean
    }>
}

export default function GamePage({ params }: GamePageProps) {
    const t = useTranslations('quiz')
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState<QuizSession | null>(null)
    const locale = useLocale()
    const supabase = createClient()
    const router = useRouter()

    useEffect(() => {
        async function fetchSession() {
            const { data: existingSession } = await supabase
                .from('quiz_sessions')
                .select('*')
                .eq('session_id', params.id)
                .single()

            if (existingSession) {
                setSession(existingSession)
                setQuestions(existingSession.questions)
            } else {
                const response = await fetch(`/api/quiz?locale=${locale}`)
                const data = await response.json()
                const newQuestions = data.questions

                if (response.ok) {
                    const { data: newSession } = await supabase
                        .from('quiz_sessions')
                        .insert([
                            {
                                session_id: params.id,
                                questions: newQuestions,
                                current_question: 0,
                                score: 0,
                                completed: false,
                            },
                        ])
                        .select()
                        .single()

                    setSession(newSession)
                    setQuestions(newQuestions)
                }
            }
            setLoading(false)
        }

        fetchSession()
    }, [params.id, locale, supabase, router])

    if (loading) {
        return (
            <div
                className={`${anton.className} flex min-h-screen flex-col items-center justify-center gap-4 text-center text-7xl uppercase text-white`}
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
        <Quiz
            questions={questions}
            quizId={params.id}
            initialQuestion={session?.current_question || 0}
            initialScore={session?.score || 0}
            initialAnswerHistory={session?.answer_history || []}
        />
    )
}
