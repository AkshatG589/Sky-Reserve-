// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
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
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
    <div className="prose prose-indigo max-w-none text-gray-700">
      {children}
    </div>
  </motion.section>
);

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-gray-50">
       <SEO
        title="Privacy Policy - Syntecxhub"
        description="Read Syntecxhub's privacy policy to understand how we collect, use, and protect your personal information."
        url="https://syntecxhub.vercel.app/privacy-policy"
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
            Privacy <span className="text-white/90">Policy</span>
          </h1>
          <p className="mt-4 text-white/90">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <Section id="intro" title="Introduction">
          <p>
            At <strong>Syntecxhub</strong> (“Company”, “we”, “our”, “us”), we
            value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you access our website
            and services. By using our website, you agree to this Privacy Policy.
            If you do not agree, please discontinue use of our services.
          </p>
        </Section>

        <Section id="info-we-collect" title="Information We Collect">
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, or other details you provide when you contact us or fill out
              forms (e.g., internship application interest or contact queries).
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Device and browser
              information, operating system, referring URLs, and general usage
              data.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> IP address, access
              times, pages viewed, and interactions to help improve performance
              and security.
            </li>
          </ul>
        </Section>

        <Section id="how-we-use" title="How We Use Your Information">
          <ul>
            <li>Provide, operate, and maintain our website and services.</li>
            <li>Improve user experience and website functionality.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>
              Send updates or communications (only where you have provided consent
              or it is otherwise permitted by law).
            </li>
            <li>Detect, prevent, and address technical or security issues.</li>
          </ul>
        </Section>

        <Section id="cookies" title="Cookies and Tracking Technologies">
          <p>
            <strong>We do not currently use cookies or tracking technologies.</strong>{" "}
            If we introduce cookies in the future, we will update this Policy and,
            where required, present you with appropriate choices and controls
            (e.g., a cookie banner and settings).
          </p>
        </Section>

        <Section id="sharing" title="How We Share Your Information">
          <ul>
            <li>
              <strong>Service Providers:</strong> With trusted vendors who assist
              in operating our website (e.g., hosting, email delivery), bound by
              contractual confidentiality and data-protection obligations.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required by law, regulation,
              or legal process, or to protect our rights, users, or the public.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be transferred
              as part of that transaction.
            </li>
          </ul>
          <p>We do not sell your personal information.</p>
        </Section>

        <Section id="security" title="Data Security">
          <p>
            We implement reasonable technical and organizational measures to help
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section id="your-rights" title="Your Rights and Choices">
          <p>
            Depending on your location, you may have rights to access, correct,
            update, or delete your personal information; object to or restrict certain
            processing; and withdraw consent where processing is based on consent.
            To exercise these rights, please contact us using the details in the{" "}
            <a href="#contact" className="text-indigo-600 underline">
              Contact Us
            </a>{" "}
            section.
          </p>
        </Section>

        <Section id="third-parties" title="Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to review their privacy policies before providing any
            personal information.
          </p>
        </Section>

        <Section id="children" title="Children’s Privacy">
          <p>
            Our services are not directed to individuals under the age of 13, and
            we do not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, please
            contact us and we will take appropriate steps to delete such data.
          </p>
        </Section>

        <Section id="changes" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes
            in our practices or for legal and regulatory reasons. We will post the
            updated Policy on this page and update the “Last updated” date at the
            top. Your continued use of the website after changes become effective
            constitutes acceptance of the revised Policy.
          </p>
        </Section>

        <Section id="contact" title="Contact Us">
          <p>
            If you have any questions or requests regarding this Privacy Policy,
            you can reach us at:
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