'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Dropdown from './Dropdown'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'

interface Position {
    left: number
    width: number
    opacity: number
}

interface TabProps {
    children: React.ReactNode
    setPosition: (position: Position) => void
    href: string
}

interface CursorProps {
    position: Position
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    })
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const t = useTranslations('navbar')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    return (
        <header
            className={`fixed top-0 z-50 mt-6 flex w-full items-center px-4 uppercase duration-150 md:px-6 lg:justify-center ${
                scrolled ? 'bg-transparent' : 'bg-transparent'
            }`}
        >
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        className='bg-[#a32054] duration-150 hover:bg-pink-900 lg:hidden'
                    >
                        <MenuIcon className='h-6 w-4 text-white' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className='bg-[#500724] text-white' side={'left'}>
                    <Link href='#' prefetch={false}>
                        <span className='sr-only'>
                            <SheetTitle className='text-7xl text-blue-500'>
                                Menu
                            </SheetTitle>
                            DIVE INTO IVE
                        </span>
                    </Link>
                    <div className='grid gap-2 py-6'>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/home'
                                    : '/kr/home'
                            }
                            className='flex w-full items-center py-2 text-lg hover:underline'
                            prefetch={false}
                        >
                            {t('nav.home')}
                        </Link>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/albums'
                                    : '/kr/albums'
                            }
                            className='flex w-full items-center py-2 text-lg hover:underline'
                            prefetch={false}
                        >
                            {t('nav.albums')}
                        </Link>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/postcards'
                                    : '/kr/postcards'
                            }
                            className='flex w-full items-center py-2 text-lg hover:underline'
                            prefetch={false}
                        >
                            {t('nav.postcards')}
                        </Link>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/photocards'
                                    : '/kr/photocards'
                            }
                            className='flex w-full items-center py-2 text-lg hover:underline'
                            prefetch={false}
                        >
                            {t('nav.photocards')}
                        </Link>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/merch'
                                    : '/kr/merch'
                            }
                            className='flex w-full items-center py-2 text-lg hover:underline'
                            prefetch={false}
                        >
                            {t('nav.merch')}
                        </Link>
                        <div className='flex w-full items-center py-2 text-lg hover:underline'>
                            <Dropdown />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <NavigationMenu
                className={`hidden text-white lg:flex ${
                    scrolled
                        ? 'rounded-lg bg-pink-900 px-6 py-6 duration-150 ease-in-out'
                        : 'bg-transparent'
                }`}
            >
                <div className='flex items-center gap-8'>
                    <Link
                        href={selectedLocale === 'en' ? '/en' : '/kr'}
                        className='flex items-center'
                    >
                        <Image
                            src='/images/logo.png'
                            alt='IVE Logo'
                            width={65}
                            height={65}
                            className='rounded-full'
                        />
                    </Link>

                    <NavigationMenuList
                        className='relative'
                        onMouseLeave={() => {
                            setPosition((pv) => ({
                                ...pv,
                                opacity: 0,
                            }))
                        }}
                    >
                        <Tab
                            setPosition={setPosition}
                            href={
                                selectedLocale === 'en'
                                    ? '/en/home'
                                    : '/kr/home'
                            }
                        >
                            {t('nav.home')}
                        </Tab>
                        <Tab
                            setPosition={setPosition}
                            href={
                                selectedLocale === 'en'
                                    ? '/en/albums'
                                    : '/kr/albums'
                            }
                        >
                            {t('nav.albums')}
                        </Tab>
                        <Tab
                            setPosition={setPosition}
                            href={
                                selectedLocale === 'en'
                                    ? '/en/postcards'
                                    : '/kr/postcards'
                            }
                        >
                            {t('nav.postcards')}
                        </Tab>
                        <Tab
                            setPosition={setPosition}
                            href={
                                selectedLocale === 'en'
                                    ? '/en/photocards'
                                    : '/kr/photocards'
                            }
                        >
                            {t('nav.photocards')}
                        </Tab>
                        <Tab
                            setPosition={setPosition}
                            href={
                                selectedLocale === 'en'
                                    ? '/en/merch'
                                    : '/kr/merch'
                            }
                        >
                            {t('nav.merch')}
                        </Tab>

                        <Cursor position={position} />

                        <NavigationMenuLink asChild>
                            <Dropdown />
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                            <LanguageSwitcher />
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </div>
            </NavigationMenu>
        </header>
    )
}

const Tab = ({ children, setPosition, href }: TabProps) => {
    const ref = useRef<HTMLLIElement>(null)

    return (
        <NavigationMenuLink asChild>
            <li
                ref={ref}
                onMouseEnter={() => {
                    if (!ref?.current) return
                    const { width } = ref.current.getBoundingClientRect()
                    setPosition({
                        left: ref.current.offsetLeft,
                        width,
                        opacity: 1,
                    })
                }}
            >
                <Link
                    href={href}
                    className='relative z-[999] rounded-full px-6'
                    prefetch={false}
                >
                    {children}
                </Link>
            </li>
        </NavigationMenuLink>
    )
}

const Cursor = ({ position }: CursorProps) => {
    return (
        <motion.div
            animate={{
                ...position,
            }}
            className='absolute z-0 h-9 -translate-x-1 rounded-full bg-black'
        />
    )
}

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    )
}

export default Navbar
