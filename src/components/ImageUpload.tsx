import { useState, ChangeEvent } from 'react'
import { supabase } from '../lib/supabaseClient'
import Image from 'next/image'
import { useToast } from '@/hooks/use-toast'
import { useTranslations } from 'next-intl'

interface ImageUploadProps {
    bucketName: string
    style?: string
}

const ImageUpload = ({ bucketName, style }: ImageUploadProps) => {
    const [image, setImage] = useState<File | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const { toast } = useToast()
    const t = useTranslations('gallery')

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
        if (!image) {
            toast({
                variant: 'destructive',
                title: 'No image selected',
                description: 'Please select an image before uploading.',
                duration: 4000,
            })
            return
        }
        const fileName = `${Date.now()}-${image.name}`
        const { error } = await supabase.storage
            .from('gallery/' + bucketName)
            .upload(fileName, image)

        if (error) {
            toast({
                variant: 'destructive',
                title: 'Upload failed',
                description: 'There was a problem uploading your image.',
                duration: 4000,
            })
        } else {
            toast({
                variant: 'success',
                title: 'Upload successful',
                description: 'Your image has been uploaded successfully!',
                duration: 4000,
            })
        }
    }

    const upload_button =
        style === 'gaeul'
            ? 'upload-gaeul'
            : style === 'wonyoung'
              ? 'upload-wonyoung'
              : style === 'yujin'
                ? 'upload-yujin'
                : style === 'liz'
                  ? 'upload-liz'
                  : style === 'leeseo'
                    ? 'upload-leeseo'
                    : ''

    const upload_border_button =
        style === 'rei'
            ? 'border-lime-900 hover:border-lime-600'
            : style === 'gaeul'
              ? 'border-blue-800 hover:border-blue-700'
              : style === 'yujin'
                ? 'border-pink-800 hover:border-pink-500'
                : style === 'wonyoung'
                  ? 'border-red-900 hover:border-red-500'
                  : style === 'liz'
                    ? 'border-cyan-800 hover:border-cyan-700'
                    : style === 'leeseo'
                      ? 'border-yellow-300 hover:border-yellow-200'
                      : ''

    return (
        <>
            <div className='container mx-auto flex h-full items-center justify-center p-4'>
                <div className='w-full max-w-[350px]'>
                    <div className='flex w-full flex-col justify-center'>
                        <div className='upload-container relative flex w-full items-center justify-between'>
                            <div
                                className={`w-full rounded-md border-2 border-dotted text-center transition-all duration-300 ${upload_border_button}`}
                            >
                                <label
                                    htmlFor='file-input'
                                    className='block h-full w-full cursor-pointer p-4 text-sm text-white'
                                >
                                    {t('file')}
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
                                </div>
                            </div>
                        </div>
                        <button
                            className={`upload mt-2 px-4 py-2 text-white transition-all duration-300 ${upload_button}`}
                            onClick={handleImageUpload}
                        >
                            {t('button')}
                        </button>
                        {previewImage && (
                            <div className='mt-10 text-white'>
                                <Image
                                    className='flex h-auto max-w-[75%] rounded-lg'
                                    src={previewImage}
                                    alt='Image preview'
                                    width={150}
                                    height={150}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
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
