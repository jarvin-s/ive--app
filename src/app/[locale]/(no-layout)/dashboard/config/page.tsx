'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
})

interface QuizConfig {
    category: string
    questionCount: number
}

export default function QuizConfigPage() {
    const t = useTranslations('quiz')
    const locale = useLocale()
    const router = useRouter()
    const [config, setConfig] = useState<QuizConfig>({
        category: 'all',
        questionCount: 10,
    })

    const handleStartQuiz = () => {
        const quizId = uuidv4()
        router.push(`/${locale}/game/${quizId}?category=${config.category}&count=${config.questionCount}`)
    }

    return (
        <div className='mt-20 flex flex-col items-center'>
            <Link href={'/'}>
                <h1 className={`${anton.className} mb-20 text-center text-7xl font-bold uppercase text-white md:text-left`}>
                    {t('title')}
                </h1>
            </Link>
            
            <div className='mx-2 flex w-full max-w-md flex-col items-center rounded-2xl bg-stone-950 p-10'>
                <div className='w-full space-y-6 text-white'>
                    <div className='space-y-2'>
                        <label className='text-lg font-medium'>Category</label>
                        <select 
                            className='w-full rounded-lg bg-stone-800 p-3 text-white'
                            value={config.category}
                            onChange={(e) => setConfig(prev => ({ ...prev, category: e.target.value }))}
                        >
                            <option value="all">{t('configure.categories.all')}</option>
                            <option value="members">{t('configure.categories.members')}</option>
                            <option value="songs">{t('configure.categories.songs')}</option>
                            <option value="albums">{t('configure.categories.albums')}</option>
                            <option value="facts">{t('configure.categories.facts')}</option>
                        </select>
                    </div>

                    <div className='space-y-2'>
                        <label className='text-lg font-medium'>{t('configure.question_count_label')}</label>
                        <select 
                            className='w-full rounded-lg bg-stone-800 p-3 text-white'
                            value={config.questionCount}
                            onChange={(e) => setConfig(prev => ({ ...prev, questionCount: Number(e.target.value) }))}
                        >
                            <option value="5">{t('configure.question_count_options.5')}</option>
                            <option value="10">{t('configure.question_count_options.10')}</option>
                            <option value="15">{t('configure.question_count_options.15')}</option>
                            <option value="20">{t('configure.question_count_options.20')}</option>
                        </select>
                    </div>

                    <Button
                        onClick={handleStartQuiz}
                        className='w-full rounded-lg bg-pink-800 px-4 py-5 text-xl text-white duration-150 
                        ease-in-out hover:bg-pink-700'
                    >
                        {t('configure.start_button')}
                    </Button>
                </div>
            </div>
        </div>
    )
} 