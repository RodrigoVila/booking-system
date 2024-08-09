import { NavItem } from "./NavItem";
import { TitleLogo } from "../TitleLogo";
import { twMerge } from "tailwind-merge";

type NavbarProps = {
  scrolledHalf: boolean;
};

export const Navbar = ({ scrolledHalf }: NavbarProps) => {
  const navStyles = scrolledHalf ? "bg-black" : "";
  return (
    <header
      className={twMerge(
        "fixed top-0 z-[2] w-full border-b-[1px] border-b-transparent p-2 duration-300",
        navStyles,
      )}
    >
      <nav aria-label="Main navigation" className="relative flex items-center justify-between w-full">
        <TitleLogo
          type="navbar"
          scrolledHalf={scrolledHalf}
          onClick={() => window.scrollTo(0, 0)}
        />
        <ul
          className={twMerge(
            "flex items-center justify-end gap-3 font-bold tracking-widest",
            scrolledHalf ? "flex" : "hidden",
          )}
        >
          <NavItem href="#about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          {/* <NavItem href="#booking">Booking</NavItem> */}
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
};
