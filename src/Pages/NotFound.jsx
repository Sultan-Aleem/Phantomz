import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "/images/NotFound.png";

const NotFound = () => {
  // PARALLAX SETUP
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], [-15, 15]);
  const translateY = useTransform(mouseY, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-Mblue-100 overflow-hidden">
      {/* gradient glow */}
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[#154978] to-[#2787DE] blur-[120px] -top-40 -left-40 opacity-40" />

      {/* noise overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-[url('/images/noise.png')]" />

      {/* soft glow behind guardian */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#2787DE] to-[#154978] blur-[100px] opacity-60"
      />

      {/* floating + parallax guardian */}
      <motion.img
        src={img}
        alt="guardian"
        className="w-56 md:w-72 lg:w-80 relative z-10"
        style={{ x: translateX, y: translateY }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* glitching NOT FOUND text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white font-sekuya text-5xl md:text-7xl mt-10 tracking-wide relative glitch"
      >
        Not Found
      </motion.h1>

      {/* message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white opacity-80 text-lg md:text-xl mt-4 text-center px-6 max-w-xl"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* back home button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          to="/"
          className="mt-8 inline-block bg-Mblue-300 text-white text-xl font-notoserif px-6 py-3 rounded-md border border-Mblue-300 hover:bg-transparent hover:text-Mblue-300 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
