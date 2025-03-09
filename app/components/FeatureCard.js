import React from "react";

const FeatureCard = ({ children, icon = "", title, body, className }) => {
  if (children)
    return <div className={`space-y-6 ${className}`}>{children}</div>;

  return (
    <div className="flex flex-col gap-8 text-center bg-white rounded-md transition-all duration-300 group">
      {icon && (
        <span className="text-4xl text-neutral-400 group-hover:text-primary transition-colors flex justify-center">
          {icon}
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-neutral-700">{title}</h4>
        <div className="flex-1 flex flex-col justify-center text-neutral-500  rounded-lg">
          {body}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
