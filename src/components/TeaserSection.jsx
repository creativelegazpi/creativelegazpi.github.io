import React from 'react'

function TeaserSection() {
    return (
        <div className='w-full lg:h-screen md:h-[25vh] flex justify-center items-center relative'>

            <img
                src='/newheroimgs/secondsection.png'
                alt='video'
                className='w-full h-full absolute lg:object-cover md:object-contain'
            />
        </div>
    )
}

export default TeaserSection