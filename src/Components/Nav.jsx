import { CgMenuGridO } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { NavList } from "../lib/info";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import gsap from "gsap";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (navOpen) {
        setShowNav(true);
        return;
      }

      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleNav = () => {
    setNavOpen((open) => !open);
  };

  useEffect(() => {
    if (navOpen) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 }, // start BELOW the button
        {
          y: 20,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",

          pointerEvents: "auto",
        },
      );
    } else {
      gsap.to(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        pointerEvents: "none",
        ease: "power3.in",
      });
    }
  }, [navOpen]);

  return (
    <nav className="w-full fixed inset-x-0 top-0 left-0 z-50 ">
      {/* desktop nav */}

      <motion.div
        className=" items-center justify-between bg-Mblue-600 py-4 mx-10 my-6 px-5 rounded-br-xl rounded-tl-xl hidden md:flex "
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* logo */}
        <div>
          <a href="#" className="font-sekuya text-xl text-white pointer">
            PHANTOMZ
          </a>
        </div>
        {/* nav items */}
        <div className="flex items-center gap-x-11">
          <ul className="flex items-center gap-x-14 font-notoserif text-black text-md">
            {NavList.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-black hover:text-white transition-all  duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            className="bg-Mblue-300 px-4 py-1.5 text-white text-xl font-notoserif text-center button-style border border-Mblue-300 pointer hover:bg-transparent "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* mobile nav */}
      <motion.div
        className="block md:hidden"
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-Mblue-600 button-style mx-5 mt-3 px-3 py-2 flex items-center justify-between mb-1">
          <div>
            <a href="#" className="font-sekuya text-xs text-white pointer">
              PHANTOMZ
            </a>
          </div>

          <button>
            {navOpen ? (
              <FaRegWindowClose
                size={30}
                onClick={toggleNav}
                className="text-white outline-none"
              />
            ) : (
              <CgMenuGridO
                size={30}
                className="text-white outline-none"
                onClick={toggleNav}
              />
            )}
          </button>
        </div>
        {/* mobile nav items */}
        <div
          ref={navRef}
          className={cn(
            "bg-Mblue-50 w-1/2 h-1/2 fixed right-5 flex flex-col justify-between items-start  pt-5 px-8 rounded-xl pb-6 opacity-0 pointer-events-none translate-y-10 z-50",
          )}
        >
          <ul className="flex flex-col gap-y-6 w-full ">
            {NavList.map((item, index) => (
              <motion.a
                href={item.href}
                key={index}
                className="list-none font-notoserif text-xl text-Mblue-600 py-4 px-1 button-style hover:text-white hover:bg-Mblue-300 flex text-center transition-all duration-300"
              >
                <span onClick={toggleNav}>{item.name}</span>
              </motion.a>
            ))}
          </ul>
          <motion.a
            href="#contact"
            className="bg-Mblue-300 px-4 py-1.5 text-white text-xl font-notoserif text-center button-style w-full border border-Mblue-300 pointer hover:bg-transparent hover:text-Mblue-300"
            onClick={toggleNav}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
