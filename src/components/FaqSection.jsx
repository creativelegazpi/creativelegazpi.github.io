import React from 'react'

function FaqSection() {
    return (
        <div id='FAQ' className='w-screen h-fit flex justify-center items-center bg-white'>
            <div className='flex lg:flex-row md:flex-col lg:gap-0 md:gap-20 w-[80%] lg:h-[80%] md:h-full py-8'>
                <div className='lg:w-[50%] md:w-full lg:h-full md:h-[30%]'>
                    <h1 className='text-black lg:text-6xl md:text-[155px] lg:leading-relaxed md:leading-tight'>
                        Frequently<br />Asked<br /><strong>Questions</strong>
                    </h1>
                </div>
                <div className='lg:w-[50%] md:w-full lg:h-full md:h-[70%]'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What is Mukna?                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How do I register for the event?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How do I register for the Creative Directory?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What are the dates and activities for Mukna?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                I'm not from Legazpi, can I still join?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What is Artist Launchpad?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How do I register in the Artist Launchpad?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What are the government agencies involved?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How should I contact you?
                            </div>
                            <div className="collapse-content">
                                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, illum voluptatem corporis officia officiis hic libero distinctio ipsum tenetur deleniti? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempore ducimus ut accusamus, impedit nisi corrupti mollitia sint architecto quia optio omnis dolorem dolores nobis aperiam iure officiis sequi atque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;