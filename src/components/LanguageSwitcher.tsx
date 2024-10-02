'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    const changeLocale = (newLocale: string) => {
        const newPathname = `/${newLocale}${pathname.substring(currentLocale.length + 1)}`
        router.replace(newPathname)
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        className='text-white duration-300 hover:bg-pink-500'
                    >
                        {selectedLocale === 'en' ? (
                            <>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 640 480'
                                >
                                    <path fill='#012169' d='M0 0h640v480H0z' />
                                    <path
                                        fill='#FFF'
                                        d='m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z'
                                    />
                                    <path
                                        fill='#C8102E'
                                        d='m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z'
                                    />
                                    <path
                                        fill='#FFF'
                                        d='M241 0v480h160V0zM0 160v160h640V160z'
                                    />
                                    <path
                                        fill='#C8102E'
                                        d='M0 193v96h640v-96zM273 0v480h96V0z'
                                    />
                                </svg>
                                <span className='ml-1'>English</span>
                            </>
                        ) : (
                            <>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 640 480'
                                >
                                    <defs>
                                        <clipPath id='flagKr4x30'>
                                            <path
                                                fill-opacity='.7'
                                                d='M-95.8-.4h682.7v512H-95.8z'
                                            />
                                        </clipPath>
                                    </defs>
                                    <g
                                        fill-rule='evenodd'
                                        clip-path='url(#flagKr4x30)'
                                        transform='translate(89.8 .4)scale(.9375)'
                                    >
                                        <path
                                            fill='#fff'
                                            d='M-95.8-.4H587v512H-95.8Z'
                                        />
                                        <g transform='rotate(-56.3 361.6 -101.3)scale(10.66667)'>
                                            <g id='flagKr4x31'>
                                                <path
                                                    id='flagKr4x32'
                                                    fill='#000001'
                                                    d='M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z'
                                                />
                                                <use
                                                    width='100%'
                                                    height='100%'
                                                    y='44'
                                                    href='#flagKr4x32'
                                                />
                                            </g>
                                            <path stroke='#fff' d='M0 17v10' />
                                            <path
                                                fill='#cd2e3a'
                                                d='M0-12a12 12 0 0 1 0 24Z'
                                            />
                                            <path
                                                fill='#0047a0'
                                                d='M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z'
                                            />
                                            <circle
                                                cy='-6'
                                                r='6'
                                                fill='#cd2e3a'
                                            />
                                        </g>
                                        <g transform='rotate(-123.7 191.2 62.2)scale(10.66667)'>
                                            <use
                                                width='100%'
                                                height='100%'
                                                href='#flagKr4x31'
                                            />
                                            <path
                                                stroke='#fff'
                                                d='M0-23.5v3M0 17v3.5m0 3v3'
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <span className='ml-1'>한국어</span>
                            </>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-full rounded-lg bg-black text-white shadow-md ring-1 ring-black ring-opacity-5'>
                    <DropdownMenuLabel className='px-4 py-2 font-semibold'>
                        Languages
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className='my-2 border-t border-gray-200' />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            className='flex items-center gap-1 px-4 py-2 hover:bg-gray-100 focus:bg-red-100 focus:outline-none'
                            onSelect={() => changeLocale('en')}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 640 480'
                            >
                                <path fill='#012169' d='M0 0h640v480H0z' />
                                <path
                                    fill='#FFF'
                                    d='m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z'
                                />
                                <path
                                    fill='#C8102E'
                                    d='m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z'
                                />
                                <path
                                    fill='#FFF'
                                    d='M241 0v480h160V0zM0 160v160h640V160z'
                                />
                                <path
                                    fill='#C8102E'
                                    d='M0 193v96h640v-96zM273 0v480h96V0z'
                                />
                            </svg>
                            <span className='text-white'>English</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className='flex items-center gap-1 px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none'
                            onSelect={() => changeLocale('kr')}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 640 480'
                            >
                                <defs>
                                    <clipPath id='flagKr4x30'>
                                        <path
                                            fill-opacity='.7'
                                            d='M-95.8-.4h682.7v512H-95.8z'
                                        />
                                    </clipPath>
                                </defs>
                                <g
                                    fill-rule='evenodd'
                                    clip-path='url(#flagKr4x30)'
                                    transform='translate(89.8 .4)scale(.9375)'
                                >
                                    <path
                                        fill='#fff'
                                        d='M-95.8-.4H587v512H-95.8Z'
                                    />
                                    <g transform='rotate(-56.3 361.6 -101.3)scale(10.66667)'>
                                        <g id='flagKr4x31'>
                                            <path
                                                id='flagKr4x32'
                                                fill='#000001'
                                                d='M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z'
                                            />
                                            <use
                                                width='100%'
                                                height='100%'
                                                y='44'
                                                href='#flagKr4x32'
                                            />
                                        </g>
                                        <path stroke='#fff' d='M0 17v10' />
                                        <path
                                            fill='#cd2e3a'
                                            d='M0-12a12 12 0 0 1 0 24Z'
                                        />
                                        <path
                                            fill='#0047a0'
                                            d='M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z'
                                        />
                                        <circle cy='-6' r='6' fill='#cd2e3a' />
                                    </g>
                                    <g transform='rotate(-123.7 191.2 62.2)scale(10.66667)'>
                                        <use
                                            width='100%'
                                            height='100%'
                                            href='#flagKr4x31'
                                        />
                                        <path
                                            stroke='#fff'
                                            d='M0-23.5v3M0 17v3.5m0 3v3'
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span className='text-white'>한국어</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
