import { SignUp } from "@clerk/clerk-react";
import SEO from "../Components/SEO"

const SignUpPage = () => {
  return (

    <div className="mt-20 flex justify-center items-center h-screen">
          <SEO
  title="Sign Up - Syntecxhub"
  description="Join Syntecxhub to access industry-ready internships, training programs, and career support. Create your free account now!"
  url="https://syntecxhub.vercel.app/signup"
  image="https://syntecxhub.vercel.app/android-chrome-512x512.png"
/>
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
  );
};

export default SignUpPage;