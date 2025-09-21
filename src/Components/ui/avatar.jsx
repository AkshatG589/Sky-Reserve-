import React from "react";

export function Avatar({ src, alt, className = "", size = "12", children }) {
  return (
    <div
      className={`rounded-full overflow-hidden border border-gray-300 w-${size} h-${size} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        children || (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
            {alt ? alt.charAt(0).toUpperCase() : "?"}
          </div>
        )
      )}
    </div>
  );
}

export function AvatarFallback({ children }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
      {children}
    </div>
  );
}