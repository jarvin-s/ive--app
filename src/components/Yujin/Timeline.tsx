import Image from 'next/image'
import React from 'react'

const Timeline = () => {
    return (
        <div
            className='relative flex h-[80vh] items-center justify-start  bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('/images/yujin-timeline.jpg')" }}
        >
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
                    <h1 className='absolute bottom-0 right-[75px] text-4xl font-black text-white'>
                        I&apos;ve IVE
                    </h1>
                    <h3 className='absolute bottom-0 right-[75px] text-4xl font-black text-white'>
                        10.04.2023
                    </h3>
                </div>
            </div>
            <div className='z-10'>
                <h1 className='text-4xl font-black uppercase text-white'>
                    Line distribution
                </h1>
                <h1 className='text-6xl font-black text-white'>263.04 s</h1>
                <h1 className='text-2xl font-black uppercase tracking-wide text-white'>
                    Song writing credits
                </h1>
                <h1 className='text-4xl font-black uppercase tracking-wide text-white'>
                    Heroine
                </h1>
                <h1 className='text-xl font-black uppercase tracking-wide text-white'>
                    Misc
                </h1>
                <p className='max-w-[500px] font-extralight tracking-wide text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quisquam illo minima perferendis quae error est,
                    tempore at eius neque ex officia earum doloremque dolorem
                    laboriosam dolorum asperiores, eveniet dignissimos!
                </p>
            </div>
            <div className='dotted absolute left-0 top-0 h-[100%] w-[100%] opacity-40'></div>
        </div>
    )
}

export default Timeline
