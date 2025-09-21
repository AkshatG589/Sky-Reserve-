import React from "react";
import clsx from "clsx";

const Button = ({ children, className, variant = "solid", size = "md", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none";

  const variants = {
    solid: "bg-purple-600 text-white hover:bg-purple-700 shadow-md",
    outline: "border border-white text-white hover:bg-white hover:text-purple-700",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;