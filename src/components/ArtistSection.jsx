import React from 'react'

function ArtistSection() {
    return (
        <div className='w-screen h-screen relative flex items-center'>
            <div className="flex flex-col items-stretch w-1/4 px-5 ml-28 absolute">
                <h1 className="text-black text-6xl leading-[77px] w-full -mr-5 max-md:text-4xl max-md:leading-[53px]">
                    <span>Artist</span> <br />
                    <span className="font-bold">Directory</span>
                </h1>
                <p className="text-black text-lg leading-6 w-full -mr-5 mt-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex w-full items-stretch justify-between gap-2.5 -mr-5 mt-10 pr-9 max-md:pr-5">
                    <button
                        href="#explore"
                        disabled
                        className="text-white disabled:brightness-75 text-center text-lg leading-6 whitespace-nowrap bg-orange-500 grow items-center px-5 py-3 rounded-[50px]"
                    >
                        Explore
                    </button>
                    <a
                        href="#register"
                        disabled
                        className="text-white disabled:brightness-75 text-center text-lg leading-6 whitespace-nowrap bg-black grow items-center px-5 py-3 rounded-[50px]"
                    >
                        Register
                    </a>
                </div>
            </div>
            <img src="/newheroimgs/artistsection.png" alt="artistsection" className='w-full h-full object-contain' />
        </div>
    )
}

export default ArtistSection