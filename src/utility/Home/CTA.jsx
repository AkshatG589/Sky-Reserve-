import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#0b1d3a] to-[#10294f] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Take Off?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Join millions of satisfied travelers and discover why SkyReserve is the
          smartest way to book your flights.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#ff8a00] text-[#0b1d3a] font-semibold px-6 py-3 rounded-full text-lg hover:shadow-xl hover:translate-y-1 transition-transform duration-300">
          Start Your Journey <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CTA;