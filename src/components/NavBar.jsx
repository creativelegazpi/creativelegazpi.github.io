import React from "react";

function NavBar() {
  return (
    <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap px-14 pb-4 pt-10">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac124f-e02f-40f0-91ad-70b573b1c50a?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&" className="aspect-[2.37] object-contain object-center w-[97px] overflow-hidden shrink-0 max-w-full"
        alt="Image description"
      />
      <div className="flex items-start justify-between gap-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <h2 className="text-black text-lg leading-6 self-center my-auto">
          Mukna
        </h2>
        <h2 className="text-black text-lg leading-6 self-center my-auto">
          Directory
        </h2>
        <h2 className="text-black text-lg leading-6 my-auto">
          Artist Launchpad
        </h2>
        <h2 className="text-black text-lg leading-6 self-center my-auto">
          Pulse
        </h2>
        <h2 className="text-black text-lg leading-6 self-center my-auto">
          Blog
        </h2>
        <h2 className="text-black text-lg leading-6 self-center my-auto">
          FAQ
        </h2>
        <a
          href="..."
          className="text-white text-center w-60 text-lg leading-6 whitespace-nowrap bg-orange-500 self-stretch grow items-center px-5 py-3.5 rounded-[50px]"
        >
          Join Mukna 2023
        </a>
      </div>
    </div>
  );
}

export default NavBar;