import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const Cards = () => {
    return (
        <>
            <div className='animate-small-bounce grid items-center justify-center gap-4 bg-zinc-900 md:grid-cols-2 lg:grid-cols-3'>
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm rotate-0 overflow-hidden bg-pink-200 md:-rotate-2'>
                    <CardContent className='p-0'>
                        <div className='relative aspect-video'>
                            <Image
                                src='/images/photocard/card-image.png'
                                alt='Placeholder image'
                                sizes='100vw'
                                style={{
                                    width: '100%',
                                    height: '20rem',
                                    objectFit: 'cover',
                                }}
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className='space-y-4 p-4'>
                            <CardTitle className='text-2xl'>
                                Photocards
                            </CardTitle>
                            <CardDescription>
                                Looking to find a new photocard for your phone
                                case or just curious what's out there? Here
                                you'll find all you need!
                            </CardDescription>
                        </div>
                    </CardContent>
                    <p className='ml-[12px] text-sm font-bold opacity-90'>
                        (click me)
                    </p>
                    <div className='absolute left-[10px] h-[40px] w-[40px]'>
                        <img src='/images/icons/arrow-curve-down-right.svg' />
                    </div>
                    <CardFooter className='relative bottom-[4px] left-[36px] p-4'>
                        <Button className='bg-pink-700 text-lg text-white hover:bg-pink-600'>
                            <Link
                                className='flex flex-row gap-1'
                                href={'/photocards'}
                            >
                                {/* Card button icon */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26'
                                    height='26'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61m-19.5 3.7L6.93 20a2.01 2.01 0 0 0 1.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79c.01-.26-.04-.55-.13-.81L13 3.5a1.95 1.95 0 0 0-1.81-1.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 0 0-1.09 2.6m16.15-3.8a2 2 0 0 0-2-2h-1.45l3.45 8.34'
                                    />
                                </svg>
                                Photocards
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm rotate-0 overflow-hidden bg-pink-200 md:rotate-3'>
                    <CardContent className='p-0'>
                        <div className='relative aspect-video'>
                            <Image
                                src='/images/gallery/card-image.jpg'
                                alt='Placeholder image'
                                sizes='100vw'
                                style={{
                                    width: '100%',
                                    height: '20rem',
                                    objectFit: 'cover',
                                }}
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className='space-y-4 p-4'>
                            <CardTitle className='text-2xl'>Gallery</CardTitle>
                            <CardDescription>
                                {/* Find the perfect image for your{' '}
                                <span className='font-extrabold italic'>
                                    new
                                </span>{' '}
                                phone background. */}
                                Dive into an endless gallery of images of your
                                favourite idol!
                            </CardDescription>
                        </div>
                    </CardContent>
                    <div className='absolute bottom-[57px] left-[86px]'>
                        <svg
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 297.94485351750325 383.55186840089425'
                            width='80'
                            height='40'
                        >
                            <g
                                transform='translate(15.558897070350042 10) rotate(0 133.41352968840158 171.76991947381697)'
                                stroke='none'
                            >
                                <path
                                    fill='#1e1e1e'
                                    d='M 5.02,1.50 Q 5.02,1.50 3.95,4.67 2.89,7.83 2.20,10.19 1.51,12.55 0.80,15.50 0.10,18.46 0.21,21.99 0.31,25.52 0.38,28.78 0.44,32.03 0.51,35.03 0.58,38.03 0.65,40.85 0.72,43.67 0.99,46.95 1.26,50.23 2.55,53.78 3.84,57.32 5.70,61.04 7.57,64.76 8.62,66.94 9.67,69.12 10.65,71.17 11.63,73.21 14.22,76.68 16.82,80.14 18.94,82.42 21.06,84.71 23.98,87.47 26.91,90.23 30.59,93.08 34.28,95.93 38.28,98.45 42.28,100.98 46.25,103.42 50.21,105.87 54.46,108.57 58.72,111.26 62.63,113.33 66.54,115.41 70.17,117.25 73.80,119.10 76.69,120.38 79.58,121.66 81.96,122.34 84.34,123.03 86.83,123.96 89.33,124.90 91.47,125.46 93.60,126.02 97.52,127.85 101.43,129.68 104.89,131.03 108.35,132.37 111.99,133.61 115.63,134.85 121.16,136.08 126.68,137.31 131.40,138.55 136.12,139.79 139.70,140.53 143.27,141.26 146.82,142.21 150.37,143.15 153.81,144.17 157.25,145.18 160.76,145.91 164.27,146.63 168.80,148.07 173.34,149.50 176.91,150.66 180.48,151.83 183.75,152.55 187.02,153.27 189.74,154.18 192.46,155.10 196.94,156.53 201.43,157.96 204.50,159.38 207.58,160.80 210.61,161.98 213.64,163.17 217.00,164.75 220.36,166.33 223.09,167.56 225.82,168.79 228.47,170.34 231.13,171.90 234.83,173.79 238.54,175.68 240.84,176.98 243.14,178.27 245.68,180.77 248.21,183.27 250.36,184.75 252.51,186.22 254.53,188.63 256.56,191.04 258.37,193.75 260.18,196.46 261.76,199.16 263.35,201.86 264.71,204.08 266.07,206.30 268.47,209.24 270.88,212.19 271.85,214.19 272.82,216.19 274.23,219.26 275.65,222.34 276.50,224.31 277.34,226.28 277.85,228.63 278.35,230.97 278.61,234.43 278.86,237.88 278.90,241.28 278.93,244.69 278.56,246.91 278.19,249.13 277.53,253.07 276.87,257.01 275.82,259.33 274.76,261.65 273.77,264.82 272.78,267.98 270.99,271.86 269.21,275.74 267.63,277.25 266.05,278.75 264.27,280.56 262.50,282.37 259.51,284.37 256.51,286.38 252.36,287.94 248.20,289.51 246.08,290.39 243.95,291.28 240.81,292.28 237.67,293.29 232.35,295.10 227.02,296.90 222.82,298.34 218.62,299.77 215.86,300.93 213.09,302.08 210.13,303.88 207.17,305.69 204.83,307.01 202.49,308.33 200.51,309.82 198.53,311.32 196.46,313.34 194.39,315.36 193.02,317.33 191.65,319.30 190.52,321.18 189.38,323.06 188.30,326.44 187.22,329.82 186.27,332.32 185.33,334.82 185.19,337.54 185.04,340.26 185.05,341.90 185.06,343.55 184.87,344.69 184.68,345.84 184.13,346.86 183.59,347.89 182.74,348.69 181.90,349.48 180.84,349.97 179.79,350.45 178.63,350.58 177.48,350.70 176.35,350.45 175.21,350.20 174.22,349.60 173.22,349.00 172.47,348.11 171.72,347.23 171.29,346.15 170.87,345.07 170.81,343.91 170.74,342.75 171.06,341.63 171.37,340.51 172.02,339.55 172.68,338.59 173.60,337.89 174.53,337.19 175.63,336.82 176.73,336.45 177.89,336.45 179.05,336.45 180.15,336.83 181.25,337.20 182.18,337.90 183.10,338.61 183.75,339.57 184.40,340.53 184.71,341.65 185.02,342.77 184.95,343.93 184.89,345.09 184.46,346.17 184.02,347.25 183.27,348.13 182.52,349.01 181.52,349.61 180.52,350.21 179.39,350.46 178.26,350.70 177.10,350.58 175.95,350.45 174.89,349.96 173.84,349.47 173.00,348.67 172.16,347.87 171.62,346.84 171.07,345.81 170.89,344.67 170.70,343.52 170.70,343.52 170.70,343.52 170.75,340.00 170.80,336.49 171.10,334.10 171.41,331.71 172.36,329.31 173.31,326.91 174.21,324.03 175.12,321.15 176.47,318.37 177.83,315.59 179.82,312.93 181.81,310.27 184.81,306.77 187.81,303.27 189.73,301.79 191.64,300.32 194.11,298.66 196.57,297.00 199.54,295.50 202.51,294.01 205.13,292.66 207.75,291.31 209.97,290.29 212.19,289.26 215.46,288.54 218.73,287.83 221.30,286.69 223.87,285.56 226.13,284.87 228.40,284.19 230.85,282.92 233.30,281.65 235.90,280.51 238.50,279.36 240.85,278.20 243.20,277.03 246.67,275.53 250.14,274.03 252.35,272.61 254.56,271.18 256.85,267.81 259.13,264.43 260.11,262.37 261.08,260.31 262.53,257.59 263.98,254.88 264.43,252.32 264.88,249.76 265.34,247.24 265.80,244.72 265.77,241.56 265.74,238.41 265.63,235.84 265.52,233.27 264.87,230.94 264.21,228.61 263.11,226.58 262.02,224.55 261.00,222.02 259.99,219.49 258.74,217.51 257.49,215.54 255.62,212.77 253.74,210.00 252.68,207.84 251.63,205.68 249.98,203.21 248.33,200.74 246.69,198.50 245.05,196.25 243.93,194.24 242.82,192.23 241.09,190.41 239.37,188.58 237.50,187.07 235.63,185.56 233.18,183.66 230.73,181.77 228.59,180.60 226.46,179.43 224.29,177.99 222.12,176.56 219.52,175.25 216.91,173.94 213.74,172.57 210.56,171.19 207.25,169.94 203.93,168.70 201.09,167.38 198.26,166.07 195.88,165.03 193.51,163.99 191.53,163.08 189.55,162.16 187.46,161.10 185.37,160.04 181.85,159.11 178.32,158.18 174.92,156.97 171.52,155.77 167.18,154.63 162.84,153.49 159.00,152.68 155.16,151.87 151.84,150.77 148.51,149.68 145.18,148.67 141.85,147.65 138.25,146.79 134.64,145.93 130.01,144.91 125.37,143.90 119.40,142.83 113.43,141.76 109.57,140.60 105.72,139.44 102.08,138.15 98.44,136.85 94.67,135.48 90.90,134.11 88.50,133.16 86.10,132.20 83.93,131.07 81.76,129.95 79.18,128.79 76.59,127.63 73.83,126.07 71.07,124.51 67.42,122.69 63.77,120.87 59.57,118.83 55.38,116.79 51.08,114.33 46.78,111.86 42.66,109.68 38.54,107.49 34.06,105.15 29.57,102.80 25.31,100.20 21.04,97.60 17.30,95.06 13.56,92.52 10.52,89.86 7.49,87.19 5.90,85.15 4.31,83.12 2.62,80.81 0.92,78.49 -0.87,74.76 -2.66,71.03 -4.27,68.46 -5.87,65.89 -7.51,61.61 -9.15,57.33 -10.12,54.71 -11.10,52.09 -11.47,47.88 -11.84,43.67 -11.77,40.85 -11.70,38.02 -11.62,35.00 -11.54,31.99 -11.43,28.63 -11.33,25.27 -11.07,21.79 -10.82,18.30 -10.35,16.21 -9.88,14.13 -9.07,11.81 -8.25,9.49 -7.49,7.22 -6.73,4.94 -5.87,1.72 -5.02,-1.50 -4.76,-2.08 -4.51,-2.66 -4.13,-3.16 -3.74,-3.66 -3.25,-4.06 -2.75,-4.45 -2.18,-4.72 -1.61,-4.98 -0.99,-5.10 -0.37,-5.22 0.25,-5.19 0.89,-5.16 1.49,-4.98 2.10,-4.80 2.64,-4.48 3.18,-4.16 3.64,-3.71 4.09,-3.27 4.42,-2.73 4.75,-2.20 4.95,-1.60 5.14,-0.99 5.19,-0.36 5.23,0.26 5.12,0.88 5.02,1.50 5.02,1.50 L 5.02,1.50 Z'
                                ></path>
                            </g>
                            <g
                                transform='translate(168.98445621201188 329.0806918380937) rotate(0 29.46215447285533 22.235588281400283)'
                                stroke='none'
                            >
                                <path
                                    fill='#1e1e1e'
                                    d='M 4.38,-1.87 Q 4.38,-1.87 6.04,2.70 7.70,7.29 9.27,11.13 10.83,14.98 12.27,17.41 13.70,19.84 15.98,22.81 18.26,25.78 19.72,27.97 21.17,30.16 22.47,32.80 23.78,35.44 24.87,37.54 25.97,39.63 23.92,38.31 21.87,36.99 23.33,34.39 24.79,31.78 26.51,29.06 28.22,26.34 30.87,23.24 33.53,20.14 35.11,18.54 36.70,16.94 38.58,14.52 40.46,12.09 42.25,10.11 44.05,8.12 46.31,6.24 48.58,4.35 51.16,1.73 53.74,-0.88 53.32,-0.75 52.90,-0.62 53.51,-1.51 54.12,-2.40 54.99,-3.04 55.85,-3.69 56.88,-4.02 57.90,-4.36 58.98,-4.35 60.06,-4.34 61.08,-3.98 62.09,-3.63 62.95,-2.97 63.80,-2.31 64.40,-1.41 64.99,-0.51 65.27,0.52 65.55,1.56 65.48,2.64 65.41,3.71 65.00,4.71 64.60,5.71 63.89,6.52 63.19,7.34 62.26,7.88 61.33,8.43 60.27,8.65 59.22,8.88 58.15,8.75 57.08,8.62 56.10,8.16 55.13,7.70 54.35,6.95 53.58,6.20 53.08,5.24 52.59,4.29 52.42,3.22 52.26,2.16 52.44,1.09 52.63,0.03 53.14,-0.91 53.65,-1.85 54.44,-2.59 55.23,-3.32 56.21,-3.76 57.20,-4.21 58.27,-4.31 59.34,-4.42 60.39,-4.18 61.44,-3.94 62.36,-3.37 63.28,-2.81 63.97,-1.98 64.66,-1.15 65.05,-0.15 65.44,0.85 65.49,1.92 65.54,3.00 65.24,4.04 64.94,5.07 64.94,5.07 64.94,5.07 62.77,7.50 60.61,9.94 58.88,11.98 57.16,14.02 55.15,15.53 53.15,17.03 51.48,18.69 49.81,20.34 47.64,22.92 45.47,25.50 43.98,27.04 42.49,28.59 40.54,30.64 38.58,32.70 37.00,34.82 35.41,36.94 33.74,39.46 32.08,41.99 30.77,43.96 29.46,45.93 26.38,47.10 23.30,48.26 20.40,45.96 17.51,43.66 16.28,41.62 15.05,39.58 13.07,35.52 11.10,31.45 8.87,27.55 6.63,23.65 5.28,20.92 3.92,18.19 1.94,14.40 -0.03,10.60 -2.20,6.24 -4.38,1.87 -4.54,1.32 -4.70,0.77 -4.72,0.20 -4.75,-0.37 -4.63,-0.93 -4.52,-1.50 -4.27,-2.01 -4.03,-2.53 -3.67,-2.98 -3.30,-3.43 -2.85,-3.77 -2.39,-4.12 -1.86,-4.34 -1.33,-4.57 -0.76,-4.66 -0.20,-4.76 0.37,-4.71 0.94,-4.67 1.48,-4.49 2.03,-4.31 2.52,-4.00 3.00,-3.69 3.40,-3.28 3.80,-2.87 4.09,-2.37 4.38,-1.87 4.38,-1.87 L 4.38,-1.87 Z'
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <CardFooter className='flex justify-end p-4'>
                        <Button className='w-full bg-pink-700 text-lg text-white hover:bg-pink-600'>
                            <Link
                                className='flex flex-row gap-1'
                                href={'/gallery/rei'}
                            >
                                {/* Card button icon */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26'
                                    height='26'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 11l3.5-4.5l2.5 3l3.5-4.5l4.5 6zM16 2a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2z'
                                    />
                                </svg>
                                Gallery
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm rotate-0 overflow-hidden bg-pink-200 md:-rotate-2'>
                    <CardContent className='p-0'>
                        <div className='relative aspect-video'>
                            <Image
                                src='/images/merch/card-image.jpg'
                                alt='Placeholder image'
                                sizes='100vw'
                                style={{
                                    width: '100%',
                                    height: '20rem',
                                    objectFit: 'cover',
                                }}
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className='space-y-4 p-4'>
                            <CardTitle className='text-2xl'>Merch</CardTitle>
                            <CardDescription>
                                Whether you're looking for apparel or cute
                                MINIVE figurines, you&rsquo;ll find a collection
                                every DIVE will love.
                            </CardDescription>
                        </div>
                    </CardContent>
                    <div className='absolute right-[12px] h-[40px] w-[40px]'>
                        <img src='/images/icons/arrow-curve-down-left.svg' />
                    </div>
                    <CardFooter className='relative right-[40px] flex justify-end p-4'>
                        <Button className='bg-pink-700 text-lg text-white hover:bg-pink-600'>
                            <Link
                                className='flex flex-row gap-1'
                                href={'/merch'}
                            >
                                {/* Card button icon */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26'
                                    height='26'
                                    viewBox='0 0 24 24'
                                >
                                    <g fill='none' fill-rule='evenodd'>
                                        <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                                        <path
                                            fill='currentColor'
                                            d='M5.707 3.879A3 3 0 0 1 7.828 3c.79 0 1.948-.22 2.302.711a2.001 2.001 0 0 0 3.74 0c.354-.93 1.513-.71 2.302-.71a3 3 0 0 1 2.12.878L22 7.586a2 2 0 0 1 0 2.828l-1.478 1.478c-.52.52-1.246.689-1.9.526l.272 5.432A3 3 0 0 1 15.898 21H8.102a3 3 0 0 1-2.996-3.15l.272-5.432a2 2 0 0 1-1.9-.526L2 10.414a2 2 0 0 1 0-2.828z'
                                        />
                                    </g>
                                </svg>
                                Merch
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
        // <div className='flex flex-col items-center justify-center gap-4 bg-zinc-900 md:flex-row md:gap-40'>
        //     <div className='relative -top-[60px] h-[320px] w-[240px] rounded-xl bg-gray-300'>
        //         <img
        //             className='h-[18vw] rounded-lg'
        //             src='/images/photocard/main2.png'
        //         />
        //         <a>
        //             <div className='flex h-[40px] w-full cursor-pointer items-center justify-center rounded-lg bg-purple-600 text-xl text-white duration-300 ease-in-out hover:bg-purple-500'>
        //                 Photocards
        //             </div>
        //         </a>
        //     </div>
        //     <div className='relative -top-[60px] h-[320px] w-[240px] rounded-xl bg-gray-300'></div>
        //     <div className='relative -top-[60px] h-[320px] w-[240px] rounded-xl bg-gray-300'></div>
        // </div>

        // <div className='grid gap-4 px-2 py-20 sm:grid-cols-2 lg:grid-cols-3 bg-zinc-900'>
        //     <div className='relative flex animate-small-bounce flex-col items-center'>
        //         <Link href='/photocards' passHref legacyBehavior>
        //             <img
        //                 src='/images/photocard/main.png'
        //                 alt='Photocards'
        //                 className='z-10 cursor-pointer rounded-lg border-2 duration-300 hover:bg-pink-800 md:h-[22vw] lg:h-[18vw]'
        //             />
        //         </Link>
        //         <div className='relative top-4 z-10 p-2 pr-3 text-4xl font-bold uppercase text-white'>
        //             <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 justify-center bg-pink-800 p-8'></span>
        //             Photocards
        //         </div>
        //     </div>
        //     <div className='relative flex animate-small-bounce flex-col items-center'>
        //         <Link href='/gallery/rei' passHref legacyBehavior>
        //             <img
        //                 src='/images/gallery/main.jpg'
        //                 alt='Gallery'
        //                 className='z-10 cursor-pointer rounded-lg border-2 duration-300 hover:bg-pink-800 md:h-[22vw] lg:h-[18vw]'
        //             />
        //         </Link>
        //         <div className='relative top-4 z-10 pb-3 pl-1 pr-3 pt-1 text-4xl font-bold uppercase text-white'>
        //             <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 bg-pink-800'></span>
        //             Gallery
        //         </div>
        //     </div>
        //     <div className='relative flex animate-small-bounce flex-col items-center'>
        //         <Link href='/merch' passHref legacyBehavior>
        //             <img
        //                 src='/images/merch/main.jpg'
        //                 alt='Merch'
        //                 className='z-10 cursor-pointer rounded-lg border-2 p-2 duration-300 hover:bg-pink-800 md:h-[18vw] md:w-[14vw] md:p-0'
        //             />
        //         </Link>
        //         <div className='relative top-4 z-10 pb-3 pl-1 pr-3 pt-1 text-4xl font-bold uppercase text-white'>
        //             <span className='absolute -left-1 -top-1 z-[-1] h-full w-full -rotate-2 bg-pink-800'></span>
        //             Merch
        //         </div>
        //     </div>
        // </div>
    )
}

export default Cards
