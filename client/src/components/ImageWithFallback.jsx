import React, { useState } from "react";
import { FiImage } from "react-icons/fi";

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  fallbackText = "Image Preview",
  fallbackTag = "",
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-6 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 mb-2">
          <FiImage className="w-5 h-5" />
        </div>
        {fallbackTag && (
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 mb-1">
            {fallbackTag}
          </span>
        )}
        <span className="text-xs font-medium text-slate-300 line-clamp-1">{fallbackText || alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800/40 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-slate-400 border-t-accent-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
