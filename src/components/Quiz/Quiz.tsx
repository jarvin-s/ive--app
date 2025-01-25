'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'

interface QuizProps {
    questions: { question: string; options: string[]; correct_answer: string }[]
    quizId: string
    initialQuestion: number
    initialScore: number
}

export default function Quiz({
    questions,
    quizId,
    initialQuestion,
    initialScore,
}: QuizProps) {
    const { toast } = useToast()
    const t = useTranslations('quiz')
    const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
    const [score, setScore] = useState(initialScore)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const nextQuestion = currentQuestion + 1
    const isCompleted = nextQuestion > questions.length

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer)
    }

    const handleNext = async () => {
        const isCorrect =
            selectedAnswer === questions[currentQuestion].correct_answer

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1)
        }

        toast({
            title: isCorrect ? t('correct_title') : t('incorrect_title'),
            description: isCorrect
                ? t('correct_description')
                : t('incorrect_description'),
            variant: isCorrect ? 'success' : 'destructive',
        })

        await fetch('/api/quiz', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quizId,
                currentQuestion: nextQuestion,
                score: score,
                completed: nextQuestion >= questions.length,
            }),
        })

        if (currentQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
            setSelectedAnswer('')
        }
    }

    return (
        <div className='mx-2 flex flex-col items-center rounded-2xl bg-stone-950 p-20'>
            <div className='w-full text-center text-white'>
                {isCompleted ? (
                    <div className='text-center'>
                        <h2 className='mb-4 text-2xl'>{t('quiz_completed')}</h2>
                        <div>
                            <h2 className='mb-4 text-2xl'>
                                {t('your_score', {
                                    score,
                                    total: questions.length,
                                })}
                            </h2>
                        </div>
                        <Button
                            onClick={async () => {
                                await fetch('/api/quiz', {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        quizId,
                                        currentQuestion: 0,
                                        score: 0,
                                        completed: false,
                                    }),
                                })
                                setCurrentQuestion(0)
                                setScore(0)
                            }}
                            className='inline-flex items-center justify-center rounded-lg border-2 bg-pink-800 px-4 py-5 text-xl
                            text-white duration-150 ease-in-out hover:bg-pink-700'
                        >
                            {t('restart')}
                        </Button>
                    </div>
                ) : (
                    <>
                        <h2 className='mb-4 text-xl'>
                            {t('question', {
                                current: currentQuestion + 1,
                                total: questions.length,
                            })}
                        </h2>
                        <div className='mb-6'>
                            <p className='text-3xl font-bold'>
                                {questions[currentQuestion].question}
                            </p>
                        </div>
                        <div className='mb-6 grid grid-cols-1 gap-4'>
                            {questions[currentQuestion].options.map(
                                (option) => (
                                    <Button
                                        key={option}
                                        onClick={() =>
                                            handleAnswerClick(option)
                                        }
                                        className={`rounded-lg p-4 text-left ${
                                            selectedAnswer === option
                                                ? 'bg-pink-800 text-white'
                                                : 'bg-stone-800 hover:bg-stone-700'
                                        }`}
                                    >
                                        {option}
                                    </Button>
                                )
                            )}
                        </div>
                        <Button
                            onClick={handleNext}
                            disabled={!selectedAnswer}
                            className='inline-flex w-full max-w-[400px] items-center justify-center rounded-lg border-2 bg-pink-800 px-4 py-5 text-xl
                            text-white duration-150 ease-in-out hover:bg-pink-700 disabled:opacity-50'
                        >
                            {t('next')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}
