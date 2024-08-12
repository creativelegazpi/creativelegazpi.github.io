import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="flex bg-white justify-between items-center gap-5 max-md:flex-wrap px-14 pb-4 pt-10">
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="w-screen h-screen flex justify-center items-center bg-white z-10 fixed top-0 left-0"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <div className="flex flex-col justify-center items-center gap-4 h-[70%]">
              <motion.a
                href="#teaser"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Mukna
              </motion.a>
              <motion.a
                href="#directory"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.1 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Directory
              </motion.a>
              <motion.a
                href="#launchpad"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.2 }} className="text-black text-[70px] font-semibold leading-6 my-auto">
                Launchpad
              </motion.a>
              <motion.a
                href="#pulse"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.3 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Pulse
              </motion.a>
              <motion.a
                href="#blog"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.4 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Blog
              </motion.a>
              <motion.a
                href="#FAQ"
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.5 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                FAQ
              </motion.a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-20 md:p-10 lg:p-0">
        <motion.svg
          width={80}
          height={80}
          viewBox="0 0 23 20"
          animate={{ rotate: navbarOpen ? 90 : 0 }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center w-full max-w-[77px] max-h-[80px] lg:hidden z-20"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <line
            x1={1}
            y1={1}
            x2={navbarOpen ? 0 : 22}
            y2={1}
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <line
            x1={1}
            y1={navbarOpen ? 1 : 10}
            x2={22}
            y2={navbarOpen ? 20 : 10}
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <line
            x1={1}
            y1={19}
            x2={22}
            y2={navbarOpen ? 1 : 19}
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </motion.svg>
        <div className="flex gap-20 lg:ml-0 md:-ml-12">
          <img
            loading="lazy"
            src="/newheroimgs/Creative Legazpi_LogoOutline.svg" className="aspect-[2.37] object-center md:w-[400px] lg:w-[157px] overflow-hidden max-w-full"
            alt="Image description"
          />
          <img src="/newheroimgs/MP_Original.webp" className=" object-contain object-center md:w-[250px] lg:w-[127px] scale-0 sm:scale-150  overflow-hidden max-w-full" alt="mplogo" />
          <img src="/newheroimgs/logo-lunsodlunsad.png" className=" object-contain object-center md:w-[250px] lg:w-[97px] overflow-hidden max-w-full" alt="logolunsodlunsad" />
        </div>
      </div>
      <div className="items-start [&:has(a:hover)>a:not(:hover)]:scale-[0.8] [&:has(a:hover)>a:hover]:scale-[1.2] transition-all duration-300 hidden lg:flex justify-between gap-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <a href="#teaser" className="transition-all duration-300 text-black text-lg leading-6 self-center my-auto">
          <h2>Mukna</h2>
        </a>

        <a href="#directory" className="text-black transition-all duration-300 text-lg leading-6 self-center my-auto">
          <h2>Directory</h2>
        </a>
        <a href="#launchpad" className="text-black transition-all duration-300 text-lg leading-6 my-auto">
          <h2 >
            Launchpad
          </h2>
        </a>
        <a href="#pulse" className="text-black transition-all duration-300 text-lg leading-6 self-center my-auto">
          <h2>Pulse</h2>
        </a>
        <a href="#blog" className="text-black transition-all duration-300 text-lg leading-6 self-center my-auto">
          <h2>Blog</h2>
        </a>
        <a href="#FAQ" className="text-black transition-all duration-300 text-lg leading-6 self-center my-auto">
          <h2>FAQ</h2>
        </a>
        <a
          href="https://partiful.com/e/QcGsGgyNDz50EMop2yAc"
          target="_blank"
          disabled
          className="text-white disabled:brightness-75 text-center w-62 text-lg leading-6 whitespace-nowrap bg-orange-500 self-stretch grow items-center px-5 py-3.5 rounded-[50px]"
        >
          {/* Join Mukna 2023 */}
          Join Mukna 2023
        </a>
      </div>
      {/* <button
        disabled
        className="text-white disabled:brightness-75 text-center w-96 h-24 lg:text-lg md:text-2xl  leading-6 whitespace-nowrap lg:hidden sm:block bg-orange-400 items-center self-center px-5 py-3.5 rounded-[50px]"
      >
        
        Registration Opening Soon
      </button> */}
    </div>
  );
}

export default NavBar;