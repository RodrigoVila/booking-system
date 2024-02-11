import React from "react";
import { CalendarValue } from "shared-types";

type CalendarDetailProps = {
  selectedDate: CalendarValue;
};

export const CalendarDetail = ({ selectedDate }: CalendarDetailProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-extrabold">
          {selectedDate?.toString().slice(0, 15)}
        </h3>
        <h3 className="text-lg">Name</h3>
        <h3 className="text-lg">Massage type</h3>
        <h3 className="text-lg">Appointment time</h3>
      </div>
    </div>
  );
};
