// BookingCalendar.tsx
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const BookingCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  const onChange = (nextValue: Value) => {
    setValue(nextValue);
    // onDateChange(nextValue);
  };

  return (
    <div id="calendar" className="flex flex-col items-center justify-center">
      <label className="text-md mb-2 block tracking-wider text-white">
        Choose your date
      </label>
      <Calendar onChange={onChange} value={value} minDate={new Date()} />
    </div>
  );
};
