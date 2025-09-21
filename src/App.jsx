import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import "./App.css"
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <div className="overflow-x-hidden mt-20 hide-scrollbar">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Toaster
          position="top"
          reverseOrder={false}
          containerStyle={{
            left: '50%',
            transform: 'translateX(-50%)', // centers horizontally
            top: '5rem', // optional spacing from top
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundCancellationPolicy />} />
          <Route path="/signup/*" element={<SignUpPage />} />
          <Route path="/login/*" element={<LoginPage />} />
          {/* ✅ Catch-all route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;