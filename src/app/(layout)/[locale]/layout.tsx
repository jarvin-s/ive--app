// app/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import '../../globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'

const inter = Bricolage_Grotesque({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'IVE 아이브 | DIVE INTO IVE',
    description: 'Generated by create next app',
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
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
