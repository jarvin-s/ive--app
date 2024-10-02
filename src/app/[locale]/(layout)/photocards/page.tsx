import { useTranslations } from 'next-intl'
import React from 'react'

const Photocards = () => {
    const t = useTranslations('photocards')

    return (
        <div className='flex items-center justify-center text-8xl'>
            {t('title')}
        </div>
    )
}

export default Photocards
