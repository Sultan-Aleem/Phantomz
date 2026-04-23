import img1 from "../../public/images/image1.png";
import img2 from "../../public/images/Asty.png";
import img3 from "../../public/images/Luviere.png";
import img4 from "../../public/images/Redfine.png";
import img5 from "../../public/images/Portfolio.png";

const NavList = [
  {
    name: "Projects",
    href: "#projects",
  },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const ProjectsList = [
  {
    src: img1,
    img: img5,
    id: 1,
    title: "Creative Designer Portfolio",
    description:
      "Designed and developed a visually engaging portfolio with animated backgrounds, smooth transitions, and clean UI components",
    tech: ["React", "Figma", "Tailwind CSS"],
    featured: true,
    code: "",
    live: "",
  },
  {
    img: img2,
    id: 2,
    title: "Asty Properties",
    description: "",
    tech: ["React", "Figma", "Tailwind CSS"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/ASTY-v1",
    live: "https://astyv1.netlify.app/",
  },
  {
    img: img3,
    id: 3,
    title: "Luviere",
    description: "",
    tech: ["React", "Figma", "Tailwind CSS"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/Luviere",
    live: "https://luviere.netlify.app/",
  },
  {
    img: img4,
    id: 4,
    title: "Redifine Gaming",
    description: "",
    tech: ["React", "GSAP", "Tailwind CSS"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/zentryType",
    live: "https://zentryt.netlify.app/",
  },
];

export { NavList, ProjectsList };
