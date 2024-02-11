import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AdminCalendar.css";
import { CalendarDetail } from "./CalendarDetail";
import { CalendarValue } from "shared-types";

export const AdminCalendar = () => {
  const [value, setValue] = useState<CalendarValue>(new Date());

  const onChange = (nextValue: CalendarValue) => {
    setValue(nextValue);
  };

  return (
    <div id="calendar" className="flex gap-2 border-0">
      <Calendar onChange={onChange} value={value} />
      <CalendarDetail selectedDate={value} />
    </div>
  );
};
