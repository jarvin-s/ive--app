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
        <div>
            <h1 className='flex h-[10rem] items-center justify-center text-4xl font-bold text-black'>
                Image Gallery
            </h1>
            <ImageUpload />
            <div>
                {images.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Image ${index + 1}`}
                        style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover',
                            margin: '10px',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery
