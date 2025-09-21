import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}

export function CardIcon({ icon: Icon, className = "" }) {
  return (
    <div className={`flex items-center justify-center text-blue-500 ${className}`}>
      <Icon size={24} />
    </div>
  );
}