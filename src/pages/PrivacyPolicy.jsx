// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import SEO from "../Components/SEO";

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
    <div className="prose prose-sky max-w-none text-gray-700">{children}</div>
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
  title="Privacy Policy - Sky Reserve"
  description="Read Sky Reserve's privacy policy to learn how we handle, protect, and safeguard your flight booking data and personal information."
  url="https://ak-sky-reserve.vercel.app/privacy-policy"
  image="https://ak-sky-reserve.vercel.app/android-chrome-512x512.png"
/>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Privacy <span className="text-white/90">Policy</span>
          </h1>
          <p className="mt-4 text-white/90">Last updated: {lastUpdated}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <Section id="intro" title="Introduction">
          <p>
            At <strong>Sky Reserve</strong> (“Company”, “we”, “our”, “us”), your
            trust is our priority. This Privacy Policy explains how we collect,
            use, and safeguard your personal information when you search and
            book flights using our platform. By continuing to use our services,
            you consent to the practices described in this Policy.
          </p>
        </Section>

        <Section id="info-we-collect" title="Information We Collect">
          <ul>
            <li>
              <strong>Booking Information:</strong> Name, email address, phone
              number, passport/ID details, and payment information when booking
              flights.
            </li>
            <li>
              <strong>Travel Information:</strong> Departure and arrival cities,
              travel dates, airline preferences, and booking history.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device type, operating system, and interaction data for improving
              user experience.
            </li>
          </ul>
        </Section>

        <Section id="how-we-use" title="How We Use Your Information">
          <ul>
            <li>Process flight searches, bookings, and payments.</li>
            <li>
              Provide booking confirmations, updates, and customer support.
            </li>
            <li>
              Enhance our platform, optimize search results, and improve service
              reliability.
            </li>
            <li>
              Send flight updates, offers, and promotional content (only if you
              opt-in).
            </li>
            <li>Protect our systems from fraudulent or unauthorized activity.</li>
          </ul>
        </Section>

        <Section id="cookies" title="Cookies and Tracking Technologies">
          <p>
            Sky Reserve may use cookies to personalize your experience and track
            essential usage metrics. These cookies help us remember your
            preferences (like recent searches). You can disable cookies in your
            browser settings, but some features may not function properly.
          </p>
        </Section>

        <Section id="sharing" title="How We Share Your Information">
          <ul>
            <li>
              <strong>Airline & Travel Partners:</strong> Shared only as
              necessary to process your bookings.
            </li>
            <li>
              <strong>Service Providers:</strong> Payment gateways, cloud
              hosting, and analytics providers under strict confidentiality
              agreements.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When disclosure is required by
              applicable laws or to protect our rights and users.
            </li>
          </ul>
          <p>We never sell your personal information to third parties.</p>
        </Section>

        <Section id="security" title="Data Security">
          <p>
            We apply strong encryption and secure transmission methods to
            protect your data during bookings. While we strive to safeguard all
            information, no system is 100% secure, and we encourage safe online
            practices when sharing personal data.
          </p>
        </Section>

        <Section id="your-rights" title="Your Rights and Choices">
          <p>
            Depending on your region, you may have rights to access, modify, or
            delete your personal information. You may also choose to opt-out of
            marketing communications at any time. To request changes, please
            contact us using the details in the{" "}
            <a href="#contact" className="text-sky-600 underline">
              Contact Us
            </a>{" "}
            section.
          </p>
        </Section>

        <Section id="third-parties" title="Third-Party Links">
          <p>
            Our platform may link to third-party airline or travel sites. Sky
            Reserve is not responsible for their privacy practices, and we
            recommend reviewing their policies before sharing personal
            information.
          </p>
        </Section>

        <Section id="children" title="Children’s Privacy">
          <p>
            Sky Reserve does not knowingly allow bookings by individuals under
            the age of 13 without parental consent. If such data is found, we
            will promptly delete it.
          </p>
        </Section>

        <Section id="changes" title="Changes to This Policy">
          <p>
            We may revise this Privacy Policy periodically. Updates will be
            posted here with a revised “Last Updated” date. We encourage users
            to review this page regularly to stay informed.
          </p>
        </Section>

        <Section id="contact" title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy or your data
            rights, please reach out to us:
          </p>
          <address className="not-italic space-y-2">
            <strong>Sky Reserve</strong>
            <br />
            221B, Civil Lines, Kanpur Nagar,
            <br />
            Uttar Pradesh, 208001
            <br />
            {/* Email */}
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-sky-500 text-lg" />
              <a
                href="mailto:privacy@skyreserve.com"
                className="text-sky-600 underline"
              >
                privacy@skyreserve.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-green-500 text-lg" />
              <a href="tel:+919876543210" className="text-sky-600 underline">
                +91 98765 43210
              </a>
            </div>
          </address>
        </Section>
      </div>
    </main>
  );
}