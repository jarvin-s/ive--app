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
            <div className='grid items-center justify-center gap-4 bg-zinc-900 md:grid-cols-2 lg:grid-cols-3'>
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm overflow-hidden bg-pink-200 md:-rotate-2'>
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
                            <Link href={'/photocards'}>Photocards</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm overflow-hidden bg-pink-200 md:rotate-6'>
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
                                 Dive into an endless gallery of images of your favourite idol!
                            </CardDescription>
                        </div>
                    </CardContent>
                    <CardFooter className='flex justify-end p-4'>
                        <Button className='w-full bg-pink-700 text-lg text-white hover:bg-pink-600'>
                            <Link
                                className='flex flex-row gap-1'
                                href={'/gallery/rei'}
                            >
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
                <Card className='relative bottom-[8rem] ml-[130px] max-w-sm overflow-hidden bg-pink-200 md:-rotate-3'>
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
                                Looking to find a new photocard for your phone
                                case or just curious what's out there? Here
                                you'll find all you need!
                            </CardDescription>
                        </div>
                    </CardContent>
                    <div className='absolute right-[12px] h-[40px] w-[40px]'>
                        <img src='/images/icons/arrow-curve-down-left.svg' />
                    </div>
                    <CardFooter className='relative right-[40px] flex justify-end p-4'>
                        <Button className='bg-pink-700 text-lg text-white hover:bg-pink-600'>
                            <Link href={'/merch'}>Merch</Link>
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
