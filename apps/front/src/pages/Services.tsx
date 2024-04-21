import { Service } from "@components/Service";
import { ServiceType } from "shared-types";

type ServicesProps = {
  services: ServiceType[];
};

export const Services = ({ services }: ServicesProps) => {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-earth-2 py-20"
    >
      <h2 className="text-6xl text-black">Services</h2>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </section>
  );
};
