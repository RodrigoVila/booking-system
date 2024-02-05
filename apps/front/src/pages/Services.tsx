import { Service } from "@components/Service/Service";
const DESC =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore provident eligendi suscipit in corporis ut ullam quae a laudantium? Utfugit at exercitationem dolorem eaque autem tempora, recusandae neque libero.";

const services = [
  {
    title: "Relaxing Spirit",
    img: "service-1.jpg",
    description: DESC,
    durations: [60, 90],
  },
  {
    title: "Neck & Shoulders",
    img: "service-4.jpg",
    description: DESC,
    durations: [30],
  },
  {
    title: "Pregnancy Care",
    img: "service-3.jpg",
    description: DESC,
    durations: [60, 90],
  },
  {
    title: "Postnatal Care",
    img: "service-2.jpg",
    description: DESC,
    durations: [60],
  },
  {
    title: "Deep Tissue",
    img: "service-5.jpg",
    description: DESC,
    durations: [60, 90],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-[#CB997E] py-20 text-white"
    >
      <h2 className="text-6xl">Services</h2>
      {services.map(({ title, description, img, durations }, index) => (
        <Service
          title={title}
          description={description}
          imgSrc={img}
          durations={durations}
          isEven={index % 2 === 0}
        />
      ))}
    </section>
  );
};
