import React from "react";

const CustomButton = ({ children, variant = "primary", className = "", ...props }) => {
  // Made more reusable with variant
  const baseClasses = "text-white font-semibold py-3 px-7 rounded-xl transition-all duration-300 hover:translate-x-2";
  const variantClasses = variant === "primary" ? "bg-brand-indigo-600 hover:bg-indigo-700" : "bg-gray-600 hover:bg-gray-700";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default React.memo(CustomButton);  // Memo for perf