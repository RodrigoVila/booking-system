import { BiUser } from 'react-icons/bi';
import { PageType } from 'App';

type NavbarType = {
  activePage: PageType;
};

export const Navbar = ({ activePage }: NavbarType) => {
  return (
    <header className="flex w-full items-center justify-between bg-earth-4 p-6 px-4">
      <h3 className="text-lg">Massage Studio NOORD</h3>
      <h4 className="text-xl">{activePage}</h4>
      <div className="flex items-center gap-1">
        <BiUser />
        <h4 className="m-0 p-0">Hello, Damian</h4>
      </div>
    </header>
  );
};
