import React from "react";

function NavBar() {
  return (
    <nav className="px-[5vw] mt-5 flex items-stretch justify-between gap-5 max-md:flex-wrap top-10 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="97"
        height="41"
        fill="none"
        viewBox="0 0 97 41"
      >
        <path fill="url(#pattern0)" d="M0 0H97V41H0z"></path>
        <defs>
          <pattern
            id="pattern0"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use transform="scale(.0103 .02439)" xlinkHref="#image0_11_4"></use>
          </pattern>
          <image
            id="image0_11_4"
            width="97"
            height="41"
            xlinkHref="data:image/png;base64,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"
          ></image>
        </defs>
      </svg>

      <div className="self-center flex items-start justify-between gap-5 my-auto px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <a href="#" className="text-white text-lg leading-6 self-center my-auto">
          Mukna
        </a>
        <a href="#" className="text-white text-lg leading-6 self-center my-auto">
          Directory
        </a>
        <a href="#" className="text-white text-lg leading-6 self-center my-auto">
          Pulse
        </a>
        <button className="text-white text-center text-lg leading-6 whitespace-nowrap bg-black self-stretch grow items-center px-5 py-2.5 rounded-[50px]">
          Register
        </button>
      </div>
    </nav>
  );
}

export default NavBar
