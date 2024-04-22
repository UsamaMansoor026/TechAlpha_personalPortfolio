import React from "react";
import me from "../assets/usama.png";
import "../App.css";
import { useInView } from "react-intersection-observer";
import { services } from "../components/Constants";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  /* useInView custom hook for using Intersection Observer in React.js */
  const { ref: myRef, inView: myELementIsVisible } = useInView();
  const { ref: myRef2, inView: comeOut } = useInView();
  const { ref: myRef3, inView: slideIn } = useInView();

  return (
    <div className="pt-32 bg-gradient-to-br from-[#73fff6]/80 to-[#94fff8] z-[-1000]">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row justify-between px-12 md:px-[70px]"
      >
        <div className="mt-[40px] md:mt-[70px] flex flex-col items-center md:items-start">
          <p className="text-sm">Hello World! I am</p>
          <h1 className="name text-center md:text-left text-4xl md:text-6xl font-semibold my-3">
            Usama Mansoor
          </h1>
          <h3 className="tracking-[1px] text-center capitalize font-semibold text-lg">
            passionate Web Developer
          </h3>

          {/* Call to action buttons */}
          <div className="my-3 flex flex-col md:flex-row items-center gap-3">
            <a
              href="#contact"
              className="bg-[#5127db] text-white py-1.5 px-6 border-[#5127db] border-[1px] rounded-ee-xl hover:bg-transparent hover:text-[#333] duration-200 text-center w-full md:w-auto"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/16E1KL_gfHG17nTPAOjx_6_VzmDvHcMHM/view?usp=drive_link"
              download="resume.pdf"
              target="_blank"
              className="border-[1px] border-[#5127db] py-1.5 px-6 rounded-ee-xl hover:bg-[#5127db] hover:text-white duration-200 text-center w-full md:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-5 md:my-0">
          <img className="profile z-[20]" src={me} alt="" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-24"
      >
        <div ref={myRef} className="flex justify-center mb-5 md:my-0">
          <img
            className={`${
              myELementIsVisible ? "animateClass" : ""
            } z-[20] scale-100 md:scale-110`}
            src={me}
            alt=""
          />
        </div>
        <div
          ref={myRef2}
          className={`${comeOut ? "comeOut" : ""} w-[80%] pt-14`}
        >
          <h3
            className="font-semibold text-[#5127db] uppercase
           text-lg"
          >
            About Me
          </h3>
          <p className="text-my-fontColor text-justify my-2">
            Innovative computer scientist proficient in web development and
            software engineering, with a passion for leveraging technology to
            solve complex problems and drive impactful solutions. Proficient
            knowledge in HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS and
            React.js
          </p>
          <div>
            <h3 className="font-semibold text-[#5127db] uppercase text-lg">
              Skill Set:
            </h3>
            <div className="my-2">
              {/* Skill 1 -> HTML */}
              <div className="flex flex-col gap-1 my-3">
                <p className="flex items-center justify-between">
                  <span>HTML</span>
                  <span>98%</span>
                </p>
                <div className="w-full h-2 rounded-sm bg-my-fontColor relative">
                  <span className="h-2 w-[98%] bg-[#5127db] absolute left-0 top-0"></span>
                </div>
              </div>
              {/* Skill 2 -> CSS */}
              <div className="flex flex-col gap-1 my-3">
                <p className="flex items-center justify-between">
                  <span>CSS</span>
                  <span>80%</span>
                </p>
                <div className="w-full h-2 rounded-sm bg-my-fontColor relative">
                  <span className="h-2 w-[80%] bg-[#5127db] absolute left-0 top-0"></span>
                </div>
              </div>
              {/* Skill 3 -> JavaScript */}
              <div className="flex flex-col gap-1 my-3">
                <p className="flex items-center justify-between">
                  <span>Javascript</span>
                  <span>85%</span>
                </p>
                <div className="w-full h-2 rounded-sm bg-my-fontColor relative">
                  <span className="h-2 w-[85%] bg-[#5127db] absolute left-0 top-0"></span>
                </div>
              </div>
              {/* Skill 4 -> React.js */}
              <div className="flex flex-col gap-1 my-3">
                <p className="flex items-center justify-between">
                  <span>React.js</span>
                  <span>60%</span>
                </p>
                <div className="w-full h-2 rounded-sm bg-my-fontColor relative">
                  <span className="h-2 w-[60%] bg-[#5127db] absolute left-0 top-0"></span>
                </div>
              </div>
              {/* Skill 5 -> Tailwind CSS */}
              <div className="flex flex-col gap-1 my-3">
                <p className="flex items-center justify-between">
                  <span>Tailwind CSS</span>
                  <span>70%</span>
                </p>
                <div className="w-full h-2 rounded-sm bg-my-fontColor relative">
                  <span className="h-2 w-[70%] bg-[#5127db] absolute left-0 top-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-28 px-12 md:px-[70px]">
        <h1 className="text-center mb-9 uppercase text-2xl md:text-4xl text-[#5127db] font-semibold">
          My Services
        </h1>
        {/* Parent Div */}
        <div
          ref={myRef3}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service) => (
            <article
              key={service.id}
              className={`border rounded-md px-8 py-10 h-[300px] bg-white/40 shadow-lg shadow-[#5127db]/30 cursor-pointer hover:-translate-y-4 duration-200 ${
                slideIn ? "slideIn" : ""
              }`}
            >
              <h3 className="text-center text-2xl font-semibold mb-4">
                {service.name}
              </h3>
              <p className="text-justify text-my-fontColor">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
