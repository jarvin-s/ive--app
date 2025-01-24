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
    const [showScore, setShowScore] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('')

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
            title: isCorrect ? t('correct-title') : t('incorrect-title'),
            description: isCorrect
                ? t('correct-description')
                : t('incorrect-description'),
            variant: isCorrect ? 'success' : 'destructive',
        })

        const nextQuestion = currentQuestion + 1
        const isCompleted = nextQuestion >= questions.length - 1

        await fetch('/api/quiz', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quizId,
                currentQuestion: nextQuestion,
                score,
                completed: isCompleted
            }),
        })

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(nextQuestion)
            setSelectedAnswer('')
        } else {
            alert('Quiz finished!')
            setShowScore(true)
        }
    }

    return (
        <div className='mx-2 flex flex-col items-center rounded-2xl bg-stone-950 p-20'>
            <div className='w-full text-center text-white'>
                {showScore ? (
                    <div className='text-center'>
                        <h2 className='mb-4 text-2xl'>
                            {t('your_score', {
                                score,
                                total: questions.length,
                            })}
                        </h2>
                        <Button
                            onClick={() => {
                                setShowScore(false)
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
