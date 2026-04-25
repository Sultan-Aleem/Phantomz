import React from "react";
import { tools } from "../lib/info";
import CircularProgress from "./CircularProgress";

const Skills = () => {
  return (
    <section className="mx-auto my-24">
      <div className="lg:max-w-8xl mx-auto lg:px-10  px-7">
        <div className=" flex flex-col items-center gap-y-2 ">
          <h2 className="font-sekuya text-xl md:text-4xl lg:text-5xl tracking-wide text-Mblue-900 opacity-100 mx-auto  text-center">
            Tools & Technologies
          </h2>
          <div className="bg-Mblue-200 block w-[20%] h-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-14">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                className="bg-Mblue-100 relative px-9 py-9 rounded-b-xl rounded-tr-xl"
                key={index}
              >
                <div className="absolute inset-0 pointer-events-none  mix-blend-overlay size-full bg-[url('/images/noise.png')] text-clip rounded-b-xl rounded-tr-xl" />

                {/* contents */}
                <div className="flex flex-col items-start justify-between gap-y-6 md:gap-y-9">
                  <div className="flex items-center bg-Mblue-200 w-full gap-x-6 p-2">
                    <Icon className="text-3xl" />
                    <p className="text-xl md:text-2xl lg:text-3xl font-notoserif text-Mblue-900 ">
                      {tool.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-Mblue-900/30 bg-Mblue-200 font-notoserif text-xs p-1">
                      {tool.Category}
                    </p>
                    <CircularProgress level={tool.level} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
