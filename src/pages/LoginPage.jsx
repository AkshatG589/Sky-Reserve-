import { SignIn } from "@clerk/clerk-react";
import SEO from "../Components/SEO"

const LoginPage = () => {
return (
  <div className="flex justify-center items-center h-screen">
    <SEO
  title="Login - Syntecxhub"
  description="Access your Syntecxhub account to manage your internships, training progress, and certificates. Login securely to continue."
  url="https://syntecxhub.vercel.app/login"
  image="https://syntecxhub.vercel.app/android-chrome-512x512.png"
/>
    <SignIn path="/login" routing="path" signUpUrl="/signup" />
  </div>
);
};
export default LoginPage;