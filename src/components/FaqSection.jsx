import React from 'react'

function FaqSection() {
    return (
        <div id='FAQ' className='w-screen h-screen flex justify-center items-center bg-white'>
            <div className='flex w-[80%] h-[80%]'>
                <div className='w-[50%] h-full'>
                    <h1 className='text-black text-6xl leading-relaxed'>
                        Frequently<br />Asked<br /><strong>Questions</strong>
                    </h1>
                </div>
                <div className='w-[50%] h-full'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                What is Mukna?                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                How do I register for the event?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                How do I register for the Creative Directory?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                What are the dates and activities for Mukna?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                I'm not from Legazpi, can I still join?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                What is Artist Launchpad?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                How do I register in the Artist Launchpad?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                What are the government agencies involved?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl text-black font-medium">
                                How should I contact you?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;