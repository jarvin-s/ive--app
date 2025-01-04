import { useTranslations } from 'next-intl'
import React from 'react'

const Albums = () => {
const t = useTranslations('albums')

    return (
        <div className='flex items-center justify-center text-8xl min-h-[50vh]'>{t('title')}</div>
    )
}

export default Albums
