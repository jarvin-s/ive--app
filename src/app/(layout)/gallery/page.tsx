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
                .list()

            if (error) {
                console.error('Error fetching images:', error.message)
            } else if (data) {
                const imageUrls = await Promise.all(
                    data.map(async (file) => {
                        const { data: signedData, error: signedError } =
                            await supabase.storage
                                .from('gallery')
                                .createSignedUrl(file.name, 60)

                        if (signedError) {
                            console.error(
                                'Error creating signed URL:',
                                signedError.message
                            )
                        }
                        return signedData?.signedUrl || '' // Fallback to an empty string
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
                Image Gallery
            </h1>
            <ImageUpload />
            {images.map((url, index) => (
                <Image
                    key={index}
                    src={url}
                    alt={`Image ${index + 1}`}
                    width={150}
                    height={150}
                    priority
                    className=''
                />
            ))}
        </div>
    )
}

export default Gallery
