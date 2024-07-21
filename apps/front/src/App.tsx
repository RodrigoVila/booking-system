import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import { ServiceType } from "shared-types";

import { Footer } from "@components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollPosition } from "@hooks";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AppProvider } from "@context";

import "react-toastify/dist/ReactToastify.css";

const client = new QueryClient();

const DESC =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore provident eligendi suscipit in corporis ut ullam quae a laudantium? Utfugit at exercitationem dolorem eaque autem tempora, recusandae neque libero.";

const services: ServiceType[] = [
  {
    title: "Relaxing Spirit",
    imgSrc: "service-1.jpg",
    description: DESC,
    options: [
      { duration: 60, price: 100 },
      { duration: 90, price: 150 },
    ],
    employees: ["1", "2"],
  },
  {
    title: "Neck & Shoulders",
    imgSrc: "service-4.jpg",
    description: DESC,
    options: [{ duration: 30, price: 70 }],
    employees: ["1", "2"],
  },
  {
    title: "Pregnancy Care",
    imgSrc: "service-3.jpg",
    description: DESC,
    options: [
      { duration: 60, price: 100 },
      { duration: 90, price: 150 },
    ],
    employees: ["1", "2"],
  },
  {
    title: "Postnatal Care",
    imgSrc: "service-2.jpg",
    description: DESC,
    options: [{ duration: 60, price: 100 }],
    employees: ["1", "2"],
  },
  {
    title: "Deep Tissue",
    imgSrc: "service-5.jpg",
    description: DESC,
    options: [
      { duration: 60, price: 120 },
      { duration: 90, price: 180 },
    ],
    employees: ["1", "2"],
  },
];

const App = () => {
  const { scrolledHalf } = useScrollPosition();

  return (
    <>
      <QueryClientProvider client={client}>
        <AppProvider>
          <main className="h-full min-h-screen w-full">
            <Navbar scrolledHalf={scrolledHalf} />
            <Home scrolledHalf={scrolledHalf} />
            <About />
            <Services services={services} />
            {/* <Booking services={services} /> */}
            <Contact />
            <Footer />
          </main>
        </AppProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export default App;
