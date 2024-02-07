import { BookingCalendar } from "@components/BookingCalendar";
import { Selector, TimeSelector } from "@components/Selectors";
import {
  DurationSelector,
  OptionSelector,
} from "@components/Selectors/OptionSelector";
import { ServiceSelector } from "@components/Selectors/ServiceSelector";
import { WorkerSelector } from "@components/Selectors/WorkerSelector";
import { ChangeEvent, useState } from "react";
import { ServiceType, WorkerType } from "shared-types";

type BookingProps = {
  services: ServiceType[];
};

const workers: WorkerType[] = [
  { name: "Damian", email: "damian@msn.com" },
  { name: "Alena", email: "alena@msn.com" },
];

const durations = [30, 60];

export const Booking = ({ services }: BookingProps) => {
  const [selectedService, setSelectedService] = useState<ServiceType>(
    services[0],
  );
  const [selectedWorker, setSelectedWorker] = useState<WorkerType>(workers[0]);
  const [selectedDate, setSelectedDate] = useState();
  const [duration, setDuration] = useState<number>();
  const [timeslot, setTimeslot] = useState<string[]>();

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionIndex(Number(event.currentTarget.value));
  };

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.currentTarget.value);
  };

  const handleWorkerChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorker(event.currentTarget.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation and API call logic here
    console.log("Booking Information:", {
      service: selectedService?.title,
      option: selectedService?.options[selectedOptionIndex],
      name,
      email,
      message,
    });
  };

  return (
    <section
      id="booking"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[rgba(97,53,34,0.9)] py-20"
    >
      <h2 className="text-6xl">Book a service</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <Selector
          label="Service"
          options={services}
          value={selectedService.title}
          onChange={handleServiceChange}
        />
        <Selector
          label="Masseur"
          options={workers}
          value={selectedWorker.name}
          onChange={handleServiceChange}
        />
        <Selector
          label="Duration"
          options={durations}
          value={selectedWorker.name}
          onChange={handleWorkerChange}
        />
        <Selector value={durations[0]} handleChange={handleOptionChange} />
        <TimeSelector handleChange={() => {}} />
      </form>
    </section>
  );
};
