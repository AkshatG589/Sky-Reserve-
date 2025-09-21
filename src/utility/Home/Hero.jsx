import React, { useEffect, useState } from "react";
import { FaPlane, FaRobot, FaSearch, FaArrowRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const planeArray = [
      { id: 1, side: "left" },
      { id: 2, side: "right" },
    ];
    setPlanes(planeArray);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden px-4 
                    bg-gradient-to-tr from-[#0b1d3a] via-[#10294f] to-[#153463] 
                    h-[90vh] md:h-[35vh]">
      {/* Hero Content */}
      <div className="z-10 text-center max-w-3xl text-white">
        <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-medium mb-4">
          <FaRobot className="text-xl" /> AI-powered Travel Experience
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          Discover Your Next{" "}
          <span className="bg-gradient-to-r from-[#ff8a00] to-[#e52e71] bg-clip-text text-transparent">
            Adventure
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Experience the future of travel with our AI-powered reservation system. 
          Find, book, and manage your flights with unprecedented ease.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff8a00] text-[#0b1d3a] font-semibold hover:shadow-xl hover:-translate-y-1 transition-transform duration-200">
            <FaSearch /> Search Flights <FaArrowRight />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#10294f] text-[#ff8a00] font-semibold hover:shadow-lg hover:-translate-y-1 transition-transform duration-200">
            <FaRobot /> Try AI Assistant
          </button>
        </div>
      </div>

      {/* Animated Planes */}
      {planes.map((plane) => (
        <FaPlane
          key={plane.id}
          className={`absolute text-[7rem] text-white/30 opacity-80 transform will-change-transform
                      ${plane.side === "left" ? "bottom-[-10%] left-[-10%] animate-diagonalFly-left" 
                                             : "bottom-[-10%] right-[-10%] animate-diagonalFly-right"}`}
        />
      ))}
    </div>
  );
};

export default Hero;