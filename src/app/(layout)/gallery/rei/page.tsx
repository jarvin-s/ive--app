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
        <div className='flex flex-col items-center justify-center p-40'>
            <h1 className='h-[10rem] text-4xl font-bold text-black'>
                Image Gallery - Rei
            </h1>
            <ImageUpload bucketName='rei' />
            <div>
                {images.map((url, index) => (
                    <Image
                        key={index}
                        src={url}
                        alt={`Image ${index + 1}`}
                        width={240}
                        height={100}
                        priority
                        className='rounded-lg'
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery
