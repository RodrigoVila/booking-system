import { QueryClient, QueryClientProvider } from "react-query";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollPosition } from "@hooks";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";

const client = new QueryClient();

const App = () => {
  const { isScrollOverHalfScreen } = useScrollPosition();

  return (
    <QueryClientProvider client={client}>
      <main className="h-full min-h-screen w-full text-white">
        <Navbar isScrollOverHalfScreen={isScrollOverHalfScreen} />
        <Home isScrollOverHalfScreen={isScrollOverHalfScreen} />
        <About />
        <Services />
        <Booking />
        <Contact />
        <Footer />
      </main>
    </QueryClientProvider>
  );
};

export default App;
