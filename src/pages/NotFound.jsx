// src/pages/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO meta tags */}
      <SEO
        title="404 Page Not Found - Sky Reserve"
        description="Oops! The page you’re looking for doesn’t exist on Sky Reserve. Return home or explore other pages to continue your journey."
        url="https://ak-sky-reserve.vercel.app/404"
        index={false} // noindex for Google
        pageType="WebPage"
      />

      {/* Page content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 text-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-white drop-shadow-lg">404</h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg border border-white text-white bg-white/20 backdrop-blur-sm shadow hover:bg-white/30 transition"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold shadow hover:bg-gray-100 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}