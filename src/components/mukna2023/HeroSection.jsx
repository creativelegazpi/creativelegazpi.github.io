import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

function HeroSection() {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <img src="/mukna2023/bg-1.webp" className="hidden bs-lg:block" />
      <img src="/mukna2023/bg-2.webp" className="block bs-lg:hidden" />
    </div>
  );
}

export default HeroSection;
