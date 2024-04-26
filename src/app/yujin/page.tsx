import Image from 'next/image'
import React from 'react'

const Yujin = () => {
    return (
        <div
            className='flex justify-center items-center yujin h-[60vh] bg-pink-600 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('/images/yujin2.jpg')" }}
        >
            <div className='w-[1216px]'>
                <h1 className='text-8xl uppercase font-black text-white'>
                    Yujin
                </h1>
                <h2 className='text-6xl text-white'> 유진</h2>
            </div>
        </div>
        // <div className='bg-pink-600 p-20'>
        //     <div className='rounded-lg bg-white shadow-2xl md:flex'>
        //         <Image
        //             src='/images/yujin.jpg'
        //             alt='Boat'
        //             className='w-full rounded-l-lg md:w-1/6'
        //             width={300}
        //             height={200}
        //         />

        //         <div className='p-6'>
        //             <h2 className='text-xl mb-2 font-bold md:text-4xl'>
        //                 An Yujin | 안유진
        //             </h2>
        //             <p>
        //                 An Yu-jin, known mononymously as Yujin, is a South
        //                 Korean singer. She is the leader of the South Korean
        //                 girl group Ive under Starship Entertainment and a former
        //                 member of South Korean-Japanese girl group Iz*One.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Yujin
