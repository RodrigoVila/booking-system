// BookingCalendar.tsx
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type BookingCalendarProps = {
  onDateChange: Value;
};

export const BookingCalendar = ({ onDateChange }: BookingCalendarProps) => {
  const [value, setValue] = useState<Value>(new Date());

  const onChange = (nextValue: Value) => {
    setValue(nextValue);
    // onDateChange(nextValue);
  };

  return (
    <div id="calendar" className="rounded border p-4">
      <Calendar onChange={onChange} value={value} minDate={new Date()} />
    </div>
  );
};
