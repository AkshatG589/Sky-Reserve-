import React from "react";
import { Title, Meta, Link } from "react-head";

const SEO = ({
  title = "Syntecxhub - Internships & Trainings",
  description = "Syntecxhub provides industry-ready training programs and internships with real-world projects, certificates, and career support.",
  url = "https://syntecxhub.vercel.app/",
  image = "https://syntecxhub.vercel.app/android-chrome-512x512.png",
  type = "website",
  index = true,
  pageType = "WebPage",
  extraSchema = {},
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType,
    name: title,
    description,
    url,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    publisher: {
      "@type": "Organization",
      name: "Syntecxhub",
      url: "https://syntecxhub.vercel.app/",
      logo: {
        "@type": "ImageObject",
        url: "https://syntecxhub.vercel.app/android-chrome-512x512.png",
      },
    },
    ...extraSchema,
  };

  return (
    <>
      {/* Title */}
      <Title>{title}</Title>

      {/* Meta Description */}
      <Meta name="description" content={description} />
      <Meta name="robots" content={index ? "index, follow" : "noindex, nofollow"} />
      <Link rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={url} />
      <Meta property="og:type" content={type} />
      <Meta property="og:site_name" content="Syntecxhub" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};

export default SEO;