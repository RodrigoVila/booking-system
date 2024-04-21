import AnimatedBorderBottom from "@components/AnimatedBorderBottom/AnimatedBorderBottom";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type NavItemProps = {
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  children: ReactNode;
};

export const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <AnimatedBorderBottom>
      <li className="cursor-pointer">
        <a className="flex w-full py-1" href={href}>
          {children}
        </a>
      </li>
    </AnimatedBorderBottom>
  );
};
