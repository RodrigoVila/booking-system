import { ElementType, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type OpacityWrapperProps = PropsWithChildren & {
  className?: string;
  as?: ElementType;
};

export const OpacityWrapper = ({
  children,
  className,
  as: Component = "div",
}: OpacityWrapperProps) => {
  return (
    <Component
      className={twMerge(
        "flex h-full w-full items-center justify-center bg-black bg-opacity-40",
        className,
      )}
    >
      {children}
    </Component>
  );
};
