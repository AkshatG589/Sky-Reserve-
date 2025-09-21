// src/pages/RefundCancellationPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineBan,
  HiOutlineInformationCircle,
} from "react-icons/hi";
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
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
      {title}
    </h2>
    <div className="prose prose-indigo max-w-none text-gray-700">{children}</div>
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
  title="Refund & Cancellation Policy - Sky Reserve"
  description="Understand Sky Reserve’s refund and cancellation policy for flight bookings."
  url="https://ak-sky-reserve.vercel.app/refund-policy"
  image="https://ak-sky-reserve.vercel.app/android-chrome-512x512.png"
/>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Refund & <span className="text-white/90">Cancellation Policy</span>
          </h1>
          <p className="mt-4 text-white/90">Last updated: {lastUpdated}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <Section
          id="intro"
          title={
            <>
              <HiOutlineInformationCircle className="text-blue-500" /> Introduction
            </>
          }
        >
          <p>
            This Refund & Cancellation Policy explains how{" "}
            <strong>Sky Reserve</strong> (“Company”, “we”, “our”, “us”) manages
            payments, cancellations, and refunds for flight bookings. By using
            our platform, you agree to this policy.
          </p>
        </Section>

        <Section
          id="no-refund"
          title={
            <>
              <HiOutlineBan className="text-red-500" /> No Refund Policy
            </>
          }
        >
          <p>
            All confirmed bookings made through Sky Reserve are{" "}
            <span className="font-semibold text-red-600">non-refundable</span>.
            Once a flight ticket is issued, refunds are not available except as
            stated in the exceptions below.
          </p>
        </Section>

        <Section
          id="no-cancellation"
          title={
            <>
              <HiOutlineBan className="text-red-500" /> Cancellation Policy
            </>
          }
        >
          <p>
            Flight tickets once booked cannot be cancelled directly through Sky
            Reserve. Cancellation requests must comply with the respective{" "}
            <span className="font-semibold">airline’s policies</span>. We
            recommend reviewing airline terms before booking.
          </p>
        </Section>

        <Section
          id="exceptions"
          title={
            <>
              <HiOutlineInformationCircle className="text-yellow-500" /> Exceptions
            </>
          }
        >
          <p>
            Refunds or cancellations may be considered in the following cases:
          </p>
          <ul>
            <li>
              <span className="font-semibold">Duplicate transactions</span> caused
              by technical issues.
            </li>
            <li>
              <span className="font-semibold">Flight cancellations by airlines</span>{" "}
              due to operational reasons.
            </li>
            <li>
              <span className="font-semibold">Technical errors</span> during the
              booking/payment process verified by our support team.
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Contact Us">
          <p>
            For any concerns regarding refunds or cancellations, please contact
            our support team:
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