import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariantType = 'rounded' | 'square';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
};

export const Button = ({
  className,
  children,
  variant = 'rounded',
  ...rest
}: ButtonProps) => {
  const variantStyles = variant === 'rounded' ? 'rounded-lg' : '';
  const themeStyles = false ? 'bg-white' : 'bg-slate-800';

  return (
    <button
      className={twMerge(
        'border-2 border-black px-4 py-2',
        variantStyles,
        themeStyles,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
