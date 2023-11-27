import React from 'react'

function TeaserSection() {
    return (
        <div id='teaser' className='w-full lg:h-screen md:h-[25vh] flex justify-center items-center relative'>
            <h1 className='absolute text-white bottom-10 left-10 text-whites z-10 font-bold text-2xl'>Mukna 2023 | 8 - 10 Dec 2023</h1>
            <img
                src='/newheroimgs/secondsection.png'
                alt='video'
                className='w-full h-full absolute lg:object-cover md:object-contain'
            />
        </div>
    )
}

export default TeaserSection