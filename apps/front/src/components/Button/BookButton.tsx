import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from ".";

export const BookButton = ({ className, ...rest }: ButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://widget.treatwell.nl/salon/massage-studio-noord/",
      "_blank",
    );
  };

  return (
    <Button
      variant="outline"
      className={twMerge("rounded-full px-10", className)}
      onClick={handleClick}
      {...rest}
    >
      <a href="#booking" className="h-full w-full px-10 py-2">
        Book
      </a>
    </Button>
  );
};
