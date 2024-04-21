import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Dashboard } from "@pages/Dashboard";
import { Users } from "@pages/Users";
import { Services } from "@pages/Services";
import { Employees } from "@pages/Employees";
import { AdminCalendar } from "@pages/AdminCalendar";
import { Sidebar } from "@components/Sidebar";
import { Navbar } from "@components/Navbar/Navbar";

import "./index.css";

// Import pages

export type PageType =
  | "Dashboard"
  | "Users"
  | "Services"
  | "Employees"
  | "Calendar";

const client = new QueryClient();

const App = () => {
  const [activePage, setActivePage] = useState<PageType>("Calendar");

  return (
    <QueryClientProvider client={client}>
      <div className="h-full min-h-screen">
        {/* <AdminProductModal /> */}

        <Navbar activePage={activePage} />
        <main className="flex h-full">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
          {activePage === "Dashboard" && <Dashboard />}
          {activePage === "Users" && <Users />}
          {activePage === "Services" && <Services services={[]} />}
          {activePage === "Employees" && <Employees />}
          {activePage === "Calendar" && <AdminCalendar />}
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
