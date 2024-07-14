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
        "flex items-center justify-center gap-4 transition-opacity duration-500",
        typeStyle,
        opacityStyle,
        className,
      )}
    >
      <img
        src="/logo-white.png"
        alt="Massage studio logo"
        className={twMerge(
          "h-auto",
          isNavbar ? "w-16" : "w-24 md:w-36",
          onClick ? "cursor-pointer" : "",
        )}
        onClick={onClick}
      />
      <h3
        className={
          isNavbar
            ? "hidden text-xl md:flex"
            : "px-4 text-center text-3xl md:text-6xl"
        }
      >
        Massage Studio NOORD
      </h3>
    </div>
  );
};
