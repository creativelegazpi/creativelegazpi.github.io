import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ArtistSection() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div id='directory' className='w-screen lg:h-screen md:h-[110vh] relative flex lg:flex-row md:flex-col items-center overflow-hidden' ref={ref}>
            <motion.div animate={{ x: isInView ? 0 : -1000 }} transition={{ duration: 2, type: "spring" }} className="flex flex-col md:bg-white items-stretch lg:w-1/4 md:w-full lg:px-5 md:px-20 lg:h-fit md:h-[50vh] lg:ml-28 py-14 mb-10  md:ml-0 lg:absolute md:relative">
                <h1 className="text-black lg:text-6xl md:text-[170px] lg:leading-[77px] md:leading-[150px] w-full -mr-5 max-md:text-4xl max-md:leading-[53px]">
                    <span>Creative</span> <br />
                    <span className="font-bold">Directory</span>
                </h1>
                <p className="text-black lg:text-lg md:text-5xl leading-6 w-full -mr-5 mt-9">
                    Explore, connect and network with the creative minds of Legazpi City
                </p>
                <div className="flex lg:flex-row md:flex-col w-full items-stretch justify-between lg:gap-2.5 md:gap-5 -mr-5 mt-10 pr-9 max-md:pr-5">
                    <button
                        href="#explore"
                        disabled
                        className="text-white disabled:brightness-75 text-center lg:text-lg md:text-4xl leading-6 whitespace-nowrap bg-orange-500 grow items-center px-5 lg:py-3 md:py-8 rounded-[50px]"
                    >
                        Explore
                    </button>
                    <a
                        href="#register"
                        disabled
                        className="text-white disabled:brightness-75 text-center lg:text-lg md:text-4xl leading-6 whitespace-nowrap bg-black grow items-center px-5 lg:py-3 md:py-8 rounded-[50px]"
                    >
                        Register
                    </a>
                </div>
            </motion.div>
            <img src="/newheroimgs/directory mockup (1).webp" alt="artistsection" className='w-full h-full object-contain lg:scale-100 md:scale-[1.75] bg-white lg:my-0 md:my-10 -z-10 lg:translate-x-0 md:-translate-x-60' />
        </div>
    )
}

export default ArtistSection