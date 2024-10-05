'use client'

import ImageUpload from '@/components/ImageUpload'
import { Skeleton } from '@/components/ui/skeleton'
import { supabase } from '@/lib/supabaseClient'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Gallery = () => {
    const [images, setImages] = useState<string[]>([])
    const [isLoading, setLoading] = useState(true)
    const [itemCount, setItemCount] = useState(0)
    const t = useTranslations('gallery')

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage
                .from('gallery')
                .list('rei/')

            if (error) {
                console.error('Error fetching images:', error.message)
            } else if (data) {
                const imageUrls = await Promise.all(
                    data.map(async (file) => {
                        const { data: publicData } = supabase.storage
                            .from('gallery/rei')
                            .getPublicUrl(file.name)
                        return publicData.publicUrl || ''
                    })
                )
                setImages(imageUrls.filter(Boolean))
            }
            setLoading(false)
        }

        const fetchImageCount = async () => {
            const { data, error } = await supabase.storage
                .from('gallery')
                .list('rei/')

            if (error) {
                console.error('Error fetching items from rei/:', error.message)
            } else {
                setItemCount(data.length)
            }
        }

        fetchImageCount()
        fetchImages()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative z-10 mx-2 mt-12 border-4 border-lime-400 bg-zinc-950 p-4 sm:p-10'>
                <h1 className='z-10 text-center text-4xl font-bold text-white'>
                    <span className='bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent'>
                        {t('rei.title')}
                    </span>
                </h1>
                <p className='relative z-10 mt-2 pl-1 pr-2 text-center text-white'>
                    <span className='absolute -left-1 -right-1 z-[-1] h-full w-full bg-pink-800'></span>
                    {t('rei.description')}
                </p>
                <ImageUpload bucketName='rei' style='rei' />
                <div className='absolute bottom-0 left-0 right-0 top-0 z-[-1]'>
                    <Image
                        className='h-full w-full object-cover'
                        src='/images/haikei-lime.svg'
                        alt='Rei lime background'
                        width={0}
                        height={0}
                    />
                </div>
            </div>
            {isLoading ? (
                <div className='container mx-auto p-4'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <div
                                key={index}
                                className='flex items-center justify-center space-x-4'
                            >
                                <Skeleton className='h-[450px] w-[300px] gap-2 bg-zinc-700'>
                                    <div className='flex h-full w-full items-center justify-center'>
                                        <svg
                                            className='h-6 w-6 text-gray-200'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='currentColor'
                                            viewBox='0 0 20 18'
                                        >
                                            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                                        </svg>
                                    </div>
                                </Skeleton>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='container mx-auto p-4'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {images.map((url, index) => (
                            <Image
                                key={index}
                                src={url}
                                alt={`Rei image ${index + 1}`}
                                width={300}
                                height={450}
                                className='gap-2 rounded-lg border-2 border-lime-400 transition duration-500 ease-in-out hover:scale-110'
                                sizes='100vw'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
