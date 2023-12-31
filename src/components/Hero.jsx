import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import profile from "../assets/photo4.jpg";
import figma from "../assets/figma.svg";
import html from "../assets/html.svg";
import reactLogo from "../assets/reactLogo.svg";
import github from "../assets/github.svg";
import figmaLight from "../assets/figmaLight.svg";
import htmlLight from "../assets/htmlLight.svg";
import reactLight from "../assets/reactLight.svg";
import githubLight from "../assets/githubLight.svg";
import cv from "../assets/WaiLinnAung.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
const Hero = ({ darkMode }) => {
  Aos.init();

  return (
    <div
      id="home"
      className="max-w-[1215px] min-h-[800px] pt-[130px] lg:pt-0 mx-auto flex justify-center items-center px-5"
    >
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-5 ">
        <div className="mt-5 lg:mt-0">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-[32px] md:text-title_sm xl:text-hero_title font-[700] tracking-tighter mb-5 lg:mb-8"
          >
            <span className="text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">
              Creating websites
            </span>{" "}
            <br />
            that convert visitors into customers.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            className="max-w-[600px] text-base_sm md:text-base font-[500] mb-10 dark:text-gray-300 text-gray-500 tracking-tight"
          >
            Hi! I’m Wai Linn Aung, a frontend developer based in Yangon,Myanmar.
            I create user-friendly interfaces for fast-growing startups.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-5 ps-2"
          >
            <div className=" relative select-none">
              <Link to="contact">
                <div className="z-10 bg-black dark:bg-white dark:text-black text-white px-5 py-3 text-[18px] font-bold relative -translate-x-2 -translate-y-2 transition-transform duration-500 hover:translate-x-0 hover:translate-y-0">
                  Book a call
                </div>
              </Link>
              <span className=" after:block after:absolute after:-inset-0 after:bg-gradient-to-r after:from-purple-600 after:via-red-500 after:to-yellow-500"></span>
            </div>
            <div className="group flex items-center gap-3 font-[700] cursor-pointer">
              <a href={cv} download>
                Download CV{" "}
              </a>{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <div className="flex justify-center items-center lg:w-[400px] xl:w-[500px]">
            <img
              src={profile}
              alt=""
              className=" object-center rounded-md h-[350px] lg:h-[500px] shadow-lg"
            />
            {darkMode ? (
              <>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src={figma}
                  className="absolute -right-6 top-3 lg:right-0 xl:-top-3 xl:right-10 w-16 h-16 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="600"
                  src={html}
                  className="absolute bottom-0 -right-5 w-16 h-16  lg:-bottom-3  lg:right-0 xl:bottom-8 xl:right-10 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src={reactLogo}
                  className="absolute w-16 h-16 top-4 -left-5 xl:top-10 xl:left-8 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src={github}
                  className="absolute -left-6 -bottom-3 lg:bottom-6 lg:left-0 xl:bottom-0 xl:left-6 w-16 h-16  shadow-xl"
                />
              </>
            ) : (
              <>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src={figmaLight}
                  className="absolute -right-6 top-3 lg:right-0 xl:-top-3 xl:right-10 w-16 h-16 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="600"
                  src={htmlLight}
                  className="absolute bottom-0 -right-5 w-16 h-16  lg:-bottom-3  lg:right-0 xl:bottom-8 xl:right-10 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src={reactLight}
                  className="absolute w-16 h-16 top-4 -left-5 xl:top-10 xl:left-8 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="700"
                  src={githubLight}
                  className="absolute -left-6 -bottom-3 lg:bottom-6 lg:left-0 xl:bottom-0 xl:left-6 w-16 h-16  shadow-xl"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
