import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scrollspring = useSpring(scrollYProgress)
  const y1 = useTransform(scrollspring, [0, 1], [150, -150])
  const y2 = useTransform(scrollspring, [0, 1], [100, -100])
  const y3 = useTransform(scrollspring, [0, 1], [80, -80])
  const y4 = useTransform(scrollspring, [0, 1], [100, -100])
  const y5 = useTransform(scrollspring, [0, 1], [120, -120])
  const y6 = useTransform(scrollspring, [0, 1], [50, -50])
  const y7 = useTransform(scrollspring, [0, 1], [40, -40])

  return (

    <div className="w-full relative" ref={ref}>
      <img src="/newheroimgs/bghero22.png" alt="bg-image" className="w-full object-fill hidden lg:block" />
    
      <div className="w-full h-fit lg:hidden">
        <img src="/newheroimgs/mobilebg.png" alt="mobilebg" className="w-full h-full lg:hidden md:block object-contain" />
      </div>
      <motion.img initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 2, type: "spring" }} style={{ y: y1 }} src="/newheroimgs/muknahead.png" alt="headlogo" className="absolute top-8 right-[18vw] hidden lg:block" />
      <motion.img initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 2, type: "spring" }} style={{ y: y4 }} src="/newheroimgs/performingarts.png" alt="bodylogo" className="absolute bottom-80 right-96 hidden lg:block" />
      <motion.img initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 2, type: "spring" }} style={{ y: y5 }} src="/newheroimgs/91.png" alt="bodylogo" className="absolute bottom-60 -right-24 hidden lg:block" />
      <img src="/newheroimgs/muknalogo.png" alt="logo" className="absolute bottom-32 right-10 hidden lg:block animate-bounce" />

      <div className="absolute right-[24vw] top-[23vw] lg:right-[37vw] lg:top-[6.8vw]">
        
      </div>

      <div className="absolute right-[24vw] top-[54vw] lg:right-[37vw] lg:top-[21.5vw]">
       
      </div>

      <div className="absolute right-[24vw] top-[92vw] lg:right-[37vw] lg:top-[38vw]">
        <motion.h1 style={{ y: y7 }} className="text-black text-right text-[3vw] lg:text-[1.5vw] font-extrabold relative">
          LEGAZPI CITY <br /> AUGUST 8-31, 2024
        </motion.h1>
      </div>

      <div className="absolute right-[24vw] top-[107vw] lg:right-[37vw] lg:top-[45.3vw]">
        <motion.a
          href="https://legazpi.gov.ph/activities-3/"
          target="_blank"
       
        >
          Ibalong Festival 2024
        </motion.a>
        {/* <div className="bg-slate-500 w-80 h-52 rounded-3xl opacity-0 absolute top-0 left-0 peer-hover:opacity-100 hover:opacity-100 sm:hidden lg:block transition-opacity duration-200 ease-in">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-slate-600 absolute -right-10 scale-150 bottom-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

          <div>
            <h1 className="text-white text-2xl font-bold leading-6 mt-6 ml-6">
              Join our mailing list
            </h1>
            <p className="text-white text-sm font-normal leading-6 mt-2 ml-6">
              Stay up to date with the latest news and updates from the
              Ibalong Festival 2024 team.<br />
              <a href="https://www.facebook.com/creativelegazpi" className="underline text-blue-200 text-lg" target="_blank">Be sure to check our facebook page for more information.</a>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
