import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import '../../globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react'

const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'IVE 아이브 | DIVE INTO IVE',
    description:
        'A collection of stats, insights, and a fun quiz for IVE fans to enjoy!',
        openGraph: {
            images: [
                {
                    url: '/images/logo.png',
                },
            ],
        },
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    // Load messages based on the locale
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body className={anton.className}>
                <NextTopLoader
                    height={4}
                    color='#f53e99'
                    showSpinner={false}
                    easing='ease-in-out'
                />
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Toaster />
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
