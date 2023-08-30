import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calendar = () => {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState<Value>(new Date());

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    console.log({ value });
  }, [value]);
  return (
    <section className="w-full flex items-center justify-center">
      {isClient ? <ReactCalendar value={value} onChange={setValue} /> : null}
    </section>
  );
};
