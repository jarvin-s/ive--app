import Image from 'next/image'
import React from 'react'

const Timeline = () => {
    return (
        <div
            className='relative flex h-[80vh] items-center justify-end  bg-cover'
            style={{
                backgroundImage: "url('/images/rei/rei-timeline.jpg')",
            }}
        >
            <div className='z-10 flex flex-col'>
                <h1 className='text-4xl font-black uppercase text-white'>
                    Line distribution
                </h1>
                <h1 className='text-6xl font-black text-white'>263.04 s</h1>
            </div>
            <div className='z-10 ml-10 flex flex-col'>
                <h1 className='mb-[2vw] text-center text-6xl font-black uppercase tracking-wide text-white'>
                    <span className='text-green-500'>Time</span>line
                </h1>
                <div className='i-am-gradient relative'>
                    <Image
                        className='rounded-lg'
                        src='/images/rei/rei-i-am.jpg'
                        width={300}
                        height={45}
                        alt='Leeseo I AM'
                    />
                </div>
            </div>
            <div className='dotted absolute left-0 top-0 h-[100%] w-[100%] opacity-40'></div>
        </div>
    )
}

export default Timeline
