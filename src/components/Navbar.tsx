'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
    const [isOpen, setIsOpen] = useState(false)
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
            className={`fixed top-0 z-50 w-full bg-transparent py-4 ${
                scrolled ? 'backdrop-blur-md' : ''
            }`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex h-16 items-center justify-between lg:justify-center'>
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

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='lg:hidden'
                            >
                                <MenuIcon className='h-10 w-8' />
                                <span className='sr-only'>
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side='top'
                            className='h-[100dvh] w-full bg-pink-950 pt-16 text-white'
                        >
                            <Link href='#' prefetch={false}>
                                <span className='sr-only'>
                                    <SheetTitle className='text-7xl'>
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
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.home')}
                                </Link>
                                <Link
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/albums'
                                            : '/kr/albums'
                                    }
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.albums')}
                                </Link>
                                <Link
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/postcards'
                                            : '/kr/postcards'
                                    }
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.postcards')}
                                </Link>
                                <Link
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/photocards'
                                            : '/kr/photocards'
                                    }
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.photocards')}
                                </Link>
                                <Link
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/merch'
                                            : '/kr/merch'
                                    }
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.merch')}
                                </Link>
                                <Link
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/dashboard'
                                            : '/kr/dashboard'
                                    }
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.quiz')}
                                </Link>
                                <div className='flex justify-center py-2 text-lg hover:underline'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant='ghost'
                                                className='text-md'
                                            >
                                                {t('dropdown.gallery')}{' '}
                                                <ChevronDown className='ml-2 h-4 w-4' />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='w-56 rounded-md bg-zinc-950 text-white shadow-lg'>
                                            {[
                                                { name: 'rei', icon: '🐥' },
                                                { name: 'gaeul', icon: '🐿️' },
                                                { name: 'yujin', icon: '🐶' },
                                                { name: 'liz', icon: '🐱' },
                                                { name: 'leeseo', icon: '🐯' },
                                                {
                                                    name: 'wonyoung',
                                                    icon: '🐰',
                                                },
                                            ].map(({ name, icon }) => (
                                                <DropdownMenuItem
                                                    asChild
                                                    key={name}
                                                >
                                                    <Link
                                                        href={
                                                            currentLocale ===
                                                            'en'
                                                                ? `/en/gallery/${name}`
                                                                : `/kr/gallery/${name}`
                                                        }
                                                        className='flex items-center gap-2 rounded-md px-4 py-2 transition duration-300 hover:bg-zinc-800 hover:text-white'
                                                    >
                                                        {icon}{' '}
                                                        {t(`dropdown.${name}`)}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <Link
                                    href={`/${selectedLocale}/sign-in`}
                                    className='flex w-full items-center justify-center py-2 text-lg hover:underline'
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.sign_in')}
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <NavigationMenu className='hidden text-white lg:flex'>
                        <div className='flex items-center gap-8 uppercase'>
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
                                <Tab
                                    setPosition={setPosition}
                                    href={
                                        selectedLocale === 'en'
                                            ? '/en/dashboard'
                                            : '/kr/dashboard'
                                    }
                                >
                                    {t('nav.quiz')}
                                </Tab>

                                <Tab setPosition={setPosition} href='#'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant='ghost'
                                                className='text-md rounded-full uppercase'
                                            >
                                                {t('dropdown.gallery')}{' '}
                                                <ChevronDown className='ml-2 h-4 w-4' />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='w-56 rounded-md bg-zinc-950 text-white shadow-lg'>
                                            {[
                                                { name: 'rei', icon: '🐥' },
                                                { name: 'gaeul', icon: '🐿️' },
                                                { name: 'yujin', icon: '🐶' },
                                                { name: 'liz', icon: '🐱' },
                                                { name: 'leeseo', icon: '🐯' },
                                                {
                                                    name: 'wonyoung',
                                                    icon: '🐰',
                                                },
                                            ].map(({ name, icon }) => (
                                                <DropdownMenuItem
                                                    asChild
                                                    key={name}
                                                >
                                                    <Link
                                                        href={
                                                            currentLocale ===
                                                            'en'
                                                                ? `/en/gallery/${name}`
                                                                : `/kr/gallery/${name}`
                                                        }
                                                        className='flex items-center gap-2 rounded-md px-4 py-2 transition duration-300 hover:bg-zinc-800 hover:text-white'
                                                    >
                                                        {icon}{' '}
                                                        {t(`dropdown.${name}`)}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </Tab>

                                <Cursor position={position} />

                                <NavigationMenuLink asChild>
                                    <LanguageSwitcher />
                                </NavigationMenuLink>

                                {/* <Tab setPosition={setPosition} href='#'>
                                    <SignIn />
                                </Tab> */}
                            </NavigationMenuList>
                        </div>
                    </NavigationMenu>
                </div>
            </div>
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
