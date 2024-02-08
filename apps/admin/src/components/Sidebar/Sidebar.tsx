import { PageType } from "App";
import { TitleLogo } from "../TitleLogo";
import { Dispatch, SetStateAction } from "react";
import { twJoin, twMerge } from "tailwind-merge";

type SidebarType = {
  activePage: PageType;
  setActivePage: Dispatch<React.SetStateAction<PageType>>;
};

export const Sidebar = ({ activePage, setActivePage }: SidebarType) => {
  const itemStyles =
    "cursor-pointer px-4 border-b-2 border-b-transparent hover:border-b-white duration-200 rounded-md";

  return (
    <aside className="flex h-screen flex-col items-center bg-slate-900 px-8 pt-4">
      <ul className="flex w-full flex-col items-center justify-start gap-6 font-cremis font-bold tracking-widest">
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
            activePage === "Workers" && "border-b-white",
          )}
          onClick={() => setActivePage("Workers")}
        >
          Workers
        </li>
        <li
          className={twMerge(
            itemStyles,
            activePage === "Timeslots" && "border-b-white",
          )}
          onClick={() => setActivePage("Timeslots")}
        >
          Timeslots
        </li>
      </ul>
    </aside>
  );
};
