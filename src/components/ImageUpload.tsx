import { useState, ChangeEvent } from 'react'
import { supabase } from '../lib/supabaseClient'
import Image from 'next/image'

interface ImageUploadProps {
    bucketName: string
}

const ImageUpload = ({ bucketName }: ImageUploadProps) => {
    const [image, setImage] = useState<File | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file && file.type.startsWith('image/')) {
            setFileName(file.name)

            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)

            setImage(file)
        }
    }

    const handleImageUpload = async () => {
        if (!image) return
        const fileName = `${Date.now()}-${image.name}`
        const { data, error } = await supabase.storage
            .from('gallery/' + bucketName)
            .upload(fileName, image)

        if (error) {
            console.error('Error uploading image:', error.message)
        } else {
            console.log('Image uploaded successfully:', data)
        }
    }

    return (
        <>
            <div className='container mx-auto flex h-full items-center justify-center p-4'>
                <div className='w-full max-w-[350px]'>
                    <div className='flex w-full flex-col justify-center'>
                        <div className='upload-container relative flex w-full items-center justify-between'>
                            <div className='w-full rounded-md border-2 border-dotted border-pink-900 text-center transition-all duration-300 hover:border-pink-600'>
                                <label
                                    htmlFor='file-input'
                                    className='block h-full w-full cursor-pointer p-4 text-sm text-white'
                                >
                                    Drop your image here or click to browse
                                </label>
                                <input
                                    name='file'
                                    type='file'
                                    id='file-input'
                                    accept='image/*'
                                    className='hidden'
                                    onChange={handleImageChange}
                                />
                                <div className='preview-container hidden flex-col items-center justify-center'>
                                    <div className='preview-image h-36 w-36 rounded-md bg-cover bg-center'></div>
                                    <span className='file-name my-4 text-sm font-medium'></span>
                                    <p className='close-button mb-4 cursor-pointer rounded-md border border-red-500 px-3 py-1 text-xs text-red-500 transition-all hover:bg-red-500 hover:text-white'>
                                        Delete
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className='img-upload-btn mt-2'
                            onClick={handleImageUpload}
                        >
                            Upload image
                        </button>
                        {previewImage && (
                            <div style={{ marginTop: '20px' }}>
                                <Image
                                    className='flex h-auto max-w-[75%] rounded-lg'
                                    src={previewImage}
                                    alt='Image preview'
                                    width={150}
                                    height={150}
                                />
                                {fileName && (
                                    <p className='mt-[10px] font-bold'>
                                        {fileName}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageUpload
