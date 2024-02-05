import { Service } from "@components/Service";
import { ServiceType } from "shared-types";

type ServicesProps = {
  services: ServiceType[];
};

export const Services = ({ services }: ServicesProps) => {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-[#CB997E] py-20 text-white"
    >
      <h2 className="text-6xl">Services</h2>
      {services.map(({ title, description, imgSrc, options }) => (
        <Service
          title={title}
          description={description}
          imgSrc={imgSrc}
          options={options}
        />
      ))}
    </section>
  );
};
