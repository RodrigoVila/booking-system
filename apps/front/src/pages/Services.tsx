import { SectionTitle, SectionWrapper } from "@components/Section";
import { Service } from "@components/Service";
import { ServiceType } from "shared-types";

type ServicesProps = {
  services: ServiceType[];
};

export const Services = ({ services }: ServicesProps) => {
  return (
    <SectionWrapper id="services" className="bg-earth-2" withOverlay={false}>
      <SectionTitle className="text-black">Services</SectionTitle>
      <div className="mt-24 flex flex-col gap-8 px-2 md:mt-40 md:gap-20 md:px-8">
        {services.map((service) => (
          <Service key={service.title} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
};
