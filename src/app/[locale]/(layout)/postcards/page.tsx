import { useTranslations } from 'next-intl'
import React from 'react'

const Postcards = () => {
    const t = useTranslations('postcards')

    return (
        <div className='flex items-center justify-center text-8xl'>
            {t('title')}
        </div>
    )
}

export default Postcards
