import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frequent Traveler",
    feedback:
      "SkyReserve makes booking flights effortless and fast! The AI recommendations are super helpful.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Riya Verma",
    role: "Business Traveler",
    feedback:
      "The real-time updates and AI assistant saved me time and made my trips stress-free.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Karan Gupta",
    role: "Student",
    feedback:
      "Booking and managing flights has never been easier. SkyReserve’s AI features are amazing!",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    role: "Traveler",
    feedback:
      "The interface is sleek, and the AI assistant gives personalized suggestions. Love it!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#10294f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          What Our Users Say
        </h2>

        {/* Infinite Scroll Wrapper */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate testimonials array for infinite loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="bg-[#0b1d3a] min-w-[300px] max-w-[300px] p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex-shrink-0"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-[#ff8a00]"
              />
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-[#ff8a00] mb-3">{item.role}</p>
              <p className="text-white/80 mb-4 text-sm">“{item.feedback}”</p>
              <div className="flex justify-center">
                {Array.from({ length: item.rating }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;