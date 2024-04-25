import { SectionTitle, SectionWrapper } from "@components/Section";
import { Service } from "@components/Service";
import { ServiceType } from "shared-types";

type ServicesProps = {
  services: ServiceType[];
};

export const Services = ({ services }: ServicesProps) => {
  return (
    <SectionWrapper id="services" className="gap-20">
      <SectionTitle className="text-black ">Services</SectionTitle>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </SectionWrapper>
  );
};
