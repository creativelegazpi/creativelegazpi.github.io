import React from "react";

function NavBar() {
  return (
    <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap px-14 pb-4 pt-10">
      <img
        loading="lazy"
        src="/newheroimgs/Creative Legazpi_LogoOutline.svg" className="aspect-[2.37] object-contain object-center w-[97px] overflow-hidden shrink-0 max-w-full"
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
        <button
          disabled
          className="text-white disabled:brightness-75 text-center w-62 text-lg leading-6 whitespace-nowrap bg-orange-500 self-stretch grow items-center px-5 py-3.5 rounded-[50px]"
        >
          {/* Join Mukna 2023 */}
          Registration Opening Soon
        </button>
      </div>
    </div>
  );
}

export default NavBar;