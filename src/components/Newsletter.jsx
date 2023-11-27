import React, { useEffect, useRef } from "react";

function Newsletter() {
    const [disabled, setDisabled] = React.useState(false);
    const ref = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        ref.current.value = ""
        setDisabled(false)
    }

    return (
        <div className="bg-neutral-900 lg:h-fit md:h-[55vh] flex flex-col items-center px-5">
            <div className="flex w-[723px]  max-w-full flex-col mt-14 mb-12 max-md:my-10">
                <div className="text-white text-center lg:text-3xl md:text-[80px] font-bold lg:leading-10 md:leading-tight self-stretch lg:whitespace-nowrap md:whitespace-normal max-md:max-w-full">
                    Subscribe to Our Newsletter for Exclusive Updates!
                </div>
                <div className="text-white text-center lg:text-xl md:text-5xl leading-6 self-center lg:whitespace-nowrap md:whitespace-normal lg:mt-3.5 md:mt-5 max-md:max-w-full">
                    Stay in the loop with the latest news, special offers, and insider insights.
                </div>
                <div id="mc_embed_shell" className="self-center flex flex-col lg:w-[590px] md:w-full" >
                    <div id="mc_embed_signup">
                        <form
                            action="https://creativelegazpi.us10.list-manage.com/subscribe/post?u=77ef49f85807c70cbe62da40c&id=595222ba05&f_id=0054dbe5f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="self-center flex flex-col lg:w-[590px] md:w-full"
                            target="_self"
                            noValidate=""
                        >
                            <div id="mc_embed_signup_scroll">

                                <div className="mc-field-group">
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        className="aspect-[15.13] text-black text-center text-4xl focus-visible:border-orange-400 rounded-md  lg:p-4 md:p-10 object-contain object-center lg:w-[590px] md:w-full bg-white overflow-hidden self-center max-w-full lg:mt-4 md:mt-14"
                                        id="mce-EMAIL"
                                        required=""
                                        defaultValue=""
                                        ref={ref}
                                    />
                                    <input type="checkbox" onChange={() => setDisabled(!disabled)} id="confirmation" className="lg:mt-4 md:mt-8 scale-150" name="confirmation" />
                                    <label htmlFor="confirmation" className="ml-4 lg:text-lg md:text-3xl text-justify text-white">By joining our newsletter list, you agree to receive news and updates from Creative Legazpi. You can opt out of our marketing emails anytime</label>

                                </div>
                                <div id="mce-responses" className="clear foot">
                                    <div
                                        className="response"
                                        id="mce-error-response"
                                        style={{ display: "none" }}
                                    />
                                    <div
                                        className="response"
                                        id="mce-success-response"
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <div
                                    aria-hidden="true"
                                    style={{ position: "absolute", left: "-5000px" }}
                                >
                                    <input
                                        type="text"
                                        name="b_77ef49f85807c70cbe62da40c_595222ba05"
                                        tabIndex={-1}
                                        defaultValue=""
                                    />
                                </div>
                                <div className="optionalParent">
                                    <div className="flex justify-center">
                                        <input
                                            type="submit"
                                            name="subscribe"
                                            id="mc-embedded-subscribe"
                                            defaultValue="Subscribe"
                                            disabled={!disabled}
                                            onClick={() => handleSubmit}
                                            className="text-white disabled:brightness-50 text-center lg:text-lg md:text-3xl leading-6 whitespace-nowrap bg-orange-500 self-center w-[248px] md:w-3/4 max-w-full items-center mt-4 px-5 lg:py-3.5 md:py-8 rounded-[50px]"
                                        />

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* <form onSubmit={handleSubmit} className="self-center flex flex-col lg:w-[590px] md:w-full">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        className="aspect-[15.13] text-black text-4xl focus-visible:border-orange-400 rounded-md  lg:p-4 md:p-10 object-contain object-center lg:w-[590px] md:w-full bg-white overflow-hidden self-center max-w-full lg:mt-8 md:mt-14"
                    />
                    <button className="text-white text-center lg:text-lg md:text-3xl leading-6 whitespace-nowrap bg-orange-500 self-center w-[248px] md:w-3/4 max-w-full items-center mt-8 px-5 lg:py-3.5 md:py-8 rounded-[50px]">
                        SUBSCRIBE NOW
                    </button>
                </form> */}
            </div>
        </div>
    );
}

export default Newsletter;