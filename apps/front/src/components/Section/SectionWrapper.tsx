import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type SectionWrapperProps = PropsWithChildren &
  Omit<HTMLAttributes<HTMLElement>, "className"> & {
    className?: string;
  };

export const SectionWrapper = ({
  children,
  className,
  ...rest
}: SectionWrapperProps) => {
  return (
    <section
      className={twMerge(
        "flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-earth-2 py-40",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
