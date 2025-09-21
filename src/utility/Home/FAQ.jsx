import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a flight?",
    answer:
      "You can search for flights using our Smart Search feature, select your preferred flight, and complete the booking securely through our platform.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can view your reservations in the 'Manage Booking' section and modify or cancel them according to airline policies.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. We use enterprise-grade security protocols to ensure all transactions are safe and encrypted.",
  },
  {
    question: "Does SkyReserve provide real-time flight updates?",
    answer:
      "Yes! You will receive live flight status updates including delays, gate changes, and boarding times directly in your account.",
  },
  {
    question: "What is the AI Assistant?",
    answer:
      "Our AI Assistant provides personalized flight recommendations, helping you find the best deals and optimize your travel schedule.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0b1d3a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Have questions? We’ve got answers! Browse our FAQs to learn more
          about SkyReserve’s AI-powered travel experience.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                <span>
                  {openIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-white/80">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;