import React from "react";
import Hero from "../utility/Home/Hero";
import WhyChooseUs from "../utility/Home/WhyChooseUs";
import Testimonials from "../utility/Home/Testimonials";
import FAQ from "../utility/Home/FAQ";
import CTA from "../utility/Home/CTA";
import SEO from "../Components/SEO"

const Home = () => {
  return (
    <>
<SEO
  title="SkyReserve - AI-Powered Flight Reservation System"
  description="Discover your next adventure with SkyReserve. Book flights, get AI-powered recommendations, and manage your travel seamlessly."
  url="https://ak-sky-reserve.vercel.app/"
  image="https://ak-sky-reserve.vercel.app/logo.png"
/>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      {/* Import and add other sections here */}
    </>
  );
};

export default Home;