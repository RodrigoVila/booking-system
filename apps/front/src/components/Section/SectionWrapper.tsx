import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type SectionWrapperProps = PropsWithChildren &
  Omit<HTMLAttributes<HTMLElement>, "className"> & {
    className?: string;
    innerClassName?: string;
    withOverlay?: boolean;
  };

export const SectionWrapper = ({
  children,
  className,
  innerClassName,
  withOverlay = true,
  ...rest
}: SectionWrapperProps) => {
  return (
    <section
      className={twMerge(
        "relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-24 md:py-40",
        className,
      )}
      {...rest}
    >
      <div
        className={twMerge(
          "absolute inset-0",
          withOverlay && "bg-black bg-opacity-40",
        )}
      />
      <div className="z-[1] flex w-full flex-col items-center">{children}</div>
    </section>
  );
};
