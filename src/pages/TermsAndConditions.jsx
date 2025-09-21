// src/pages/TermsAndConditions.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  FaUserShield,
  FaHandshake,
  FaMoneyBillWave,
  FaUserCheck,
  FaBan,
  FaGlobe,
} from "react-icons/fa";
import SEO from "../Components/SEO"


const Section = ({ id, title, icon: Icon, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4 }}
    className="space-y-3"
  >
    <h2 className="flex items-center text-xl md:text-2xl font-semibold text-gray-800">
      <Icon className="text-indigo-600 mr-2" /> {title}
    </h2>
    <div className="prose prose-indigo max-w-none text-gray-700">{children}</div>
  </motion.section>
);

export default function TermsAndConditions() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-gray-50">
      <SEO
        title="Terms & Conditions - Syntecxhub"
        description="Review Syntecxhub’s terms and conditions before using our training and internship services."
        url="https://syntecxhub.vercel.app/terms"
        image="https://syntecxhub.vercel.app/android-chrome-512x512.png"
      />
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Terms <span className="text-white/90">& Conditions</span>
          </h1>
          <p className="mt-4 text-white/90">Last updated: {lastUpdated}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <Section id="acceptance" title="Acceptance of Terms" icon={FaUserShield}>
          <p>
            By accessing or using the <strong>Syntecxhub</strong> website and
            services, you agree to be bound by these Terms and Conditions. If
            you do not agree, you may not use our services.
          </p>
        </Section>

        <Section id="services" title="Services Provided" icon={FaHandshake}>
          <p>
            We provide internship and training programs where users gain
            hands-on project experience, internship certificates, offer letters,
            and related materials. Some features may be accessible without login,
            but valid details are required for certificates and other official
            documents to be considered valid.
          </p>
        </Section>

        <Section id="payments" title="Payments and Fees" icon={FaMoneyBillWave}>
          <p>
            Our training and internship programs are chargeable. In the future,
            additional paid offerings such as hackathons and courses may be
            introduced. All fees are final and non-refundable unless otherwise
            specified.
          </p>
        </Section>

        <Section id="responsibilities" title="User Responsibilities" icon={FaUserCheck}>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide accurate, complete, and truthful information.</li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>
              Use our platform lawfully and avoid any activity that disrupts or
              harms the website.
            </li>
            <li>
              Respect intellectual property and refrain from unauthorized use of
              our content.
            </li>
            <li>
              Do not submit false information in order to obtain certificates or
              benefits.
            </li>
          </ul>
        </Section>

        <Section id="restrictions" title="Restrictions" icon={FaBan}>
          <p>
            You must not engage in activities that compromise the integrity or
            security of our platform, including hacking, spreading malware,
            reverse-engineering, or violating applicable laws.
          </p>
        </Section>

        <Section id="changes" title="Changes to Terms" icon={FaGlobe}>
          <p>
            We may update these Terms and Conditions at any time. Updates will
            be posted on this page, and the "Last updated" date will be revised.
            Continued use of our services after changes means you accept the
            updated Terms.
          </p>
        </Section>

        <Section id="contact" title="Contact Us" icon={HiOutlineMail}>
          <p>
            If you have any questions about these Terms and Conditions, you can
            reach us at:
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