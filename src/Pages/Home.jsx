import About from "../Components/About";
import ContactSection from "../Components/ContactSection";
import FooterSection from "../Components/FooterSection";
import HeroSection from "../Components/HeroSection";
import Nav from "../Components/Nav";
import ProjectsSection from "../Components/ProjectsSection";
import Skills from "../Components/Skills";
import { useState } from "react";
import Loader from "../Components/Loader";
import { motion } from "motion/react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Nav />
          <main>
            <HeroSection />
            <ProjectsSection />
            <About />
            <Skills />
            <ContactSection />
            <FooterSection />
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Home;
