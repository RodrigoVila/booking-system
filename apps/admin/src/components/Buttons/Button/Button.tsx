import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { Loader } from '@components/Loader';

type ButtonVariantType = 'rounded' | 'square' | 'outline' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: ButtonVariantType;
};

export const Button = ({
  className,
  children,
  isLoading = false,
  variant = 'rounded',
  ...rest
}: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 transition duration-300 ease-in-out disabled:bg-gray-700 disabled:border-transparent';

  const variantStyles = {
    rounded: 'rounded-lg bg-white text-black hover:bg-white hover:text-black',
    outline: 'border-[1px] border-white  hover:bg-white hover:text-black',
    transparent:
      'focus:shadow-outline w-full appearance-none rounded border hover:bg-white hover:text-black',
    square: '',
  };

  const selectedVariantStyles = variantStyles[variant];

  return (
    <button
      className={twMerge(baseStyles, selectedVariantStyles, className)}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
