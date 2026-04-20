import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
      });
    }
    setMeteors(newMeteors);
  };

  // Animation
  useEffect(() => {
    if (!containerRef.current) return;
    if (!stars.length || !meteors.length) return;

    const ctx = gsap.context(() => {
      // STAR TWINKLE
      gsap.to(".star", {
        opacity: () => gsap.utils.random(0.2, 1),
        duration: () => gsap.utils.random(1, 2.5),
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.03,
        },
        ease: "sine.inOut",
      });

      //  SHOOTING METEORS
      gsap.utils.toArray(".meteor").forEach((meteor) => {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: gsap.utils.random(1, 4),
        });

        tl.set(meteor, {
          x: () => gsap.utils.random(200, 400),
          y: () => gsap.utils.random(-200, -100),
          opacity: 1,
          rotate: 120,
        })
          .to(meteor, {
            x: () => gsap.utils.random(-800, -600),
            y: () => gsap.utils.random(600, 900),
            opacity: 0,
            duration: () => gsap.utils.random(1, 3.5), // different speed EACH time
            ease: "none",
          })
          .to(meteor, {
            opacity: 0,
            duration: 0.3,
            ease: "none",
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stars, meteors]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-40"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor absolute  rounded-full"
          style={{
            width: `${meteor.size * 80}px`,
            height: `${meteor.size * 3}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            background: "linear-gradient(45deg, white, transparent)",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
