import * as React from "react";
import { motion, useInView } from "framer-motion";

function EventSection() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id="event">
            <section ref={ref} className="flex lg:flex-row md:flex-col h-screen max-md:gap-0">
                <div className=" lg:w-[39%] md:w-full lg:h-screen md:h-1/2 max-md:ml-0">
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: isInView ? 0 : -1000 }}
                        transition={{ duration: 2, type: "spring" }} className="bg-orange-500 lg:h-screen h-full lg:border-r-2 lg:border-b-0 md:border-b-2 border-black flex flex-col w-full mx-auto px-20 py-12 max-md:max-w-full max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&" className="aspect-[3.6] object-contain object-center  w-[min(100vw,1000px)] overflow-hidden self-stretch mt-16 max-md:mt-10"
                            alt="Conference Image 1"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&" className="aspect-[2.5] object-contain object-center lg:w-[165px] md:w-[300px] overflow-hidden max-w-full mt-2 self-end"
                            alt="Conference Image 2"
                        />
                        <div className="text-black text-right lg:text-lg  md:text-3xl font-extrabold leading-6 mt-10">
                            LEGAZPI CITY
                            <br />
                            DECEMBER 8-10, 2023
                        </div>
                        <a
                            href="#"
                            className="text-white text-center lg:text-lg md:text-3xl font-bold leading-6 whitespace-nowrap bg-black lg:h-14 md:h-36 lg:w-[199px] md:w-full max-w-full items-center mt-14 mb-48 px-5 lg:py-3.5 sm:py-10 rounded-[50px] self-end max-md:my-10"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>
                <div className="flex flex-col items-stretch lg:w-[61%] h-full md:w-full max-md:ml-0">
                    <div className="flex h-full flex-col max-md:max-w-full">
                        <motion.div initial={{ x: 1000 }}
                            animate={{ x: isInView ? 0 : 1000 }}
                            transition={{ duration: 2, type: "spring", delay: 0.5 }} className="bg-cyan-400 h-[90vh] border-b-2 border-black md:h-full flex items-center justify-between gap-5 pl-12 pr-20 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <div className="flex basis-[0%] lg:-translate-y-4 md:translate-y-0 flex-col h-full justify-evenly items-stretch my-auto">
                                <div className="text-black text-right lg:text-2xl md:text-3xl font-bold leading-7 whitespace-nowrap">
                                    7-8 Dec
                                </div>
                                <div className="text-black text-right lg:text-2xl md:text-3xl font-bold leading-7 whitespace-nowrap mt-20 max-md:mt-10">
                                    8 Dec
                                </div>
                                <div className="text-black text-right lg:text-2xl md:text-3xl font-bold leading-7 whitespace-nowrap mt-52 max-md:mt-10">
                                    8-10 Dec
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] h-full justify-evenly flex-col items-stretch my-auto max-md:max-w-full">
                                <motion.a whileHover={{ scale: 1.05 }} href="#pulse">
                                    <div className="text-black lg:text-2xl md:text-3xl leading-7 max-md:max-w-full">
                                        <span className="font-bold">
                                            Pulse Virtual Conference
                                            <br />
                                        </span>
                                        <span className="">via Zoom with HONU</span>
                                    </div>
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.05 }} href="https://fb.me/e/60r09s6J9" target="_blank">
                                    <div className="text-black lg:text-2xl md:text-3xl leading-7 mt-12 max-md:max-w-full max-md:mt-10">
                                        <span className="">
                                            9am - 6pm
                                            <br />
                                        </span>
                                        <span className="font-bold">
                                            Mukna Conference (Creative Industry Conference)
                                            <br />
                                        </span>
                                        <span className="">
                                            @ Proxy by the Oriental
                                            <br />
                                            <br />
                                            7pm - 11pm
                                            <br />
                                        </span>
                                        <span className="font-bold">Mukna Creative Awards</span>
                                        <span className="">(Formal attire)</span>
                                        <br />
                                        <span className="">@ Oriental Hotel</span>
                                    </div>
                                </motion.a>
                                <div className="text-black lg:text-2xl md:text-3xl leading-7 mt-11 max-md:max-w-full max-md:mt-10">
                                    <span className="">
                                        10am - 8pm
                                        <br />
                                    </span>
                                    <span className="font-bold">Mukna Mukna Creative Expo</span>
                                    <br />
                                    <span className="">@ Ayala Malls Legazpi</span>
                                </div>
                            </div>
                        </motion.div>
                        <div className="bg-[#65B791] h-[200px] flex pl-0 flex-col py-px max-md:max-w-full">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventSection;