import { useState } from 'react'

export default function Dropdown() {
    // Define state with a boolean type
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // Toggle function
    const toggleDropdown = (): void => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative inline-block text-left'>
            <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='button'
            >
                Gallery
                <svg
                    className='ms-3 h-2.5 w-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 4 4 4-4'
                    />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    id='dropdown'
                    className='absolute right-0 z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700'
                >
                    <ul
                        className='py-2 text-sm text-gray-700 dark:text-gray-200'
                        aria-labelledby='dropdownDefaultButton'
                    >
                        <li>
                            <a
                                href='/gallery/rei'
                                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Rei
                            </a>
                        </li>
                        <li>
                            <a
                                href='/gallery/gaeul'
                                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Gaeul
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
