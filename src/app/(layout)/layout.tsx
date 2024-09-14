import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'

const inter = Bricolage_Grotesque({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'IVE 아이브 | DIVE INTO IVE',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
                <script src='https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js'></script>
            </body>
        </html>
    )
}
