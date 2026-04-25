import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3; // random smooth increments
      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 500); // slight delay for smooth fade
      }
      setProgress(current);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 bg-Mblue-900 flex flex-col items-center justify-center z-[9999]"
    >
      {/* Glowing PHANTOMZ */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-sekuya text-5xl md:text-7xl text-white tracking-wider drop-shadow-[0_0_20px_rgba(39,135,222,0.8)] px-2.5"
      >
        PHANTOMZ
      </motion.h1>

      {/* Percentage */}
      <motion.p
        key={progress}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-white text-2xl md:text-3xl mt-4 font-notoserif"
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default Loader;
