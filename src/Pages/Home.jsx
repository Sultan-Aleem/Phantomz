import HeroSection from "../Components/HeroSection";
import Nav from "../Components/Nav";
import ProjectsSection from "../Components/ProjectsSection";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Home;
