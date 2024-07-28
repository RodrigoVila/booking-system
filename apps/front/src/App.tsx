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
    description:
      "Are you looking for deep relaxation for your body and mind? Feel rejuvenated after this massage that promotes profound relaxation. This full-body massage, which combines various massage techniques, soothes muscles, removes tension knots, and provides deep relaxation. The massage stimulates blood circulation and the elimination of toxins. It is a full-body table massage using oil to help you relax even more.",
    options: [
      { duration: 60, price: 100 },
      { duration: 90, price: 150 },
    ],
    employees: ["1", "2"],
  },
  {
    title: "Neck & Shoulders",
    imgSrc: "service-4.jpg",
    description:
      "Tension often manifests in the shoulder blades and neck for many people. This can be due to poor posture and prolonged sitting, as well as work stress and a fast-paced work environment leading to significant muscle tension and cramps. If these tensions are not addressed and muscles are frequently overburdened, persistent pain can develop over time. For instance, headaches can arise from overly tense muscles in the neck, back, and shoulders that eventually harden and form muscle knots. With a back, neck, and shoulder massage, you can enjoy a relaxing treatment focused on these areas. Special massage techniques are used to loosen painful and stiff muscles, providing quick relief from specific complaints.",
    options: [{ duration: 30, price: 70 }],
    employees: ["1", "2"],
  },
  {
    title: "Pregnancy Care",
    imgSrc: "service-3.jpg",
    description:
      "During pregnancy, your body undergoes changes. Your muscles and joints become looser to make room for your baby and to prepare your body for childbirth. This can cause back, neck, and pelvic pain. A pregnancy massage helps you relax and reduce your physical discomfort. Additionally, massage improves blood circulation and the lymphatic system. This ensures better blood flow to the placenta, bringing more oxygen and nutrients to your baby and promoting the removal of waste products. This massage is offered between the 12th and 38th week of pregnancy.",
    options: [
      { duration: 60, price: 100 },
      { duration: 90, price: 150 },
    ],
    employees: ["1", "2"],
  },
  {
    title: "Postnatal Care",
    imgSrc: "service-2.jpg",
    description:
      "The period after childbirth is the perfect time to take good care of yourself. Only by taking care of yourself first can you be there for your child(ren) and provide the necessary care. During childbirth, your body has performed at its peak, making recovery and relaxation crucial in the postnatal phase. In short, a postnatal massage helps you relax and supports your recovery process. It also gives you some time and space for yourself, allowing you to be cared for instead of being the caregiver.",
    options: [{ duration: 60, price: 100 }],
    employees: ["1", "2"],
  },
  {
    title: "Deep Tissue",
    imgSrc: "service-5.jpg",
    description:
      "A deep tissue massage is a holistic form of bodywork that addresses various layers of the body to release tension and chronic stress. To alleviate tension in the deeper layers of muscle tissue, we apply firm pressure, sometimes using elbows or knuckles. Deep Tissue helps you achieve a greater range of motion, relieve stress, and improve your posture. As your physical (and therefore emotional) stress is released, your body begins to feel more flexible and energized.",
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
          <main className="w-full h-full min-h-screen">
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
