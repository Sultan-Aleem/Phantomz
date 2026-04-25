import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CircularProgress = ({ level }) => {
  const circleRef = useRef(null);
  const numberRef = useRef(null);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const circle = circleRef.current;
    const number = numberRef.current;

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    gsap.fromTo(
      circle,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset: circumference - (circumference * level) / 100,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 85%",
        },
      },
    );

    //  number count‑up animation
    gsap.fromTo(
      number,
      { innerText: 0 },
      {
        innerText: level,
        duration: 1.4,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: circle,
          start: "top 85%",
        },
        onUpdate: function () {
          number.innerText = Math.round(number.innerText) + "%";
        },
      },
    );
  }, []);

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span
        ref={numberRef}
        className="absolute text-xl font-semibold text-Mblue-900"
      >
        0%
      </span>
    </div>
  );
};

export default CircularProgress;
