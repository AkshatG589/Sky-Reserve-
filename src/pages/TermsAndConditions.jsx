// src/pages/TermsAndConditions.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  FaUserShield,
  FaHandshake,
  FaMoneyBillWave,
  FaUserCheck,
  FaBan,
  FaGlobe,
} from "react-icons/fa";
import SEO from "../Components/SEO";

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
      <Icon className="text-blue-600 mr-2" /> {title}
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
  title="Terms & Conditions - Sky Reserve"
  description="Review Sky Reserve’s terms and conditions before booking flights and using our services."
  url="https://ak-sky-reserve.vercel.app/terms"
  image="https://ak-sky-reserve.vercel.app/android-chrome-512x512.png"
/>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 opacity-90" />
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
            By booking a flight or using the <strong>Sky Reserve</strong>{" "}
            platform, you agree to comply with these Terms and Conditions. If
            you do not accept these terms, please do not use our services.
          </p>
        </Section>

        <Section id="services" title="Services Provided" icon={FaHandshake}>
          <p>
            Sky Reserve provides online flight search, booking, and related
            travel services. We act as an intermediary between users and
            airlines. Some features may require an account, while browsing
            flights is available to all users.
          </p>
        </Section>

        <Section id="payments" title="Payments and Fees" icon={FaMoneyBillWave}>
          <p>
            All bookings made through Sky Reserve require full payment at the
            time of confirmation. Prices displayed are inclusive of base fares,
            applicable taxes, and service charges. Payments are{" "}
            <span className="font-semibold">non-refundable</span> unless covered
            under our Refund & Cancellation Policy.
          </p>
        </Section>

        <Section id="responsibilities" title="User Responsibilities" icon={FaUserCheck}>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide accurate passenger details when booking flights.</li>
            <li>
              Ensure the validity of travel documents such as passports and
              visas.
            </li>
            <li>
              Use our services lawfully and avoid fraudulent or misleading
              activity.
            </li>
            <li>
              Respect airline and government rules regarding baggage, check-in,
              and travel restrictions.
            </li>
          </ul>
        </Section>

        <Section id="restrictions" title="Restrictions" icon={FaBan}>
          <p>
            Users must not attempt to interfere with our platform’s operations
            through hacking, data scraping, or unauthorized access. Misuse of
            Sky Reserve services may lead to suspension of accounts and legal
            action.
          </p>
        </Section>

        <Section id="changes" title="Changes to Terms" icon={FaGlobe}>
          <p>
            Sky Reserve reserves the right to modify these Terms & Conditions at
            any time. Updated versions will be posted on this page with a new
            “Last updated” date. Continued use of our services implies
            acceptance of the revised terms.
          </p>
        </Section>

        <Section id="contact" title="Contact Us" icon={HiOutlineMail}>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us:
          </p>

          <address className="not-italic space-y-2">
            <strong>Sky Reserve</strong>
            <br />
            Corporate Office: Indira Nagar, Lucknow, Uttar Pradesh, 226016
            <br />
            India
            <br />
            {/* Email */}
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-blue-400 text-lg" />
              <a
                href="mailto:support@skyreserve.com"
                className="text-sky-600 underline"
              >
                support@skyreserve.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-green-400 text-lg" />
              <a href="tel:+911234567890" className="text-sky-600 underline">
                +91 1234567890
              </a>
            </div>
          </address>
        </Section>
      </div>
    </main>
  );
}