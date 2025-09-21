// NavBar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaSearch, FaPlane, FaRobot } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import logo from "../assets/apple-touch-icon.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

  const links = [
    { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    { name: "Search Flights", path: "/flights", icon: <FaSearch className="mr-2" /> },
    {
      name: "My Bookings",
      path: "/bookings",
      icon: <FaPlane className="mr-2 transform -rotate-45" />,
    },
    { name: "AI Assistant", path: "/assistant", icon: <FaRobot className="mr-2" /> },
  ];

  const username = user?.fullName || user?.username || "User";
  const email = user?.primaryEmailAddress?.emailAddress;

  return (
    <>
      {/* Top Navbar */}
      <nav className="backdrop-blur-md bg-white/30 text-black fixed top-0 left-0 w-full z-50 shadow-md border-b border-white/30">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Gradient Border + White Background Inside */}
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600">
              <div className="bg-white rounded-full p-1 overflow-hidden">
                <img
                  src={logo}
                  alt="Sky Reserve Logo"
                  className="h-10 w-10 object-cover scale-105"
                />
              </div>
            </div>
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-wide flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Sky
              </span>
              <span className="ml-1 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Reserve
              </span>
            </Link>
          </div>

          {/* Desktop Links + Auth/User */}
          <div className="hidden lg:flex items-center gap-8 text-lg">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative group px-2 py-1 rounded-md transition-all duration-300 flex items-center
                    ${
                      isActive
                        ? "text-purple-700 bg-purple-200/40 backdrop-blur-sm"
                        : "hover:text-purple-600"
                    }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                  {!isActive && (
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Desktop Auth/User */}
            <div className="flex gap-3 ml-6 items-center">
              <SignedOut>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-3">
                  <UserButton afterSignOutUrl="/" />
                  <div className="flex flex-col">
                    <span className="font-medium text-purple-700">{username}</span>
                    <span className="text-sm text-gray-500">{email}</span>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              <HiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile + Medium Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-70 md:w-[40vw] backdrop-blur-lg bg-white/20 text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg border-l border-white/30 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/30">
          <div className="flex items-center gap-2">
            {/* Same gradient border with white background */}
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600">
              <div className="bg-white rounded-full p-1 overflow-hidden">
                <img
                  src={logo}
                  alt="Sky Reserve Logo"
                  className="h-10 w-10 object-cover scale-105"
                />
              </div>
            </div>
            <Link
              to="/"
              className="text-xl font-extrabold tracking-wide flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Sky
              </span>
              <span className="ml-1 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Reserve
              </span>
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-600 transition-colors duration-300"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Main Links */}
        <div className="flex-1 flex flex-col gap-6 text-lg px-6 mt-6">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 75}ms` }}
                className={`transition-all duration-300 transform hover:translate-x-2 px-2 py-1 rounded-md flex items-center
                ${
                  isActive
                    ? "text-purple-700 bg-purple-200/40 backdrop-blur-sm"
                    : "hover:text-purple-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Footer Auth/User */}
        <div className="px-6 py-6 border-t border-white/30">
          <SignedOut>
            <div className="flex gap-3">
              <Link
                to="/login"
                className="flex-1 py-2 rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex-1 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { avatarBox: "w-14 h-14" } }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-purple-700">{username}</span>
                <span className="text-sm text-gray-600">{email}</span>
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default NavBar;