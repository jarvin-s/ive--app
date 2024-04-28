import Image from 'next/image'
import React from 'react'

const Timeline = () => {
    return (
        <div
            className='relative flex h-[80vh] items-center justify-end  bg-cover'
            style={{ backgroundImage: "url('/images/wonyoung-timeline.jpg')" }}
        >
            <div className='z-10'>
                <h1 className='text-4xl'>Test</h1>
            </div>
            <div className='z-10 ml-[10vw] flex flex-col'>
                <h1 className='mb-[2vw] text-center text-6xl font-black uppercase tracking-wide text-white'>
                    Timeline
                </h1>
                <div className='i-am-gradient relative'>
                    <Image
                        className='rounded-lg'
                        src='/images/yujin-i-am.jpg'
                        width={300}
                        height={45}
                        alt='Yujin I AM'
                    />
                </div>
            </div>
            <div className='dotted absolute left-0 top-0 h-[100%] w-[100%] opacity-40'></div>
        </div>
    )
}

export default Timeline
