'use client'

import ImageUpload from '@/components/ImageUpload'
import { supabase } from '@/lib/supabaseClient'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Gallery = () => {
    const [images, setImages] = useState<string[]>([])
    const t = useTranslations('gallery')

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage
                .from('gallery')
                .list('gaeul/')

            if (error) {
                console.error('Error fetching images:', error.message)
            } else if (data) {
                const imageUrls = await Promise.all(
                    data.map(async (file) => {
                        const { data: publicData } = supabase.storage
                            .from('gallery/gaeul')
                            .getPublicUrl(file.name)
                        return publicData.publicUrl || ''
                    })
                )
                setImages(imageUrls.filter(Boolean))
            }
        }

        fetchImages()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mx-2 mt-12 border-4 border-blue-600 bg-black p-4 sm:p-10'>
                <h1 className='text-center text-4xl font-bold text-white'>
                    <span className='bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent'>
                        {t('gaeul.title')}
                    </span>
                </h1>
                <p className='text mt-2 text-center text-blue-500'>
                    {t('gaeul.description')}
                </p>
                <ImageUpload bucketName='gaeul' style='gaeul' />
            </div>
            <div className='container mx-auto p-4'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {images.map((url, index) => (
                        <Image
                            key={index}
                            src={url}
                            alt={`Gaeul image ${index + 1}`}
                            width={300}
                            height={450}
                            className='gap-2 rounded-lg border-2 border-blue-600 transition duration-500 ease-in-out hover:scale-110'
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
        </div>
    )
}

export default Gallery
