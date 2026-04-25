import { motion } from "motion/react";
import { contactIcons, NavList } from "../lib/info";

const FooterSection = () => {
  return (
    <footer className="relative bg-Mblue-100 mt-14 pt-6 pb-4 overflow-hidden">
      {/* gradient glow */}
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[#154978] to-[#2787DE] blur-[120px] -top-40 -left-40 opacity-40" />

      {/* noise overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-[url('/images/noise.png')]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10lg:max-w-8xl mx-auto lg:px-10  px-7 text-center text-white  flex items-center justify-center flex-col lg:flex-row "
      >
        {/* Brand */}
        <h2 className="font-sekuya text-xl  tracking-wide ">
          PHANTOMZ — Sultan‑Aleem
        </h2>

        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-3.5 items-center px-1.5">
          {/* Role */}
          <p className=" text-lg md:text-xl opacity-80">
            Frontend Developer & Designer
          </p>

          {/* Navigation */}
          <div className="flex justify-center text-lg opacity-90 gap-x-3.5 px-1.5">
            {NavList.map((list, i) => (
              <a href={list.href} key={i}>
                {list.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center  gap-x-3.5 ">
            {contactIcons.map((icon, i) => {
              const Icon = icon.icon;
              return (
                <a
                  href={icon.href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-Mblue-300 border border-Mblue-300 hover:bg-transparent rounded-md opacity-70 hover:opacity-100"
                >
                  <Icon className="text-2xl" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <p className="mt-6 text-sm opacity-60">
          © {new Date().getFullYear()} PHANTOMZ — Sultan‑Aleem. <br /> All
          rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
