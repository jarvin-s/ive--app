import Image from 'next/image'
import React from 'react'

const Cards = () => {
    return (
        <div className='mx-auto mt-60 grid max-w-5xl grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/dal-e.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Dal-e card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/dal-e-gaeul.png'
                    className='character'
                    alt='Dal-e Gaeul plushie'
                    width={500}
                    height={500}
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/cheez.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Cheez card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/cheez-liz.png'
                    className='character-liz'
                    width={500}
                    height={500}
                    alt='Cheez Liz plushie'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/ganganji.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Ganganji card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/ganganji-yujin.png'
                    className='character-yujin'
                    width={500}
                    height={500}
                    alt='Ganganji Yujin plushie'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/erang-e.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Erang-e card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/erang-e-leeseo.png'
                    className='character'
                    width={500}
                    height={500}
                    alt='Erang-e Leeseo plushie'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/naori.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Naori card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/naori-rei.png'
                    className='character-rei'
                    width={500}
                    height={500}
                    alt='Naori Rei plushie'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <Image
                        src='/images/minive/card/cherry.png'
                        className='cover-image'
                        width={100}
                        height={100}
                        alt='Cherry card'
                    />
                </div>
                <Image
                    src='/images/minive/plushie/cherry-wonyoung.png'
                    className='character-wonyoung'
                    width={500}
                    height={500}
                    alt='Cherry Wonyoung plushie'
                />
            </div>
        </div>
    )
}

export default Cards
