import React from "react";
import { FaSearch, FaRobot, FaLock, FaPlaneDeparture } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch />,
    title: "Smart Search",
    description: "Find the perfect flights with our intelligent search system",
  },
  {
    icon: <FaRobot />,
    title: "AI Assistant",
    description: "Get personalized recommendations from our AI travel companion",
  },
  {
    icon: <FaLock />,
    title: "Secure Booking",
    description: "Your reservations are protected with enterprise-grade security",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Real-time Updates",
    description: "Stay informed with live flight status and gate information",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0b1d3a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why Choose SkyReserve?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Experience the next generation of travel booking with cutting-edge AI
          technology and premium service excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-4 text-[#ff8a00]">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;