import React from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  Aos.init();
  return (
    <footer className=" bg-black  text-white dark:bg-gray-100 dark:text-black pt-16 md:pt-32 pb-5">
      <div className=" max-w-[1215px] px-5 lg:mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className=" mb-10 md:mb-20 text-[30px] md:text-title_sm lg:text-title font-[700]"
        >
          <h1 className=" mb-2">Ready to make something kickass?</h1>
          <a
            href="mailto:waia00198@gmail.com"
            className=" relative footer-cta text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500"
          >
            Let's get on a call.
          </a>
        </div>
        {/* footer link */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-once="true"
          className=" mb-20  md:mb-40 grid lg:grid-cols-2 gap-20"
        >
          <div className=" text-sm text-gray-500 space-y-3">
            <a href="#">
              <h1 className=" text-white dark:text-black text-[25px] font-[700]">
                My Portfolio<span className=" text-red-400">.</span>
              </h1>
            </a>
            <p>No 271, Thamine Myothit 7 street, Mayangone, Yangon</p>
            <a
              href="mailto:waia00198@gmail.com"
              className=" flex items-center gap-2 "
            >
              <IoMdMail className=" text-[25px]" />

              <div className=" font-[700]">waia00198@gmail.com</div>
            </a>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 text-btn">
            <a href="#home" className=" relative w-fit footer-link">
              Home
            </a>
            <a href="#about" className=" relative w-fit footer-link">
              About
            </a>
            <a href="#projects" className=" relative w-fit footer-link">
              Projects
            </a>
            <a href="#contact" className=" relative w-fit footer-link">
              Contact
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100031937234961"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/wai-linn-aung-84052324a/"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/WaiLinnAung16"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Github
            </a>
          </div>
        </div>

        {/* copy right */}
        <div>
          <div className=" text-sm text-[#8A93A2]">
            © 2023 copyright all right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
