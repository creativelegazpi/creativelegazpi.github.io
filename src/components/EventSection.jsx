import * as React from "react";

function EventSection() {
    return (
        <div>
            <section className="flex max-md:flex-col h-screen max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="bg-orange-500 flex grow flex-col w-full mx-auto px-20 py-12 max-md:max-w-full max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c43fdf-a8bb-47b6-90a6-e3cd15a3c23e?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&" className="aspect-[3.6] object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:mt-10"
                            alt="Conference Image 1"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e846f257-6d16-4cca-93aa-dc4ad9154b05?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&" className="aspect-[2.5] object-contain object-center w-[165px] overflow-hidden max-w-full mt-2 self-end"
                            alt="Conference Image 2"
                        />
                        <div className="text-black text-right text-lg font-extrabold leading-6 mt-10">
                            LEGAZPI CITY
                            <br />
                            DECEMBER 7-9, 2023
                        </div>
                        <a
                            href="#"
                            className="text-white text-center text-lg leading-6 whitespace-nowrap bg-black w-[199px] max-w-full items-center mt-14 mb-48 px-5 py-3.5 rounded-[50px] self-end max-md:my-10"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full">
                        <div className="bg-cyan-400 h-[80%] flex items-center justify-between gap-5 pl-12 pr-20 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <div className="flex basis-[0%] flex-col items-stretch my-auto">
                                <div className="text-black text-right text-2xl font-bold leading-7 whitespace-nowrap">
                                    7-8 Dec
                                </div>
                                <div className="text-black text-right text-2xl font-bold leading-7 whitespace-nowrap mt-20 max-md:mt-10">
                                    8 Dec
                                </div>
                                <div className="text-black text-right text-2xl font-bold leading-7 whitespace-nowrap mt-52 max-md:mt-10">
                                    7-9 Dec
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
                                <div className="text-black text-2xl leading-7 max-md:max-w-full">
                                    <span className="font-bold">
                                        Pulse Virtual Conference
                                        <br />
                                    </span>
                                    <span className="">via Zoom with HONU</span>
                                </div>
                                <div className="text-black text-2xl leading-7 mt-12 max-md:max-w-full max-md:mt-10">
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
                                    <span className="">Please be in your formal attire</span>
                                </div>
                                <div className="text-black text-2xl leading-7 mt-11 max-md:max-w-full max-md:mt-10">
                                    <span className="">
                                        10am - 8pm
                                        <br />
                                    </span>
                                    <span className="font-bold">Mukna Mukna Creative Expo</span>
                                    <span className="">@ Ayala Malls Legazpi</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#65B791] h-[20%] flex pl-0 flex-col py-px max-md:max-w-full">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventSection;