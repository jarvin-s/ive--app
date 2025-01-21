'use client'

import { Button } from '@/components/ui/button'
import { signIn, signUp } from './actions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../public/images/logo.png'
import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

export default function LoginPage() {
    const t = useTranslations()
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const result = await signIn(formData)

        if (result?.error) {
            setErrorMessage(result.error)
        }
    }

    return (
        <div className='flex min-h-screen'>
            <div className='relative flex flex-1 items-center justify-center bg-zinc-900 px-4 md:flex-[.4]'>
                <div className='absolute top-0'>
                    <Link href={`/${selectedLocale}/home`}>
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt='IVE logo'
                            className='h-auto'
                        />
                    </Link>
                </div>
                <div className='mt-20 w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-xl'>
                    <h2 className='text-center text-3xl font-bold'>
                        {t('login.title')}
                    </h2>
                    <form
                        className='flex flex-col space-y-4'
                        onSubmit={handleSubmit}
                    >
                        <div className='space-y-2'>
                            <Label htmlFor='email'>
                                {t('login.email_label')}
                            </Label>
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Email address'
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='password'>
                                {t('login.password_label')}
                            </Label>
                            <Input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Password'
                                required
                            />
                        </div>

                        {errorMessage && (
                            <div className='my-4 rounded-lg border-l-8 border-red-600 bg-red-200 py-2 text-sm font-bold text-red-600'>
                                <div className='ml-2 flex items-center justify-center gap-4'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='36'
                                        height='36'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'
                                        />
                                    </svg>
                                    {errorMessage}
                                </div>
                            </div>
                        )}

                        <Button
                            className='w-full bg-pink-600 text-white duration-300 hover:bg-pink-900'
                            formAction={signIn}
                        >
                            {t('login.login_button')}
                        </Button>

                        <Button
                            className='w-full bg-pink-600 text-white duration-300 hover:bg-pink-900'
                            formAction={signUp}
                        >
                            {t('login.signup_button')}
                        </Button>
                    </form>
                </div>
            </div>
            <div className='hidden md:flex md:flex-[.6]'></div>
        </div>
    )
}
