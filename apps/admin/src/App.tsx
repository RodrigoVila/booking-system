import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { useState } from "react";

import { Dashboard } from "@pages/Dashboard";
import { Users } from "@pages/Users";
import { Services } from "@pages/Services";
import { Workers } from "@pages/Workers";
import { AdminCalendar } from "@pages/AdminCalendar/AdminCalendar";
import { Sidebar } from "@components/Sidebar";
import { Navbar } from "@components/Navbar/Navbar";

export type PageType =
  | "Dashboard"
  | "Users"
  | "Services"
  | "Workers"
  | "Calendar";

const client = new QueryClient();

const App = () => {
  const [activePage, setActivePage] = useState<PageType>("Calendar");

  return (
    <div className="h-full min-h-screen">
      {/* <AdminProductModal /> */}

      <Navbar activePage={activePage} />
      <main className="flex h-full">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Users" && <Users />}
        {activePage === "Services" && <Services services={[]} />}
        {activePage === "Workers" && <Workers />}
        {activePage === "Calendar" && <AdminCalendar />}
      </main>
    </div>
  );
};

export default App;
