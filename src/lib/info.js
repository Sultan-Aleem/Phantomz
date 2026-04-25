import img1 from "../../public/images/image1.png";
import img2 from "../../public/images/Asty.png";
import img3 from "../../public/images/Luviere.png";
import img4 from "../../public/images/Redfine.png";
import img5 from "../../public/images/Portfolio.png";
// icons
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

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
    tech: ["React", "Framer", "Tailwind"],
    featured: true,
    code: "https://github.com/Sultan-Aleem/Mei-Lan-portfolio.git",
    live: "https://meilann.netlify.app/",
  },
  {
    img: img2,
    id: 2,
    title: "Asty Properties",
    description: "",
    tech: ["React", "Framer", "Tailwind"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/ASTY-v1",
    live: "https://astyv1.netlify.app/",
  },
  {
    img: img3,
    id: 3,
    title: "Luviere",
    description: "",
    tech: ["React", "Framer", "Tailwind"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/Luviere",
    live: "https://luviere.netlify.app/",
  },
  {
    img: img4,
    id: 4,
    title: "Redifine Gaming",
    description: "",
    tech: ["React", "GSAP", "Tailwind"],
    featured: false,
    code: "https://github.com/Sultan-Aleem/zentryType",
    live: "https://zentryt.netlify.app/",
  },
];

const tools = [
  {
    name: "React Js",
    icon: FaReact,
    level: 85,
    Category: "Development",
  },
  {
    name: "Tailwind css",
    icon: RiTailwindCssFill,
    level: 85,
    Category: "Development",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    level: 75,
    Category: "Development",
  },
  {
    name: "Figma",
    icon: FaFigma,
    level: 80,
    Category: "Designing",
  },
  {
    name: "UI Design",
    icon: MdOutlineDesignServices,
    level: 76,
    Category: "Designing",
  },
  {
    name: "Wireframing",
    icon: GiWireframeGlobe,
    level: 87,
    Category: "Designing",
  },
];

const contactIcons = [
  { icon: IoLogoWhatsapp, href: "https://wa.me/447449034405" },
  { icon: RiInstagramFill, href: "https://instagram.com/phantomz_den" },
  { icon: AiFillTikTok, href: "https://tiktok.com/@phantomz_den" },
];

export { NavList, ProjectsList, tools, contactIcons };
