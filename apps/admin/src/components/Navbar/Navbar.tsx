import { PageType } from "App";
import { BiUser } from "react-icons/bi";

type NavbarType = {
  activePage: PageType;
};

export const Navbar = ({ activePage }: NavbarType) => {
  return (
    <header className="flex w-full items-center justify-between bg-slate-900 p-6 px-2">
      <h3 className="text-xl">Massage Studio NOORD</h3>
      <h4>{activePage}</h4>
      <div className="flex items-center gap-1">
        <BiUser />
        <h4 className="m-0 p-0">Hello, Damian</h4>
      </div>
    </header>
  );
};
