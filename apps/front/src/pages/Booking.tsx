import { BookingCalendar } from "@components/BookingCalendar";
import { BookButton } from "@components/Button/BookButton";
import { SectionTitle, SectionWrapper } from "@components/Section";
import { Selector } from "@components/Selectors";
import { AppContext } from "@context";
import { ChangeEvent, useContext, useState } from "react";
import { ServiceType, EmployeeType } from "shared-types";

type BookingProps = {
  services: ServiceType[];
};

type HandleChangeType = "service" | "employee" | "duration" | "date";

const employees: EmployeeType[] = [
  { name: "Damian", email: "damian@msn.com" },
  { name: "Alena", email: "alena@msn.com" },
];

const durations = [30, 60];

const parsedDurations = (durations: number[]) => {
  return durations.map((duration) => `${duration.toString()} min`);
};

export const Booking = ({ services }: BookingProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType>(
    employees[0],
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [duration, setDuration] = useState<number>();
  const [timeslot, setTimeslot] = useState<string[]>();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { selectedService, setSelectedService } = useContext(AppContext);

  const handleChange = (
    type: HandleChangeType,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    if (type === "date") setSelectedDate(new Date(value));
    if (type === "employee") setSelectedEmployee({ name: value });
    if (type === "service") setSelectedService({ title: value });
    if (type === "duration") setDuration(Number(value));
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
    <SectionWrapper className="bg-earth-8">
      <SectionTitle>Book a service</SectionTitle>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg flex-col items-center"
      >
        <Selector
          label="Service"
          options={services}
          value={selectedService?.title}
          onChange={(e) => handleChange("service", e)}
        />
        <Selector
          label="Masseur"
          options={employees}
          value={selectedEmployee.name}
          onChange={(e) => handleChange("employee", e)}
        />
        <Selector
          label="Duration"
          options={parsedDurations(durations)}
          value={duration}
          onChange={(e) => handleChange("duration", e)}
        />
        <BookingCalendar />
        <BookButton className="mt-8 rounded-md" />
      </form>
    </SectionWrapper>
  );
};
