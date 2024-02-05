import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styling, you might want to customize this

type DayAvailability = "available" | "fullyBooked" | "closed";

interface CalendarDay {
  date: Date;
  availability: DayAvailability;
}

interface CalendarProps {
  availabilityData: CalendarDay[];
}

const determineDayClassName = (
  date: Date,
  availabilityData: CalendarDay[],
): string => {
  const dayInfo = availabilityData.find(
    (day) => day.date.toDateString() === date.toDateString(),
  );
  switch (dayInfo?.availability) {
    case "available":
      return "bg-white"; // Use your color for available days
    case "fullyBooked":
      return "bg-red-500"; // Use your color for fully booked days
    case "closed":
      return "bg-gray-500"; // Use your color for closed days
    default:
      return ""; // Default background if no data is available
  }
};

export const Calendar = ({ availabilityData }: CalendarProps) => {
  return (
    <ReactCalendar
      tileClassName={({ date }) =>
        determineDayClassName(date, availabilityData)
      }
    />
  );
};
