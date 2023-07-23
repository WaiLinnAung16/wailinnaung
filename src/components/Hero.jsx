import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import profile from "../assets/photo4.jpg";
import figma from "../assets/figma.svg";
import html from "../assets/html.svg";
import reactLogo from "../assets/reactLogo.svg";
import github from "../assets/github.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  Aos.init();

  return (
    <div
      id="home"
      className="max-w-[1215px] min-h-[800px] pt-[130px] lg:pt-0 mx-auto flex justify-center items-center px-5"
    >
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-5 ">
        <div className="">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-title_sm md:text-title xl:text-hero_title font-[700] tracking-tighter mb-8 "
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
            className="flex flex-col md:flex-row items-start md:items-center gap-5 ps-2"
          >
            <Button text={"Book a call"} />
            <div className="group flex items-center gap-3 font-[700] cursor-pointer">
              <p>Download CV </p>{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=""
        >
          <div className="flex justify-center items-center lg:w-[400px] xl:w-[500px]">
            <img
              src={profile}
              alt=""
              className=" object-center rounded-md h-[350px] lg:h-[500px] shadow-lg"
            />
            <img
              src={figma}
              className="absolute -top-3 right-10 w-16 h-16 shadow-xl"
            />
            <img
              src={html}
              className="absolute bottom-8 right-10 w-20 h-20 shadow-xl"
            />
            <img
              src={reactLogo}
              className="absolute top-10 left-8 w-20 h-20 shadow-xl"
            />
            <img
              src={github}
              className="absolute bottom-0 left-6 w-16 h-16  shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
