import React from "react";

const ButtonPrimaryTwo = ({ children, onClick }) => {
  return (
    <button
      className="bg-white border border-primary-color text-primary-color font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimaryTwo;
