import { PageType } from "App";
import { Dispatch } from "react";
import { twMerge } from "tailwind-merge";

type SidebarType = {
  activePage: PageType;
  setActivePage: Dispatch<React.SetStateAction<PageType>>;
};

export const Sidebar = ({ activePage, setActivePage }: SidebarType) => {
  const itemStyles =
    "cursor-pointer border-b-2 border-b-transparent hover:border-b-white duration-200";

  return (
    <aside className="flex h-screen flex-col items-center bg-slate-900 px-8 pt-4">
      <ul className="flex w-full flex-col items-center justify-start gap-6 font-bold tracking-wide">
        <li
          className={twMerge(
            itemStyles,
            activePage === "Dashboard" && "border-b-white",
          )}
          onClick={() => setActivePage("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={twMerge(
            itemStyles,
            activePage === "Users" && "border-b-white",
          )}
          onClick={() => setActivePage("Users")}
        >
          Users
        </li>
        <li
          className={twMerge(
            itemStyles,
            activePage === "Services" && "border-b-white",
          )}
          onClick={() => setActivePage("Services")}
        >
          Services
        </li>
        <li
          className={twMerge(
            itemStyles,
            activePage === "Employees" && "border-b-white",
          )}
          onClick={() => setActivePage("Employees")}
        >
          Employees
        </li>
        <li
          className={twMerge(
            itemStyles,
            activePage === "Calendar" && "border-b-white",
          )}
          onClick={() => setActivePage("Calendar")}
        >
          Calendar
        </li>
      </ul>
    </aside>
  );
};
