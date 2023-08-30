import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className = "", ...rest }: ButtonTypes) => {
  return (
    <button
      className={`py-3 w-full bg-accent hover:bg-primary-3 text-white transition-colors duration-200 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
