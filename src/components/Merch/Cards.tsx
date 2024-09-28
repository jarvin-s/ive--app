import React from 'react'

const Cards = () => {
    return (
        <div className='mx-auto mt-32 grid max-w-5xl grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/dal-e.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/dal-e-gaeul.png'
                    className='character'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/cheez.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/cheez-liz.png'
                    className='character-liz'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/ganganji.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/ganganji-yujin.png'
                    className='character-yujin'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/erang-e.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/erang-e-leeseo.png'
                    className='character'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/naori.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/naori-rei.png'
                    className='character-rei'
                />
            </div>
            <div className='card'>
                <div className='wrapper'>
                    <img
                        src='/images/minive/card/cherry.png'
                        className='cover-image'
                    />
                </div>
                <img
                    src='/images/minive/plushie/cherry-wonyoung.png'
                    className='character-wonyoung'
                />
            </div>
        </div>
    )
}

export default Cards
