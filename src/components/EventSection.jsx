import * as React from "react";
import { motion, useInView } from "framer-motion";

function EventSection() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id="event">
            <section ref={ref} className="flex flex-col lg:flex-row items-stretch">
              

                <div className="flex flex-col items-stretch lg:w-[61%] h-full md:w-full max-md:ml-0">
                    <div className="flex h-full flex-col max-md:max-w-full">
                        <motion.div initial={{ x: 1000 }}
                            animate={{ x: isInView ? 0 : 1000 }}
                            transition={{ duration: 2, type: "spring", delay: 0.5 }} className="bg-cyan-400 border-b-2 border-black md:h-full flex items-center justify-between gap-5 pl-12 pr-20 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5 py-[80px]">

                            <div className="text-[0.8em] bs-md:text-[0.9em] bs-xl:text-[0.95em] bs-xxl:text-[1em]">
                                <div className="flex flex-wrap w-full">
                                    <div className="min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[170px]"></div>
                                    <div className="flex-grow">
                                        <h1 className="text-[2em] text-black font-semibold mb-4">Calendar of Activities</h1>
                                    </div>
                                </div>

                                <div className="flex w-full mb-5">
                                    <div className="min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[170px]">
                                        <div className="text-black text-[1.4em] font-bold leading-7 whitespace-nowrap">
                                            08 Aug
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <motion.a whileHover={{ scale: 1.05 }}>
                                            <div className="text-black text-[1.4em] leading-7 max-md:max-w-full mb-4">OPENING</div>

                                            <div className="mb-4">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Opening & Ribbon-cutting of Agri Fair, Beer Plaza,& Baratillo </span>
        
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="italic">Sawangan Park</span>
                                                </div>
                                            </div>

                                            <div className="mb-1">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Search for Lakan ng Ibalong </span>
                                                </div>
                                            </div>

                                          
                                </div>

                                <div className="flex w-full mb-5">
                                    <div className="min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[170px]">
                                        <div className="text-black text-[1.4em] font-bold leading-7 whitespace-nowrap">
                                            09-Aug
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <motion.a whileHover={{ scale: 1.05 }}>
                                            <div className="">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">9 Opening Ceremonies</span>
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="italic">" ▪ Eucharistic Mass"</span>
                                                </div>
                                            </div>
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap w-full">
                                    <div className="min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[170px]">
                                        <div className="text-black text-[1.4em] font-bold leading-7 whitespace-nowrap">
                                            13 Dec
                                        </div>
                                    </div>

                                    <div className="flex-grow mb-5">
                                        <motion.a whileHover={{ scale: 1.05 }}>
                                            <div className="mb-5">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Mukná Conference</span>
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full mb-2">
                                                    <span className="italic">9AM-6PM at The Pepperland Hotel</span>
                                                </div>

                                                <div>
                                                    <a href="https://partiful.com/e/QcGsGgyNDz50EMop2yAc" target="_blank" className="px-[30px] pt-[6px] text-[0.9em] pb-[8px] text-white hover:scale-110 transition-all duration-150 text-center leading-6 bg-black rounded-[50px]">Register here for free</a>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Mukná Awards Night</span>
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="italic">7PM-11PM at The Oriental Hotel</span>
                                                </div>
                                            </div>
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="flex w-full">
                                    <div className="min-w-[120px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[170px]">
                                        <div className="text-black text-[1.4em] font-bold leading-7 whitespace-nowrap">
                                            14 Dec
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <motion.a whileHover={{ scale: 1.05 }}>
                                            <div className="text-black text-[1.4em] leading-7 max-md:max-w-full mb-4">CLOSING</div>

                                            <div className="mb-4">
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Mukná Arts Day</span>
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="italic">1PM-6PM at Ayala Malls Legazpi City</span>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <span className="font-bold">Mukná Arts Tour</span>
                                                </div>
                                                <div className="text-black text-[1.4em] leading-7 max-md:max-w-full">
                                                    <div className="italic">Tour around creative spaces in Legazpi</div>
                                                    <div className="italic">9AM onwards</div>
                                                </div>
                                            </div>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="bg-[#65B791] h-[200px] flex justify-center items-center px-[50px]">
                            <div className='px-4'>
                                <p className="text-black mb-4">Presented by:</p>

                                <div className="flex justify-center items-center">
                                    <div className="px-3">
                                        <img
                                            loading="lazy"
                                            srcSet="/home/logos/dti.webp"
                                            className="w-[auto] max-h-[70px] h-full"
                                        />
                                    </div>

                                    <div className="px-3">
                                        <img
                                            loading="lazy"
                                            srcSet="/home/logos/legazpi-city.webp"
                                            className="w-[auto] max-h-[70px] h-full"
                                        />
                                    </div>

                                    <div className="px-3">
                                        <img
                                            loading="lazy"
                                            srcSet="/home/logos/legazpi-city-creative-industry-council.webp"
                                            className="w-[auto] max-h-[70px] h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='px-4'>
                                <p className="text-black mb-4">Organized by:</p>

                                <div className="flex justify-center items-center">
                                    <div className="px-3">
                                        <img
                                            loading="lazy"
                                            srcSet="/home/logos/cheers-studio.webp"
                                            className="w-[auto] max-h-[70px] h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventSection;