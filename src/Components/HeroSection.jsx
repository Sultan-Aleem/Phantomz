import { useEffect, useRef } from "react";
import StarBackground from "./StarBackground";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion } from "motion/react";

const HeroSection = () => {
  const leftIntroRef = useRef(null);
  const leftHeadingRef = useRef(null);
  const rightParagraphRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(leftHeadingRef.current, {
        type: "chars",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(leftIntroRef.current, {
        opacity: 0,
        y: 10,
        delay: 0.2,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(rightParagraphRef.current.children[0].children, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        delay: 0.4,
        duration: 0.6,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen mx-auto bg-Mblue-100 overflow-hidden flex flex-col items-center justify-center"
    >
      <StarBackground />

      {/* top-right circle */}
      <div className="absolute w-[45rem] h-[45rem] rounded-full bg-gradient-to-r from-[var(--Mblue-200)] to-[var(--Mblue-400)] blur-[120px] -top-40 -right-40 opacity-70" />

      {/* bottom-left circle */}
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[var(--Mblue-400)] to-[var(--Mblue-200)] blur-[120px] -bottom-40 -left-40 opacity-60" />

      {/* noise overlay */}
      <div className="absolute inset-0 pointer-events-none  mix-blend-overlay size-full bg-[url('/images/noise.png')]" />

      {/* image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <img src="/images/Hero-img.png" alt="hero-image" />
      </div>

      {/* Desktop Grid */}

      <div className="lg:max-w-8xl grid grid-cols-1 lg:grid-cols-[4fr_2fr] z-40 size-full  lg:px-10 gap-y-14">
        {/* left text */}
        <div
          className="  lg:w-fit flex flex-col items-center lg:items-start gap-y-3 "
          ref={(el) => (leftIntroRef.current = el)}
        >
          <span className="font-josefin text-black text-xl italic lg:text-xs tracking-wider lg:items-start">
            Hello, I’m Aleem a
          </span>

          <div className="flex flex-col gap-y-4" ref={leftHeadingRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-Mblue-600 font-sekuya">
              Frontend <br /> Developer
            </h1>
            <p className="text-4xl md:text-5xl  text-Mblue-900 font-sekuya lg:text-right">
              &
            </p>
            <h1 className="text-4xl md:text-5xl  text-Mblue-50 font-sekuya lg:text-right">
              Designer
            </h1>
          </div>
        </div>

        {/* Right text */}
        <div className="flex flex-col justify-between  items-center lg:gap-y-8  gap-y-14 ">
          <div
            className="flex flex-col items-start lg:items-end "
            ref={rightParagraphRef}
          >
            <div className="flex flex-col gap-y-4 font-notoserif text-xl md:text-3xl lg:text-xl tracking-wide">
              <p>Building simple, functional</p>
              <p>And visually engaging</p>
              <p>Digital experiences.</p>
            </div>
          </div>
          <motion.a
            href=""
            className="button-style bg-Mblue-700 md:w-[50%] lg:w-fit font-sekuya text-white px-6 py-3 text-center tracking-wider border border-Mblue-700  hover:bg-transparent  hover:text-Mblue-700 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
