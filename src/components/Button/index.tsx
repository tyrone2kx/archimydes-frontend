import React from "react";
import LoaderIcon from "../Loader/LoaderIcon";

interface Props {
  label: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button: React.FC<Props> = ({ label, onClick, icon, className, type, isLoading }) => {
  return (
    <button
      className={`text-white bg-[#00b8c5] flex justify-center space-x-2 rounded-md p-3 text-xs px-6 shadow-lg ${className}`}
      onClick={onClick}
      type={type}
    >
      {icon}
      <p>{label}</p>
      {isLoading && <LoaderIcon isDark />}
    </button>
  );
};

export default Button;
