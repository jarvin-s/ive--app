import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
    const t = useTranslations('404')

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-pink-950 p-4 text-center md:text-left'>
            <div className='rounded-lg border-b-4 border-pink-500 bg-white p-10'>
                <h1 className='mb-4 text-5xl font-bold text-pink-600'>
                    {t('title')}
                </h1>
                <img
                    className='w-full'
                    src='/images/gaeul/gaeul-sad.gif'
                    alt='Gaeul sad GIF'
                />
                <p className='mb-6 pt-4 text-lg'>{t('description')}</p>
                <Link
                    href='/'
                    className='rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:bg-pink-600'
                >
                    {t('home')}
                </Link>
            </div>
            {/* <div className='mt-8 text-gray-500'>
                <p>&copy; 2024 DIVE INTO IVE</p>
            </div> */}
        </div>
    )
}