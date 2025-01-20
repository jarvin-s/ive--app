import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Dropdown = () => {
    const currentLocale = useLocale()
    const t = useTranslations('navbar')

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='text-md uppercase rounded-full hover:bg-zinc-900 duration-150'>
                    {t('dropdown.gallery')}{' '}
                    <ChevronDown className='ml-2 h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 rounded-md bg-pink-950 text-white shadow-lg'>
                {[
                    { name: 'rei', icon: '🐥' },
                    { name: 'gaeul', icon: '🐿️' },
                    { name: 'yujin', icon: '🐶' },
                    { name: 'liz', icon: '🐱' },
                    { name: 'leeseo', icon: '🐯' },
                    { name: 'wonyoung', icon: '🐰' },
                ].map(({ name, icon }) => (
                    <DropdownMenuItem asChild key={name}>
                        <Link
                            href={
                                currentLocale === 'en'
                                    ? `/en/gallery/${name}`
                                    : `/kr/gallery/${name}`
                            }
                            className='flex items-center gap-2 rounded-md px-4 py-2 transition duration-300 hover:bg-pink-900 hover:text-white'
                        >
                            {icon} {t(`dropdown.${name}`)}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown
