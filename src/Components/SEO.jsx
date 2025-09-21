import React from "react";
import { Title, Meta, Link } from "react-head";

const SEO = ({
  title = "Sky Reserve - Flight Booking & Reservations",
  description = "Sky Reserve helps you search, compare, and book flights worldwide with ease. Find the best deals and reserve your perfect journey today.",
  url = "https://ak-sky-reserve.vercel.app/",
  image = "https://ak-sky-reserve.vercel.app/android-chrome-512x512.png",
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
      name: "Sky Reserve",
      url: "https://ak-sky-reserve.vercel.app/",
      logo: {
        "@type": "ImageObject",
        url: "https://ak-sky-reserve.vercel.app/android-chrome-512x512.png",
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
      <Meta property="og:site_name" content="Sky Reserve" />

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