import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'

function PulseSection() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const scaler = useTransform(scrollYProgress, [0, 1], [1, 1.25])

    return (
        <motion.div id="pulse" ref={ref} className='w-screen h-screen relative'>
            <img src="/newheroimgs/pulse bg.webp" alt="pulse" className='w-full h-full object-cover' />
            <motion.div style={{ scale: scaler }} className='w-full lg:h-3/4 md:h-full flex justify-center items-center absolute top-0'>
                <div className='flex lg:w-1/2 md:w-full md:h-1/2 lg:gap-2 md:gap-10 flex-col items-center'>
                    <img className='w-3/4' src="/newheroimgs/pulse logo.webp" alt="pulselogo" />
                    <h1 className='uppercase text-[#665FA9] text-center lg:text-[44px] md:text-[100px] break-words lg:w-full md:w-[26rem] font-semibold'>virtual summit</h1>
                    <h1 className='uppercase text-[#665FA9] text-center lg:text-[32px] md:text-[50px] font-semibold'>december 07 - 08, 2023</h1>
                    <motion.button whileHover={{ scale: 1.10 }} className='uppercase text-white text-center lg:text-[18px] md:text-[40px] lg:font-normal md:font-semibold lg:w-[325px] lg:h-[40px] md:w-3/4 md:h-[80px] flex-shrink-0 pt-2 rounded-full bg-[#E96A54]'>secure your pass today</motion.button>
                    <h1 className='text-[#262626] flex gap-2 text-center lg:text-[16px] md:text-[34px] font-extrabold mt-2'>Organized by HONU <span>
                        <img src="/newheroimgs/ico-honu 2.png" alt="ico-honu" className='md:w-[50px] lg:w-[20px]' />
                    </span>
                    </h1>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PulseSection