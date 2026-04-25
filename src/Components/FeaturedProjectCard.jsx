import { motion } from "motion/react";

const FeaturedProjectCard = ({ featured }) => {
  return (
    <div className="flex flex-col  justify-center gap-y-14">
      <motion.img
        src={featured.src}
        alt={featured.title}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      />
      <div className="flex gap-x-20">
        <div className="flex flex-col gap-y-3.5 px-2">
          <h3 className="font-notoserif text-4xl text-Mblue-900">
            {featured.title}
          </h3>
          <p className="font-notoserif text-xs text-Mblue-900">
            {featured.description}
          </p>
        </div>
        <div className=" flex items-end gap-x-8">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="bg-Mblue-900 px-2 py-2 text-white text-xl font-notoserif text-center  border border-Mblue-900 pointer hover:bg-transparent hover:text-Mblue-900 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            View Code
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="button-style bg-Mblue-400 px-7 py-2 text-white font-notoserif text-xl border border-Mblue-400 pointer hover:bg-transparent hover:text-Mblue-400 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            View Live Site
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
