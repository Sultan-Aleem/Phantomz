import { forwardRef } from "react";
import { motion } from "motion/react";

const ProjectCard = forwardRef(({ project }, ref) => {
  return (
    <div
      className="flex flex-col gap-y-4 md:gap-y-9 items-center md:items-start "
      ref={ref}
    >
      <div className=" aspect-square items-center ">
        <motion.img
          src={project.img}
          alt={project.title}
          className="object-cover object-center md:w-full  rounded-t-2xl shadow-2xl bg-Mblue-500 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      </div>
      <h3 className="font-notoserif text-2xl lg:text-3xl text-Mblue-900 ">
        {project.title}
      </h3>
      <div className="flex flex-col md:flex-row gap-x-3.5   md:w-full gap-y-4 ">
        <div className=" md:w-[70%]  flex md:flex-col">
          {project.tech.map((t, index) => (
            <span
              key={index}
              className=" text-xl md:text-2xl  font-notoserif pr-2 "
            >
              {t},
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 w-full ">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href={project.code}
            className=" bg-Mblue-900 text-white px-4 py-2 text-xl font-notoserif rounded-t-lg border border-Mblue-900 pointer hover:bg-transparent hover:text-Mblue-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Code
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href={project.live}
            className=" bg-Mblue-700 text-white px-4 py-2 text-xl font-notoserif rounded-t-lg rounded-br-lg pointer hover:bg-transparent hover:text-Mblue-700 border border-Mblue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Visit
          </motion.a>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
