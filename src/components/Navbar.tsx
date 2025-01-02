'use client'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Dropdown from './Dropdown'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const t = useTranslations('navbar')

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    return (
        <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:justify-center'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        className='bg-[#a32054] duration-300 hover:bg-pink-900 lg:hidden'
                    >
                        <MenuIcon className='h-6 w-4 text-white' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className='bg-[#500724] text-white' side={'left'}>
                    <Link href='#' prefetch={false}>
                        <span className='sr-only'>DIVE INTO IVE</span>
                    </Link>
                    <div className='grid gap-2 py-6'>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/home'
                                    : '/kr/home'
                            }
                            className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
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
                            className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
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
                            className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
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
                            className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
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
                            className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                            prefetch={false}
                        >
                            {t('nav.merch')}
                        </Link>
                        <div className='flex w-full items-center py-2 text-lg font-semibold hover:underline'>
                            <Dropdown />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
                <span className='sr-only'>Acme Inc</span>
            </Link>
            <NavigationMenu className='hidden text-white lg:flex'>
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/home'
                                    : '/kr/home'
                            }
                            className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:underline disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
                            prefetch={false}
                        >
                            {t('nav.home')}
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/albums'
                                    : '/kr/albums'
                            }
                            className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:underline disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
                            prefetch={false}
                        >
                            {t('nav.albums')}
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/postcards'
                                    : '/kr/postcards'
                            }
                            className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:underline disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
                            prefetch={false}
                        >
                            {t('nav.postcards')}
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/photocards'
                                    : '/kr/photocards'
                            }
                            className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:underline disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
                            prefetch={false}
                        >
                            {t('nav.photocards')}
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            href={
                                selectedLocale === 'en'
                                    ? '/en/merch'
                                    : '/kr/merch'
                            }
                            className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:underline disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
                            prefetch={false}
                        >
                            {t('nav.merch')}
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Dropdown />
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <LanguageSwitcher />
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Navbar

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
