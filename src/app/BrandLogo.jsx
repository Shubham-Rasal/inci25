
'use client'
import * as React from "react";

export const BrandLogo = ({ src, alt, className, withDivider }) => {
  return (
    <div className="flex flex-col bg-white justify-center items-center">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={className}
      />
      {withDivider && (
        <div className="flex mt-3 rounded-full shadow-sm min-h-[6px] bg-white" />
      )}
    </div>
  );
};