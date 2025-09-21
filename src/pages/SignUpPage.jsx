import { SignUp } from "@clerk/clerk-react";
import SEO from "../Components/SEO"

const SignUpPage = () => {
  return (
    <div className="mt-20 flex justify-center items-center h-screen">
      <SEO
        title="Sign Up - Sky Reserve"
        description="Join Sky Reserve to book flights, access AI-powered travel recommendations, and manage your reservations. Create your free account now!"
        url="https://ak-sky-reserve.vercel.app/signup"
        image="https://ak-sky-reserve.vercel.app/android-chrome-512x512.png"
      />
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
  );
};

export default SignUpPage;