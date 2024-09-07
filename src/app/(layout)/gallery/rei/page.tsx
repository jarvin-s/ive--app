'use client'

import ImageUpload from '@/components/ImageUpload'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Gallery = () => {
    const [images, setImages] = useState<string[]>([])

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
        }

        fetchImages()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mx-2 mt-24 border-4 border-lime-400 bg-black p-4 sm:p-10'>
                <h1 className='text-center text-4xl font-bold text-white'>
                    <span className='bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent'>
                        Rei
                    </span>
                </h1>
                <p className='mt-2 text-center text-lime-500'>
                    Free, unlimited uploads of high-quality original photos
                    featuring IVE's Rei.
                </p>
                <ImageUpload bucketName='rei' style='rei' />
            </div>
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
        </div>
    )
}

export default Gallery
