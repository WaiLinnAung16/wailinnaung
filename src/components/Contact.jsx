import React from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import contactLight from "../assets/contactLight.svg";
const Contact = () => {
  Aos.init();
  return (
    <>
      <div>
        <div id="contact" className=" max-w-[1215px] px-5 mx-auto">
          {/* contact wrapper  */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mb-16 md:mb-20 text-base_sm md:text-base text-gray-500 dark:text-gray-300 font-[500]">
            {/* left  */}
            <div className="flex flex-col gap-5 w-full mb-3 lg:mb-0 lg:w-[45%]">
              <h1 className=" text-title_sm md:text-title font-[700] text-black dark:text-white">
                Get in touch
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="500"
              >
                Have a project in mind? Looking to partner or work together?
              </p>
              <div
                className=" font-[700] flex flex-col gap-5 text-gray-700 dark:text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <div className=" flex items-center gap-3">
                  <IoMdMail className=" text-[25px]" />
                  <a href="mailto:waia00198@gmail.com" className=" underline">
                    waia00198@gmail.com
                  </a>
                </div>
                <div className=" flex items-center gap-3">
                  <BsTelephoneFill />
                  <p>+959-790-658-104</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaLocationDot />
                  <p>No 271, Thamine Myothit 7 street, Mayangone, Yangon</p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="500"
              className=" self-center lg:self-start"
            >
              <img
                src={contactLight}
                alt=""
                className="h-[350px] lg:h-[450px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /* <div className=" lg:col-span-6 dark:text-white">
              form wrapper 
              <div
                className=" space-y-8"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                name wrapper 
                <div className=" grid md:grid-cols-2 gap-10">
                  <div className=" flex flex-col gap-3">
                    <label htmlFor="first" className=" font-[700]">
                      First Name
                    </label>
                    <input
                      id="first"
                      type="text"
                      className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="First Name"
                    />
                  </div>
                  <div className=" flex flex-col gap-3">
                    <label htmlFor="last" className=" font-[700]">
                      Last Name
                    </label>
                    <input
                      id="last"
                      type="text"
                      className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                email 
                <div className=" flex flex-col gap-3">
                  <label htmlFor="email" className=" font-[700]">
                    Your Email
                  </label>
                  <div className=" flex items-center gap-3 px-5 bg-gray-100">
                    <img
                      className=" w-5"
                      src="https://assets.website-files.com/5fef5619b640934b33c2385e/606421699f78709a207218d0_Vector-2.svg"
                    ></img>
                    <input
                      id="email"
                      type="email"
                      className=" py-4 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="Enter your e-mail"
                    />
                  </div>
                </div>

                Detail 
                <div className=" flex flex-col gap-3">
                  <label htmlFor="first" className=" font-[700]">
                    Tell me a bit more what you are looking for?
                  </label>
                  <textarea
                    id="first"
                    type="text"
                    rows="5"
                    className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                    placeholder="Text Here"
                  />
                </div>
                <div className=" ml-2 w-fit">
                  <Button text="Submit Now!" />
                </div>
              </div>
            </div> */
}
