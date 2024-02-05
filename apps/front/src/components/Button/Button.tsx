import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariantType = "rounded" | "square" | "outline" | "transparent";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
};

export const Button = ({
  className,
  children,
  variant = "rounded",
  ...rest
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 transition duration-300 ease-in-out";

  const variantStyles = {
    rounded: "rounded-lg bg-white text-black hover:bg-white hover:text-black",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    transparent:
      "focus:shadow-outline w-full appearance-none rounded border hover:bg-white hover:text-black",
    square: "",
  };

  const selectedVariantStyles = variantStyles[variant];

  return (
    <button
      className={twMerge(baseStyles, selectedVariantStyles, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
