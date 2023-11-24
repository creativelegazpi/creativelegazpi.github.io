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
              <motion.h1
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Mukna
              </motion.h1>
              <motion.h1 initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.1 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Directory
              </motion.h1>
              <motion.h1 initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.2 }} className="text-black text-[70px] font-semibold leading-6 my-auto">
                Launchpad
              </motion.h1>
              <motion.h1 initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.3 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Pulse
              </motion.h1>
              <motion.h1 initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.4 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                Blog
              </motion.h1>
              <motion.h1 initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "backOut", delay: 0.5 }} className="text-black text-[70px] font-semibold leading-6 self-center my-auto">
                FAQ
              </motion.h1>
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
        <img
          loading="lazy"
          src="/newheroimgs/Creative Legazpi_LogoOutline.svg" className="aspect-[2.37] object-center md:w-[200px] lg:w-[97px] scale-0 sm:scale-150 overflow-hidden max-w-full"
          alt="Image description"
        />
      </div>
      <div className="items-start hidden lg:flex justify-between gap-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <a href="#mukna" className="text-black text-lg leading-6 self-center my-auto">
          <h2>Mukna</h2>
        </a>
        <a href="#directory" className="text-black text-lg leading-6 self-center my-auto">
          <h2>Directory</h2>
        </a>
        <a href="#launchpad" className="text-black text-lg leading-6 my-auto">
          <h2 >
            Launchpad
          </h2>
        </a>
        <a href="#pulse" className="text-black text-lg leading-6 self-center my-auto">
          <h2>Pulse</h2>
        </a>
        <a href="#blog" className="text-black text-lg leading-6 self-center my-auto">
          <h2>Blog</h2>
        </a>
        <a href="#FAQ" className="text-black text-lg leading-6 self-center my-auto">
          <h2>FAQ</h2>
        </a>
        <button
          disabled
          className="text-white disabled:brightness-75 text-center w-62 text-lg leading-6 whitespace-nowrap bg-orange-500 self-stretch grow items-center px-5 py-3.5 rounded-[50px]"
        >
          {/* Join Mukna 2023 */}
          Registration Opening Soon
        </button>
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