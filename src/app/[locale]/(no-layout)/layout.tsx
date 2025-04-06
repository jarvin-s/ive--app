// app/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import '../../globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'

const inter_tight = Inter_Tight({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'IVE 아이브 | DIVE INTO IVE',
    description: 'A collection of stats, insights, and a fun quiz for IVE fans to enjoy!',
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
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body className={`${inter_tight.className}`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
