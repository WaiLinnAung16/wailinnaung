import "./projects.css";
import { projects } from "./projects";
import ProjectsCard from "./ProjectsCard";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Button from "../Button";
import hotale from "../../assets/about/hotale.jpg";
import contact from "../../assets/about/contact.jpg";
import dashboard from "../../assets/about/dashboard.jpg";
import seafood from "../../assets/about/seafood.jpg";
import movie from "../../assets/about/movie.jpg";
import world from "../../assets/about/world.jpg";
import { MdRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-delay="100"
      className=""
    >
      <div className="max-w-[1215px] px-5 mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div>
            <h6 className=" text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block uppercase tracking-[4px]">
              Projects
            </h6>
          </div>
          <div className=" mt-[20px] w-full lg:w-[80%] text-center">
            <h2 className="text-[26px] md:text-title_sm font-bold dark:text-[#fff] text-[#000]">
              Building seamless user experiences with code
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1215px] px-5 pt-[65px] mx-auto grid grid-cols-12 lg:grid-cols-none lg:grid-rows-6 lg:grid-flow-col gap-5 select-none">
        <div className="col-span-12 md:col-span-6 lg:row-span-4 lg:col-span-3">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="h-full overflow-hidden relative rounded shadow group">
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
              <img
                src={contact}
                alt=""
                className=" object-cover w-full h-full"
              />
              <div className=" absolute bottom-5 left-5">
                <h1 className="text-base_sm font-bold text-white">
                  Contact Dashboard
                </h1>
                <p className=" text-slate-200">Web Application</p>
              </div>

              {/* hover reveal */}
              <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
                <div className=" flex flex-col gap-3">
                  <a
                    href="https://contactdashboard.vercel.app/login"
                    target="_blank"
                    className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                  >
                    <MdRemoveRedEye />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/WaiLinnAung16/contactDashboard"
                    target="_blank"
                    className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:row-span-2 lg:col-span-3 ">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
            <img src={world} alt="" className=" object-cover w-full h-full" />
            <div className=" absolute bottom-5 left-5">
              <h1 className="text-base_sm font-bold text-white">
                Where In The World
              </h1>
              <p className=" text-slate-200">Frontend Mentor Challenge</p>
            </div>

            {/* hover reveal */}
            <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
              <div className=" flex flex-col gap-3">
                <a
                  href="https://where-in-the-world-1.vercel.app/"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <MdRemoveRedEye />
                  Live Demo
                </a>
                <a
                  href="https://github.com/WaiLinnAung16/WhereInTheWorld"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:row-span-3 lg:col-span-4 ">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
            <img src={hotale} alt="" className=" object-cover w-full h-full" />
            <div className=" absolute bottom-5 left-5">
              <h1 className="text-base_sm font-bold text-white">
                Hotale Hotel Website
              </h1>
              <p className=" text-slate-200">Web Application</p>
            </div>

            {/* hover reveal */}
            <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
              <div className=" flex flex-col gap-3">
                <a
                  href="https://hotale.vercel.app/"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <MdRemoveRedEye />
                  Live Demo
                </a>

                <a
                  href="https://github.com/Min1870/Hotale"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:row-span-3 lg:col-span-4 ">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
            <img
              src={dashboard}
              alt=""
              className=" object-cover w-full h-full"
            />
            <div className=" absolute bottom-5 left-5">
              <h1 className="text-base_sm font-bold text-white">
                Hotale Dashboard
              </h1>
              <p className=" text-slate-200">Web Application</p>
            </div>

            {/* hover reveal */}
            <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
              <div className=" flex flex-col gap-3">
                <a
                  href="https://hotale-dashboard.vercel.app/login"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <MdRemoveRedEye />
                  Live Demo
                </a>
                <a
                  href="https://github.com/MyoNyiNyiNaing/hotale-dashboard"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:row-span-4 lg:col-span-3 ">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
            <img src={movie} alt="" className=" object-cover w-full h-full" />
            <div className=" absolute bottom-5 left-5">
              <h1 className="text-base_sm font-bold text-white">Moviezine</h1>
              <p className=" text-slate-200">Web Application</p>
            </div>

            {/* hover reveal */}
            <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
              <div className=" flex flex-col gap-3">
                <a
                  href="https://movie-zine.vercel.app/"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <MdRemoveRedEye />
                  Live Demo
                </a>
                <a
                  href="https://github.com/WaiLinnAung16/moviePj"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:row-span-2 lg:col-span-3 ">
          <div className="h-full overflow-hidden relative rounded shadow group">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
            <img src={seafood} alt="" className=" object-cover w-full h-full" />
            <div className=" absolute bottom-5 left-5">
              <h1 className="text-base_sm font-bold text-white">
                Seafood Paradise
              </h1>
              <p className=" text-slate-200">Web Application</p>
            </div>

            {/* hover reveal */}
            <div className="absolute h-full w-full top-0 flex justify-center items-center scale-0 p-20 bg-gray-900/70 rounded transition-all duration-300 ease-in-out group-hover:scale-95">
              <div className=" flex flex-col gap-3">
                <a
                  href="https://seafood-paradise.vercel.app/"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <MdRemoveRedEye />
                  Live Demo
                </a>
                <a
                  href="https://github.com/WaiLinnAung16/seafood-paradise"
                  target="_blank"
                  className=" text-white font-semibold text-base flex items-center gap-3 relative border-btn"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))} */}
      </div>
    </div>
  );
};

export default Projects;
