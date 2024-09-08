'use client'

import ImageUpload from '@/components/ImageUpload'
import { Skeleton } from '@/components/ui/skeleton'
import { supabase } from '@/lib/supabaseClient'
import { setLazyProp } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Gallery = () => {
    const [images, setImages] = useState<string[]>([])
    const [isLoading, setLoading] = useState(true)
    const [itemCount, setItemCount] = useState(0)

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
                        return publicData.publicUrl || '' // Fallback to an empty string if publicUrl is not available
                    })
                )
                setImages(imageUrls.filter(Boolean)) // Filter out any empty strings
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
            <div className='mx-2 mt-24 border-4 border-lime-400 bg-zinc-950 p-4 sm:p-10'>
                <h1 className='text-center text-4xl font-bold text-white'>
                    <span className='bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent'>
                        Rei
                    </span>
                </h1>
                <p className='mt-2 text-center text-lime-500'>
                    Free, unlimited uploads of high-quality original photos
                    featuring IVE&apos;s Rei.
                </p>
                <ImageUpload bucketName='rei' style='rei' />
            </div>
            {isLoading ? (
                <div className='container mx-auto p-4'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {images && images.length > 0 ? (
                            <>
                                {images.map((_, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center space-x-4'
                                    >
                                        <Skeleton className='h-12 w-12 rounded-full' />
                                        <div className='space-y-2'>
                                            <Skeleton className='h-4 w-[250px]' />
                                            <Skeleton className='h-4 w-[200px]' />
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p className='text-4xl text-red-500'>
                                No images found. Total count: {itemCount}
                            </p>
                        )}
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
                                layout='responsive'
                                objectFit='cover'
                                className='gap-2 rounded-lg border-2 border-lime-400 transition duration-500 ease-in-out hover:scale-110'
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
