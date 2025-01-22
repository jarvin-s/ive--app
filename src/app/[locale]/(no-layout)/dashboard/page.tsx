import React from 'react'
import { Gabarito } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const gabarito = Gabarito({
    weight: ['400'],
    subsets: ['latin'],
})

const QuizDashboard = () => {
    const currentLocale = useLocale()
    return (
        <>
            <div className='flex min-h-screen justify-center bg-zinc-900'>
                <div className='mt-20 flex flex-col gap-2'>
                    <h1 className={`${gabarito.className} text-7xl text-pink-800`}>
                        Quiz dashboard
                    </h1>
                    <Button
                        asChild
                        className='border-b-4 border-pink-900 py-6 text-2xl bg-pink-700 text-white transition-all duration-150 ease-in-out hover:translate-y-[4px] hover:border-none hover:bg-pink-800'
                    >
                        <a href={`/${currentLocale}/quiz`}>Play quiz</a>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default QuizDashboard
