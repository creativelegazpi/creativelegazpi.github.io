import * as React from 'react'
import { motion, useInView } from 'framer-motion'

function CreativeLaunchpad() {
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    return (
        <div ref={ref} className='w-screen overflow-hidden h-screen lg:block md:flex md:justify-center md:items-center relative'>
            <img src="/public/newheroimgs/launchpad.png" alt="launchpad" className='w-full h-full object-cover' />
            <div className='absolute lg:top-52 lg:left-20 lg:w-[30rem] md:w-full md:h-[20rem]'>
                <div className="flex flex-col gap-5 px-5 h-full">
                    <motion.div animate={{ y: isInView ? 0 : 1000 }} transition={{ duration: 2, type: "spring" }} className="text-white lg:text-6xl md:text-[150px] lg:leading-[77px] md:leading-[150px] self-stretch w-full -mr-5 max-md:text-4xl max-md:leading-[53px]">
                        <span className="">Artist</span>
                        <br />
                        <span className="font-bold">Launchpad</span>
                    </motion.div>
                    <motion.div animate={{ y: isInView ? 0 : -1000 }} transition={{ duration: 2, type: "spring", delay: 0.3 }} className="text-white lg:text-lg md:text-[45px] lg:leading-6 md:leading-10 self-stretch w-full -mr-5 mt-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.div>
                    <motion.a animate={{ x: isInView ? 0 : 1000 }} transition={{ duration: 2, type: "spring", delay: 0.4 }} href='#creativelaunchpad' disabled className="text-white disabled:brightness-50 text-center lg:text-lg md:text-4xl leading-6 whitespace-nowrap bg-orange-500 lg:w-[271px] md:w-full items-center mt-10 lg:px-5 lg:py-3 md:py-10 rounded-[50px]">
                        Available Soon..
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default CreativeLaunchpad;