const Dropdown = () => {
    return (
        <div className='dropdown inline-block'>
            <button className='inline-flex items-center rounded py-2 text-white hover:text-black md:hover:text-white md:hover:underline'>
                <span className='ml-3'>Gallery</span>
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
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/rei'
                    >
                        🐥 Rei
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/gaeul'
                    >
                        🐿️ Gaeul
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/yujin'
                    >
                        🐶 Yujin
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/liz'
                    >
                        🐱 Liz
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/leeseo'
                    >
                        🐯 Leeseo
                    </a>
                </li>
                <li>
                    <a
                        className=' block rounded-lg bg-pink-950 px-4 py-2 duration-300 ease-in-out hover:bg-pink-900'
                        href='/gallery/wonyoung'
                    >
                        🐰 Wonyoung
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
