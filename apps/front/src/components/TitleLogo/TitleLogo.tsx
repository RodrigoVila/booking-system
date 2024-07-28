import { twMerge } from "tailwind-merge";

type TitleLogoType = {
  type: "navbar" | "home";
  scrolledHalf: boolean;
  onClick?: () => void;
  className?: string;
};

export const TitleLogo = ({
  type,
  scrolledHalf,
  onClick,
  className,
}: TitleLogoType) => {
  const isNavbar = type === "navbar";

  const opacityStyle = scrolledHalf
    ? isNavbar
      ? "opacity-100"
      : "opacity-0"
    : isNavbar
      ? "opacity-0"
      : "opacity-100";

  const typeStyle = isNavbar ? "flex-row" : "flex-col";

  return (
    <div
      className={twMerge(
        "flex items-center justify-center transition-opacity duration-500",
        typeStyle,
        opacityStyle,
        isNavbar && "gap-1" ,
        className,
      )}
    >
      <img
        src="/logo-white.png"
        alt="Massage studio logo"
        className={twMerge(
          "h-auto",
          isNavbar ? "w-16 mr-1" : "w-64 md:w-80 xl:w-64",
          onClick ? "cursor-pointer" : "",
        )}
        onClick={onClick}
      />
      <h3
        className={
          isNavbar
            ? "hidden text-xl md:flex"
            : "px-4 text-center text-5xl md:text-7xl xl:text-5xl mb-1"
        }
      >
        Massage Studio
      </h3>
      <h3
        className={twMerge("tracking-wider",
          isNavbar
            ? "hidden text-xl md:flex"
            : "px-4 text-center text-6xl md:text-8xl"
        )}
      >
        NOORD
      </h3>
    </div>
  );
};
