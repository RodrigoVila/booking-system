import { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "className"
> & {
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = ({ label, onChange, className, ...rest }: InputProps) => {
  const disabledStyles = rest.disabled ? "bg-slate-300 text-slate-600" : "";
  return (
    <div className="mb-4 w-full">
      {label ? (
        <label className="mb-1 block text-lg" htmlFor={rest.name}>
          {label}
        </label>
      ) : null}

      <div className="flex">
        <input
          className={twMerge(
            "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none xl:py-3 xl:text-lg",
            className,
            disabledStyles,
          )}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};
