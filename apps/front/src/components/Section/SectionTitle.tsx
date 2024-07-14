import { ReactNode, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type SectionTitleProps = PropsWithChildren & {
  children: ReactNode;
  className?: string;
};

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={twMerge("text-center text-5xl md:text-6xl", className)}>
      {children}
    </h2>
  );
};
