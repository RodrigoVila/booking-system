import { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Option = { name?: string; title?: string };

type SelectorProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[] | string[] | number[];
};

export const Selector = ({
  id,
  label,
  options,
  value,
  onChange,
  children,
  className,
  ...rest
}: SelectorProps) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label
          htmlFor={id || label?.toLowerCase()}
          className="text-md mb-2 block tracking-wider"
        >
          {label}
        </label>
      )}
      <select
        id={id || label?.toLowerCase()}
        value={value}
        onChange={onChange}
        className={twMerge(
          "text-md w-full rounded-md bg-earth-2 py-2 pl-1 font-mono text-black",
          className,
        )}
        {...rest}
      >
        {options.map((option) => {
          const value =
            typeof option === "string" ? option : option.title || option.name;
          return (
            <option key={value} value={value} className="font-mono">
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
