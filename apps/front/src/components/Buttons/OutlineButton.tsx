import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from ".";
import { PropsWithChildren } from "react";

type OutlineButtonProps = PropsWithChildren & ButtonProps;

export const OutlineButton = ({
  className,
  children,
  ...rest
}: OutlineButtonProps) => {


  return (
    <Button
      variant="outline"
      className={twMerge("rounded-full min-w-48", className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
