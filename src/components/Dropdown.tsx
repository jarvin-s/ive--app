import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

const Dropdown = () => {
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const t = useTranslations('navbar')

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    return (
        <div className='dropdown inline-block'>
            <button className='inline-flex items-center rounded py-2 text-white hover:text-black md:hover:text-white md:hover:underline'>
                <span className='ml-3'>{t('dropdown.gallery')}</span>
                <svg
                    className='h-4 w-4 fill-current opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                </svg>
            </button>
            <ul className='dropdown-menu absolute z-20 hidden rounded-lg border-[1px] bg-pink-950 p-2 text-white'>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/rei'
                                : '/kr/gallery/rei'
                        }
                    >
                        🐥 {t('dropdown.rei')}
                    </a>
                </li>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/gaeul'
                                : '/kr/gallery/gaeul'
                        }
                    >
                        🐿️ {t('dropdown.gaeul')}
                    </a>
                </li>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/yujin'
                                : '/kr/gallery/yujin'
                        }
                    >
                        🐶 {t('dropdown.yujin')}
                    </a>
                </li>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/liz'
                                : '/kr/gallery/liz'
                        }
                    >
                        🐱 {t('dropdown.liz')}
                    </a>
                </li>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/leeseo'
                                : '/kr/gallery/leeseo'
                        }
                    >
                        🐯 {t('dropdown.leeseo')}
                    </a>
                </li>
                <li>
                    <a
                        className='block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href={
                            selectedLocale == 'en'
                                ? '/en/gallery/wonyoung'
                                : '/kr/gallery/wonyoung'
                        }
                    >
                        🐰 {t('dropdown.wonyoung')}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
