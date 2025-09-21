import React from "react";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import SEO from "../Components/SEO";
import devImage from "../assets/dev.PNG";

const About = () => {
  return (
    <>
      <SEO
        title="SkyReserve | About the Developer"
        description="Learn more about Akshat Gupta, the passionate Full-Stack Developer behind SkyReserve. Explore his journey, skills, and contact information."
        url="https://sky-reserve-3a56bdb3.base44.app/about"
        image="https://sky-reserve-3a56bdb3.base44.app/assets/dev.png"
        pageType="ProfilePage"
      />

      <div className="bg-[#0b1d3a] text-white min-h-[40vh] flex flex-col">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Developer Image */}
          <div className="flex justify-center md:w-1/3">
            <img
              src={devImage}
              alt="Developer"
              className="rounded-full w-64 h-64 object-cover object-top shadow-xl"
            />
          </div>

          {/* Developer Info */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hello, I'm Akshat Gupta 👋
            </h2>

            <div className="bg-[#10294f] p-6 rounded-xl mt-4 shadow-md relative">
              <span className="absolute -top-4 left-4 text-3xl text-[#ff8a00]">“</span>
              <p className="text-gray-200 text-lg md:text-xl">
                I'm a passionate Full-Stack Developer specializing in building clean,
                modern web applications using the MERN stack. I love solving real-world
                problems and turning ideas into working products. From authentication
                systems to intuitive dashboards, I enjoy crafting both frontend and backend.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/akshat-gupta1506"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 transition-colors px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <BsLinkedin className="text-white" /> LinkedIn
              </a>

              <a
                href="https://github.com/AkshatG589/skyreserve"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 transition-colors px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <BsGithub className="text-white" /> GitHub
              </a>

              <a
                href="https://leetcode.com/u/akshatg_123/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 text-black font-semibold"
              >
                <SiLeetcode /> LeetCode
              </a>
            </div>

            {/* Contact Button */}
            <div className="mt-6 text-center md:text-left">
              <button
                onClick={() => (window.location.href = "mailto:akshatg1562004@gmail.com")}
                className="bg-gradient-to-r from-[#ff8a00] to-[#e52e71] px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200"
              >
                <BsEnvelopeFill /> Connect with Developer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;