// src/pages/RefundCancellationPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineBan, HiOutlineInformationCircle } from "react-icons/hi";
import SEO from "../Components/SEO"


const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4 }}
    className="space-y-3"
  >
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
      {title}
    </h2>
    <div className="prose prose-indigo max-w-none text-gray-700">
      {children}
    </div>
  </motion.section>
);

export default function RefundCancellationPolicy() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-gray-50">
      <SEO
        title="Return & Refund Policy - Syntecxhub"
        description="Understand Syntecxhub’s return and refund policy for training programs and internships."
        url="https://syntecxhub.vercel.app/refund-policy"
        image="https://syntecxhub.vercel.app/android-chrome-512x512.png"
      />
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Refund & <span className="text-white/90">Cancellation Policy</span>
          </h1>
          <p className="mt-4 text-white/90">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <Section id="intro" title={<><HiOutlineInformationCircle className="text-blue-500" /> Introduction</>}>
          <p>
            This Refund & Cancellation Policy explains the terms under which 
            payments made to <strong>Syntecxhub</strong> (“Company”, “we”, “our”, “us”) 
            are handled. By enrolling in our programs or making any payments, 
            you agree to this Policy.
          </p>
        </Section>

        <Section id="no-refund" title={<><HiOutlineBan className="text-red-500" /> No Refund Policy</>}>
          <p>
            All payments made for services including trainings, internships, 
            hackathons, courses, and related offerings are{" "}
            <span className="font-semibold text-red-600">non-refundable</span>.  
            Once a payment is successfully processed and confirmed, no refunds 
            will be issued under any circumstances.
          </p>
        </Section>

        <Section id="no-cancellation" title={<><HiOutlineBan className="text-red-500" /> Cancellation Policy</>}>
          <p>
            Cancellations of registrations, enrollments, or subscriptions are 
            not permitted after payment. Users are strongly advised to carefully 
            review all details before making a purchase or enrolling.
          </p>
        </Section>

        <Section id="exceptions" title={<><HiOutlineInformationCircle className="text-yellow-500" /> Exceptions</>}>
          <p>
            The only exceptions to this strict no-refund and no-cancellation 
            policy are cases of{" "}
            <span className="font-semibold">duplicate transactions</span> 
            {" "}or proven technical errors during payment. Refunds for such cases 
            may be processed after verification and approval by our team.
          </p>
        </Section>

        <Section id="contact" title="Contact Us">
          <p>
            If you have questions about this Refund & Cancellation Policy, 
            please reach out to us at:
          </p>
          <address className="not-italic space-y-2">
            <strong>Syntecxhub</strong>
            <br />
            MLIG/1347 Arra Bingawan Hanshpuram,
            <br />
            Kanpur Nagar, Uttar Pradesh, 208021
            <br />

            {/* Email */}
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-blue-400 text-lg" />
              <a
                href="mailto:info@syntecxhub.com"
                className="text-sky-600 underline"
              >
                info@syntecxhub.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-green-400 text-lg" />
              <a
                href="tel:+916393780295"
                className="text-sky-600 underline"
              >
                +91 6393780295
              </a>
            </div>
          </address>
        </Section>
      </div>
    </main>
  );
}