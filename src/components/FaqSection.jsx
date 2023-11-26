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
                                What is Creative Legazpi?                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">This is a project under the MALIKHAING PINOY Lunsod Lunsad grant program of DTI Competitiveness and Innovation Group under LGU Legazpi City in partnership with DTI Region V, DTI Albay and Legazpi City Creative Industry Council organized by Cheerz Studio.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What is the Mukná Creative Industry Convention?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">This is a 3-day event under the Creative Legazpi project which consists of virtual conference, onsite conference, awards night, and creative expo in line with the development of our local creative industry under the Philippine Creative Industry Development Act (RA 11904)</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                Wow! The event is FREE, how do I participate in this event?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">Yes the event is free, but slots are only limited. Check out the event schedule. <a href="#" className='text-blue-500 underline font-semibold'>Register here for the Mukná Conference</a>
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How do I register for the Creative Directory?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">Just fill out our registration form to be part of our creative players profile, register <a href="#" className='text-blue-500 underline font-semibold'>here</a></p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What is the agenda on each event schedule?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">Please check out the agenda of each event <a href="#event" className="text-blue-500 underline font-semibold">here</a></p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                I'm not from Legazpi City, can I still join?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">Yes! This event is not only inclusive to Legazpi City, we love to see other creatives at this event.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                What is Creative Launchpad?
                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">The launchpad aims to showcase and give highlight to the countryside creative professionals' work, projects and portfolios. Showing the whole world our creative capabilities when it comes to all creative domains under PCIDA RA 11904.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How do I register for the Creative Launchpad?

                            </div>
                            <div className="collapse-content">
                                <p className="text-black lg:text-md md:text-3xl">We are continuously seeking for the best creative works from all domains to showcase globally, you can apply and share your portfolio with us by sending us an email at hello@creativelegazpi.ph </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title lg:text-xl md:text-5xl text-black font-medium">
                                How can I reach out to you?
                            </div>
                            <div className="collapse-content">
                                <p className='lg:text-md md:text-3xl text-black'>Please reach out to us via email at <a href="mailto:hello@creativelegazpi.ph" className='text-blue-700'>hello@creativelegazpi.ph</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;