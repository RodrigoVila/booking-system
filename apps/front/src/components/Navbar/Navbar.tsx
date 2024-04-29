import { NavItem } from "./NavItem";
import { TitleLogo } from "../TitleLogo";
import { twMerge } from "tailwind-merge";

type NavbarProps = {
  isScrollOverHalfScreen: boolean;
};

export const Navbar = ({ isScrollOverHalfScreen }: NavbarProps) => {
  const navStyles = isScrollOverHalfScreen ? "bg-black" : "";
  return (
    <header
      className={twMerge(
        "fixed top-0 z-[2] w-full border-b-[1px] border-b-transparent p-2 duration-300",
        navStyles,
      )}
    >
      <nav className="relative flex w-full items-center justify-between">
        <TitleLogo
          type="navbar"
          isScrollOverHalfScreen={isScrollOverHalfScreen}
          onClick={() => window.scrollTo(0, 0)}
        />
        <ul className="flex items-center justify-end gap-3 font-cremis font-bold tracking-widest">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#booking">Booking</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
};
