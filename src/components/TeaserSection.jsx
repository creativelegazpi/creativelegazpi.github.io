import React from 'react'

function TeaserSection() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[80%] h-[80%] bg-black rounded-xl'>
                <img
                    src='/heroimgs/videosect.png'
                    alt='video'
                    className='w-full h-full rounded-xl'
                />
            </div>
        </div>
    )
}

export default TeaserSection