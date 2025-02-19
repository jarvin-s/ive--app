'use client'

import { Button } from '@/components/ui/button'
import { signIn } from './actions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../public/images/logo.png'
import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const t = useTranslations()
    const currentLocale = useLocale()
    const router = useRouter()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const result = await signIn(formData)

    //     if (result?.error) {
    //         setErrorMessage(result.error)
    //     }
    // }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
        } else {
            router.push(`/${selectedLocale}/home`)
            window.location.reload()
        }
    }

    const handleGoogleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })

        if (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex min-h-screen'>
            <div className='relative flex flex-1 items-center justify-center bg-zinc-900 px-4 lg:flex-[.4]'>
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
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('login.email_label')}
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
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t('login.password_label')}
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
                                    {t('login.error_message')}
                                </div>
                            </div>
                        )}

                        <Button
                            type='submit'
                            className='w-full bg-pink-600 text-white duration-300 hover:bg-pink-900'
                        >
                            {t('login.login_button')}
                        </Button>

                        <div className='flex items-center'>
                            <hr className='w-full border-t-[1px] border-[#49494923]' />
                            <span className='whitespace-nowrap px-4 opacity-60'>
                                {t('login.or')}
                            </span>
                            <hr className='w-full border-t-[1px] border-[#49494923]' />
                        </div>

                        <Button
                            type='button'
                            onClick={handleGoogleSignIn}
                            className='flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-black shadow-sm hover:bg-gray-50'
                        >
                            <GoogleIcon />
                            {t('login.google_button')}
                        </Button>

                        <div className='pt-4 text-center'>
                            <p>
                                {t('login.no_account')}
                                <Link
                                    href={`/${selectedLocale}/sign-up`}
                                    className='pl-2 text-[#0090e3] hover:underline'
                                >
                                    {t('login.signup_button')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden lg:flex lg:flex-[.6]'></div>
        </div>
    )
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 256 262'
        >
            <path
                fill='#4285F4'
                d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
            />
            <path
                fill='#34A853'
                d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
            />
            <path
                fill='#FBBC05'
                d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z'
            />
            <path
                fill='#EB4335'
                d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
            />
        </svg>
    )
}
