import Img from "../../public/images/About-img.png";

// hey i've made some layout corrections to the rest now i'm about to proceed to the aboutme section but i  noticed something, if u remember the startbackground animation we made , it's currently affecting the hero and projectsection, but i dont want it to affect the other how do i proceed

const About = () => {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(to_bottom,#6899C5_0%,_#ffffff_95%_)] min-h-screen mx-auto z-50"
    >
      <div className="lg:max-w-8xl mx-auto lg:px-10 py-24 px-7">
        <div className=" flex flex-col items-center gap-y-2 ">
          <h2 className="font-sekuya text-xl md:text-4xl lg:text-5xl tracking-wide text-Mblue-900 opacity-100">
            About Me
          </h2>
          <div className="bg-Mblue-200 block w-[20%] h-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-14 mt-14 lg:mt-24  ">
          <div className="bg-Mblue-100 rounded-xl py-14 px-9 font-notoserif text-2xl md:text-3xl lg:text-4xl text-Mblue-700 flex flex-col items-center justify-between gap-y-5 lg:leading-12 relative ">
            <div className="absolute inset-0 pointer-events-none  mix-blend-overlay size-full bg-[url('/images/noise.png')] text-clip" />
            <p>
              I’m a frontend developer and designer passionate about creating
              clean and engaging digital experiences.
            </p>
            <p>
              I focus on creating interfaces that are simple, functional, and
              visually appealing, while continuously improving my craft through
              hands-on work and experimentation.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={Img} alt="Animated About Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
