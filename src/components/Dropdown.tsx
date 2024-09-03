const Dropdown = () => {
    return (
        <div className='dropdown inline-block'>
            <button className='inline-flex items-center rounded px-4 py-2'>
                <span className='mr-1'>Gallery</span>
                <svg
                    className='h-4 w-4 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                </svg>
            </button>
            <ul className='dropdown-menu absolute hidden pt-1 text-gray-700'>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/rei'
                    >
                        Rei
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/gaeul'
                    >
                        Gaeul
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/yujin'
                    >
                        Yujin
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/liz'
                    >
                        Liz
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/leeseo'
                    >
                        Leeseo
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                        href='/gallery/wonyoung'
                    >
                        Wonyoung
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
