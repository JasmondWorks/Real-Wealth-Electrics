import React from "react";

const FeatureCard = ({ children, icon = "", title, body, className }) => {
  if (children)
    return <div className={`space-y-6 ${className}`}>{children}</div>;

  return (
    <div className="bg-neutral-100 space-y-9 p-8">
      {icon && <span className="text-5xl text-neutral-400">{icon}</span>}
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
