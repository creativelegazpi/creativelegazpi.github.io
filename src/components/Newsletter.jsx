import React from "react";

function Newsletter() {
    return (
        <div className="bg-neutral-900 flex flex-col items-center px-5">
            <div className="flex w-[723px] max-w-full flex-col mt-14 mb-12 max-md:my-10">
                <div className="text-white text-center text-3xl font-bold leading-10 self-stretch whitespace-nowrap max-md:max-w-full">
                    Subscribe to Our Newsletter for Exclusive Updates!
                </div>
                <div className="text-white text-center text-xl leading-6 self-center whitespace-nowrap mt-3.5 max-md:max-w-full">
                    Stay in the loop with the latest news, special offers, and insider insights.
                </div>
                <input
                    className="aspect-[15.13] text-black focus-visible:border-orange-400 rounded-md p-4 object-contain object-center w-[590px] bg-white overflow-hidden self-center max-w-full mt-8"
                />
                <div className="text-white text-center text-lg leading-6 whitespace-nowrap bg-orange-500 self-center w-[248px] max-w-full items-center mt-8 px-5 py-3.5 rounded-[50px]">
                    SUBSCRIBE NOW
                </div>
            </div>
        </div>
    );
}

export default Newsletter;