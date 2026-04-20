import { CgMenuGridO } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import NavList from "../lib/info";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import gsap from "gsap";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

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

      <div className=" items-center justify-between bg-Mblue-600 py-4 mx-10 my-6 px-5 rounded-br-xl rounded-tl-xl hidden md:flex ">
        {/* logo */}
        <div>
          <span className="font-sekuya text-xl text-white">PHANTOMZ</span>
        </div>
        {/* nav items */}
        <div className="flex items-center gap-x-11">
          <ul className="flex items-center gap-x-14 font-notoserif text-black text-md">
            {NavList.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-Mblue-300 px-4 py-1.5 text-white text-xl font-notoserif text-center button-style "
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* mobile nav */}
      <div className="block md:hidden">
        <div className="bg-Mblue-600 button-style mx-5 mt-3 px-3 py-2 flex items-center justify-between mb-1">
          <div>
            <span className="font-sekuya text-xs text-white ">PHANTOMZ</span>
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
          <ul className="flex flex-col gap-y-6 w-full">
            {NavList.map((item, index) => (
              <li
                key={index}
                className="list-none font-notoserif text-xl text-Mblue-600 pt-6  "
              >
                <a href={item.href} onClick={toggleNav}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-Mblue-300 px-4 py-1.5 text-white text-xl font-notoserif text-center button-style w-full"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
