import { SignIn } from "@clerk/clerk-react";
import SEO from "../Components/SEO"

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SEO
        title="Login - Sky Reserve"
        description="Access your Sky Reserve account to manage your flight bookings, AI-powered recommendations, and travel plans. Login securely to continue."
        url="https://ak-sky-reserve.vercel.app/login"
        image="https://ak-sky-reserve.vercel.app/android-chrome-512x512.png"
      />
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default LoginPage;