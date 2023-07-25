import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import htmlLight from "../assets/htmlLight.svg";
import cssLight from "../assets/cssLight.svg";
import jsLight from "../assets/jsLight.svg";
import reactLight from "../assets/reactLight.svg";
import bootstrapLight from "../assets/bootstrapLight.svg";
import tailwindLight from "../assets/tailwindLight.svg";
import figmaLight from "../assets/figmaLight.svg";
import psLight from "../assets/psLight.svg";
import aiLight from "../assets/aiLight.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import reactLogo from "../assets/reactLogo.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import figma from "../assets/figma.svg";
import ps from "../assets/ps.svg";
import ai from "../assets/ai.svg";

const About = ({ darkMode }) => {
  Aos.init();

  return (
    <div id="about" className="max-w-[1215px] px-5 mx-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="300"
        className="flex flex-wrap justify-between mb-5 md:mb-20"
      >
        <div className="w-full md:w-[45%]">
          <h3 className="uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">
            frontend developer
          </h3>
          <h1 className="text-[54px] dark:text-white text-black font-[700]">
            That's me!
          </h1>
        </div>
        <div className="w-full md:w-[55%]">
          <p className="text-base_sm md:text-base dark:text-gray-300 text-gray-500 font-[500] leading-9">
            Experienced frontend web developer adept at crafting visually
            captivating user interfaces and delivering seamless online
            experiences with a deep understanding of modern web technologies.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="300"
        className="w-full flex flex-wrap justify-between"
      >
        <h1 className="text-[54px] dark:text-white text-black font-[700] w-full md:w-[30%]">
          Skills I have
        </h1>
        <div className="flex justify-center lg:justify-start flex-wrap gap-5 w-full mt-5 md:m-0 md:w-[55%]">
          {darkMode ? (
            <>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="400"
                src={html}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="500"
                src={css}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="600"
                src={js}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="700"
                src={reactLogo}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="800"
                src={bootstrap}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="900"
                src={tailwind}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1000"
                src={figma}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1100"
                src={ps}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1200"
                src={ai}
                alt=""
                className=" w-20 h-20"
              />
            </>
          ) : (
            <>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="400"
                src={htmlLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="500"
                src={cssLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="600"
                src={jsLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="700"
                src={reactLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="800"
                src={bootstrapLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="900"
                src={tailwindLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1000"
                src={figmaLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1100"
                src={psLight}
                alt=""
                className=" w-20 h-20"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="1200"
                src={aiLight}
                alt=""
                className=" w-20 h-20"
              />
            </>
          )}
        </div>
      </div>
      {/* <div
        className="flex flex-col md:flex-row gap-5 mt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="300"
      >
        <h1 className="text-[54px] dark:text-white text-black font-[700]">
          Experiences
        </h1>

        <Timeline />
      </div> */}
    </div>
  );
};

export default About;
