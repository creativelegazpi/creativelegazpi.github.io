import React from "react";

function Newsletter() {
    return (
        <div className="bg-neutral-900 lg:h-fit md:h-[50vh] flex flex-col items-center px-5">
            <div className="flex w-[723px]  max-w-full flex-col mt-14 mb-12 max-md:my-10">
                <div className="text-white text-center lg:text-3xl md:text-[80px] font-bold lg:leading-10 md:leading-tight self-stretch lg:whitespace-nowrap md:whitespace-normal max-md:max-w-full">
                    Subscribe to Our Newsletter for Exclusive Updates!
                </div>
                <div className="text-white text-center lg:text-xl md:text-5xl leading-6 self-center lg:whitespace-nowrap md:whitespace-normal lg:mt-3.5 md:mt-5 max-md:max-w-full">
                    Stay in the loop with the latest news, special offers, and insider insights.
                </div>
                <input
                    className="aspect-[15.13] text-black text-4xl focus-visible:border-orange-400 rounded-md  lg:p-4 md:p-10 object-contain object-center lg:w-[590px] md:w-full bg-white overflow-hidden self-center max-w-full lg:mt-8 md:mt-14"
                />
                <div className="text-white text-center lg:text-lg md:text-3xl leading-6 whitespace-nowrap bg-orange-500 self-center w-[248px] md:w-3/4 max-w-full items-center mt-8 px-5 lg:py-3.5 md:py-8 rounded-[50px]">
                    SUBSCRIBE NOW
                </div>
            </div>
        </div>
    );
}

export default Newsletter;