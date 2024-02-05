import { twMerge } from "tailwind-merge";

type TitleLogoType = {
  type: "navbar" | "home";
  isScrollOverHalfScreen: boolean;
  className?: string;
};

export const TitleLogo = ({
  type,
  isScrollOverHalfScreen,
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

  const typeStyle = isNavbar ? "flex-row gap-4" : "flex-col";

  return (
    <div
      className={twMerge(
        "flex items-center justify-center text-2xl transition-opacity duration-500",
        typeStyle,
        opacityStyle,
        className,
      )}
    >
      <img
        src="/logo-white.png"
        alt="Massage studio logo"
        className={twMerge("h-auto", isNavbar ? "w-16" : "w-48")}
      />
      <h3 className={isNavbar ? "text-2xl" : "text-7xl"}>
        Massage Studio NOORD
      </h3>
    </div>
  );
};
