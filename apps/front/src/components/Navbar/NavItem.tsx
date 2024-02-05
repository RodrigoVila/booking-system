import type { ReactNode, AnchorHTMLAttributes } from "react";

type NavItemProps = {
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  children: ReactNode;
};

export const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li className="border-1 cursor-pointer rounded-md border-transparent duration-200 hover:border-black hover:bg-white hover:text-black">
      <a className="flex w-full px-2 py-1" href={href}>
        {children}
      </a>
    </li>
  );
};
