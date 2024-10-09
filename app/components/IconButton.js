import React from "react";

const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="p-3 hover:bg-neutral-200 rounded-full">
      {icon}
    </button>
  );
};

export default IconButton;
