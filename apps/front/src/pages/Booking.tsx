import { Calendar } from "@components/Calendar";
import React, { useState } from "react";
import { ServiceType } from "shared-types";

type BookingProps = {
  services: ServiceType[];
};

export const Booking = ({ services }: BookingProps) => {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(
    services[0].title,
  );
  const selectedService = services.find(
    (service) => service.title === selectedServiceTitle,
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleServiceChange = (event) => {
    const serviceTitle = event.target.value;
    setSelectedServiceTitle(serviceTitle);
    setSelectedOptionIndex(0); // Reset to the first option
  };

  const handleOptionChange = (event) => {
    setSelectedOptionIndex(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation and API call logic here
    console.log("Booking Information:", {
      service: selectedServiceTitle,
      option: selectedService?.options[selectedOptionIndex],
      name,
      email,
      message,
    });
  };

  return (
    <section
      id="booking"
      className="flex flex-col items-center rounded-lg bg-[#A5A58D] p-8 text-black"
    >
      <h3 className="mb-4 text-4xl">Book a Service</h3>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="service" className="text-md mb-2 block font-medium">
            Service
          </label>
          <select
            id="service"
            value={selectedServiceTitle}
            onChange={handleServiceChange}
            className="form-select w-full rounded-md"
          >
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="option" className="text-md mb-2 block font-medium">
            Options
          </label>
          <select
            id="option"
            value={selectedOptionIndex}
            onChange={handleOptionChange}
            className="form-select w-full rounded-md"
          >
            {selectedService?.options.map((option, index) => (
              <option
                key={index}
                value={index}
              >{`${option.duration} mins - $${option.price}`}</option>
            ))}
          </select>
        </div>
        {/* Name, Email, Message Fields and Submit Button remain unchanged */}
      </form>
      <Calendar
        availabilityData={[{ availability: "available", date: new Date() }]}
      />
    </section>
  );
};
