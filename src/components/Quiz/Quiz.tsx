'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

interface QuizProps {
    questions: { question: string; options: string[]; correctAnswer: string }[]
    quizId: string
}

export default function Quiz({ questions, quizId }: QuizProps) {
    const t = useTranslations('quiz')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('')

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer)
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
    }

    const handleNext = async () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer('')
        } else {
            setShowScore(true)
            await fetch('/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ score, quizId }),
            })
        }
    }

    return (
        <div className='mx-2 flex flex-col items-center bg-stone-950 px-6 py-20'>
            <div className='w-full text-center text-white'>
                {showScore ? (
                    <div className='text-center'>
                        <h2 className='mb-4 text-2xl'>
                            {t('your_score', {
                                score,
                                total: questions.length,
                            })}
                        </h2>
                        <button
                            onClick={() => {
                                setShowScore(false)
                                setCurrentQuestion(0)
                                setScore(0)
                            }}
                            className='inline-flex items-center justify-center rounded-lg border-2 bg-pink-800 px-4 py-5 text-xl
                            text-white duration-150 ease-in-out hover:bg-pink-700'
                        >
                            {t('restart')}
                        </button>
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
                            className='inline-flex w-48 items-center justify-center rounded-lg border-2 bg-pink-800 px-4 py-5 text-xl
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
