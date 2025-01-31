import { createClient } from '@/utils/supabase/client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

interface AnswerHistory {
    questionId: number
    correct: boolean
    userAnswer: string
    correctAnswer: string
}

interface QuizHistoryProps {
    quizId: string
}

export function QuizHistory({ quizId }: QuizHistoryProps) {
    const [answerHistory, setAnswerHistory] = useState<AnswerHistory[]>([])
    const t = useTranslations('quiz.quiz_history')
    useEffect(() => {
        const fetchHistory = async () => {
            const supabase = createClient()

            const { data, error } = await supabase
                .from('quiz_sessions')
                .select('answer_history')
                .eq('session_id', quizId)
                .single()

            if (error) {
                console.error('Error fetching history:', error)
                return
            }

            if (data?.answer_history) {
                setAnswerHistory(data.answer_history)
            }
        }

        fetchHistory()
    }, [quizId])

    return (
        <div className='mt-4 max-h-[400px] space-y-4 overflow-y-auto'>
            <h2 className='text-xl font-bold'>{t('title')}</h2>
            {answerHistory.map((answer, index) => (
                <div
                    key={index}
                    className={`rounded-lg p-4 ${
                        answer.correct ? 'bg-green-400' : 'bg-red-300'
                    }`}
                >
                    <p className='font-medium'>{answer.questionId}</p>
                    <p>
                        {t('your_answer')}: {answer.userAnswer}
                    </p>
                    {!answer.correct && (
                        <p className='font-bold text-red-900'>
                            {t('correct_answer')}: {answer.correctAnswer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}
