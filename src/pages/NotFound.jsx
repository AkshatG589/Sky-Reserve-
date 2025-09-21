// src/pages/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../Components/SEO"; // ✅ adjust the path if SEO.jsx is inside Components

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ SEO meta tags */}
      <SEO
        title="404 Page Not Found - Syntecxhub"
        description="Oops! The page you’re looking for doesn’t exist on Syntecxhub."
        url="https://syntecxhub.vercel.app/404"
        index={false} // ❌ noindex so Google won’t list it
        pageType="WebPage"
      />

      {/* Page content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border bg-white shadow hover:bg-gray-50"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-black text-white shadow hover:opacity-90"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}