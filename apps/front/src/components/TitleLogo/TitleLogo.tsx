import { twMerge } from "tailwind-merge";

type TitleLogoType = {
  type: "navbar" | "home";
  isScrollOverHalfScreen: boolean;
  onClick?: () => void;
  className?: string;
};

export const TitleLogo = ({
  type,
  isScrollOverHalfScreen,
  onClick,
  className,
}: TitleLogoType) => {
  const isNavbar = type === "navbar";

  const opacityStyle = isScrollOverHalfScreen
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
        "flex items-center justify-center gap-4 text-2xl transition-opacity duration-500",
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
          isNavbar ? "w-16" : "w-48",
          onClick ? "cursor-pointer" : "",
        )}
        onClick={onClick}
      />
      <h3 className={isNavbar ? "hidden" : "text-center text-7xl"}>
        Massage Studio NOORD
      </h3>
    </div>
  );
};
