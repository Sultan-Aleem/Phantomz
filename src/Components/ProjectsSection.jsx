import { useEffect, useRef } from "react";
import { ProjectsList } from "../lib/info";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsSection = () => {
  const featured = ProjectsList.find((p) => p.featured);
  const others = ProjectsList.filter((p) => !p.featured);

  const titleRef = useRef(null);
  const barRef = useRef(null);
  const desktopCardRef = useRef([]);
  const mobileCardRef = useRef([]);

  // reset arrays on each render so they don't accumulate old refs
  desktopCardRef.current = [];
  mobileCardRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
      // Underline animation
      gsap.from(barRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Desktop card animation
      gsap.from(desktopCardRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: desktopCardRef.current[0],
          start: "top 83%",
        },
      });

      // mobile card animation

      mobileCardRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen mx-auto bg-[linear-gradient(to_bottom,_#ffffff_62%,_#6899c5_95%)] "
    >
      <div className="lg:max-w-8xl mx-auto lg:px-10 py-24 px-7">
        <div className=" flex flex-col items-center gap-y-2 ">
          <h2
            className="font-sekuya text-xl md:text-4xl lg:text-5xl tracking-wide text-Mblue-900 opacity-100"
            ref={titleRef}
          >
            Selected Projects
          </h2>
          <div
            className="bg-Mblue-200 block w-[40%] h-2 rounded-full"
            ref={barRef}
          />
        </div>
        {/* Desktop view */}
        <div className="hidden lg:flex my-12  flex-col items-center justify-center gap-y-36">
          <FeaturedProjectCard featured={featured} />
          <div className=" grid grid-cols-3 gap-x-20">
            {others.map((p, i) => (
              <ProjectCard
                project={p}
                key={p.id}
                ref={(el) => (desktopCardRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
        {/* Mobile View */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:hidden gap-y-24 gap-x-8 mt-14 md:mt-24">
          {ProjectsList.map((p, i) => (
            <ProjectCard
              project={p}
              key={p.id}
              ref={(el) => (mobileCardRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
