import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";  // 👈 import Clerk
import { HeadProvider } from "react-head";          // 👈 import HeadProvider
import App from "./App.jsx";
import "./index.css";

// Load Clerk Publishable Key from Vite env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key! Add VITE_CLERK_PUBLISHABLE_KEY to your .env file.");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <HeadProvider> 
        <App />
      </HeadProvider>
    </ClerkProvider>
  </StrictMode>
);