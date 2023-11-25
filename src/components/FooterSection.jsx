import React from "react";

function FooterSection() {
    return (
        <div className="flex lg:flex-row md:flex-col items-stretch lg:justify-between md:justify-around lg:gap-5 md:gap-2 lg:px-5 md:px-20 max-md:flex-wrap max-md:justify-center lg:h-fit md:h-[40vh] bg-white py-10">
            <div className="lg:self-center md:self-start flex justify-between lg:gap-5 md:gap-0 lg:my-auto md:my-2">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a2e83f-d1f7-48ab-aed4-6a6052a52a90?apiKey=61d96ebfcc1645058754f2d90f7b2466&"
                    className="aspect-[2.26] object-contain object-center lg:w-[131px] md:w-[250px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black lg:block md:hidden text-lg leading-6 grow shrink basis-auto mt-1.5">
                    Contact us <br /> Privacy Policy
                </div>
            </div>
            <p className="lg:hidden md:block text-5xl text-black leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur possimus ad incidunt voluptatum magnam sapiente itaque</p>
            <div className="flex items-center justify-between gap-5 max-md:max-w-full lg:flex md:hidden max-md:flex-wrap max-md:justify-center">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5815612e-f3e8-43e7-8215-bf6539b69a13?apiKey=61d96ebfcc1645058754f2d90f7b2466&"
                    className="aspect-square object-contain object-center w-[95px]  overflow-hidden shrink-0 max-w-full my-auto"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/62946fab-50c3-47e1-b6c0-4090c33443ee?apiKey=61d96ebfcc1645058754f2d90f7b2466&"
                    className="aspect-square object-contain object-center w-[95px] overflow-hidden shrink-0 max-w-full self-start"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6b24999-a96d-4956-9a7f-996379949773?apiKey=61d96ebfcc1645058754f2d90f7b2466&"
                    className="aspect-[1.01] object-contain object-center w-[95px] overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44a70a4c-6f56-4d10-ae77-7ebec1bc0487?apiKey=61d96ebfcc1645058754f2d90f7b2466&"
                    className="aspect-[1.98] object-contain object-center w-[162px] overflow-hidden shrink-0 max-w-full my-auto"
                />
            </div>
            <div className="flex justify-between">
                <div className="text-black lg:hidden md:block text-5xl leading-[60px] grow shrink basis-auto mt-1.5">
                    Contact us <br /> Privacy Policy
                </div>
                <div className="flex">
                    <a className="hover:scale-110 transition-all duration-150" href="https://facebook.com/creativelegazpi" target="_blank">
                        <img
                            src="/newheroimgs/fblogo.svg"
                            className="aspect-[2.95] object-contain object-center lg:w-[130px] md:w-[200px] lg:h-fit md:h-[100px] scale-125 overflow-hidden self-center shrink-0 my-auto"
                        />
                    </a>
                    <a className="hover:scale-110 transition-all duration-150" href="https://instagram.com/creativelegazpi" target="_blank">
                        <img
                            src="/newheroimgs/instalogo.svg"
                            className="aspect-[2.95] object-contain object-center lg:w-[130px] md:w-[200px] lg:h-fit md:h-[100px] scale-125 overflow-hidden self-center shrink-0 my-auto"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;