import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/About";
import Contact from "../components/Contact";
import ThemeBtn from "../components/Theme/ThemeBtn";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const iconToggle = () => {
    return setDarkMode((darkMode) => !darkMode);
  };

  const ThemeCheck = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      return;
    }
    setDarkMode(false);
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  useEffect(() => {
    ThemeCheck();
  }, []);
  return (
    <>
      <Header darkMode={darkMode} themeSwitch={themeSwitch} />
      <main className=" relative dark:bg-[#150112] dark:text-white">
        <ThemeBtn darkMode={darkMode} themeSwitch={themeSwitch} />
        <section className="">
          <Hero darkMode={darkMode} />
        </section>
        <section className=" py-[80px]">
          <About darkMode={darkMode} />
        </section>
        <section className=" py-[80px]">
          <Projects />
        </section>

        <section className=" py-[80px]">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
