import * as React from 'react'
import { motion, useInView } from 'framer-motion'

function CreativeLaunchpad() {
    const ref = React.useRef(null);
    const isInView = useInView(ref);
    const [isView, setIsView] = React.useState(false);

    React.useEffect(() => {
        setIsView(isInView)
    }, [isInView])

    return (
        <div id='launchpad' ref={ref} className='w-screen overflow-hidden h-screen lg:block md:flex md:justify-center md:items-center relative'>
            <img src="/newheroimgs/launchpad.png" alt="launchpad" className='w-full h-full object-cover' />
            <div className='absolute lg:top-52 lg:left-20 lg:w-[30rem] md:w-full md:h-[20rem]'>
                <div className="flex flex-col gap-5 px-5 h-full">
                    <motion.div animate={{ opacity: isView ? 1 : 0 }} transition={{ duration: 1, type: "spring" }} className="text-white lg:text-6xl md:text-[150px] lg:leading-[77px] md:leading-[150px] self-stretch w-full -mr-5 max-md:text-4xl max-md:leading-[53px]">
                        <span className="">Artist</span>
                        <br />
                        <span className="font-bold">Launchpad</span>
                    </motion.div>
                    <motion.div animate={{ opacity: isView ? 1 : 0 }} transition={{ duration: 1, type: "spring", delay: 0.3 }} className="text-white lg:text-lg md:text-[45px] lg:leading-6 md:leading-10 self-stretch w-full -mr-5 mt-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.div>
                    <motion.a whileHover={{ scale: 1.25 }} animate={{ opacity: isView ? 1 : 0 }} transition={{ duration: 0.5, type: "spring" }} href='#creativelaunchpad' disabled className="text-white disabled:brightness-50 text-center lg:text-lg md:text-4xl leading-6 whitespace-nowrap bg-orange-500 lg:w-[271px] md:w-full items-center mt-10 lg:px-5 lg:py-3 md:py-10 rounded-[50px]">
                        Available Soon..
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default CreativeLaunchpad;