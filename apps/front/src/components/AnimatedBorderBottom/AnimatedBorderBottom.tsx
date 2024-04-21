import { ReactNode } from "react";
import "./AnimatedBorderBottom.css";
import { twMerge } from "tailwind-merge";

type AnimatedBorderBottom = {
  children: ReactNode;
  className?: string;
};

const AnimatedBorderBottom = ({
  children,
  className,
}: AnimatedBorderBottom) => {
  return (
    <div className={twMerge("hover-border mx-1", className)}>{children}</div>
  );
};

export default AnimatedBorderBottom;
