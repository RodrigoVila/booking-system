import React, { useState } from "react";
import { Booking } from "../booking";
import { Marcellus, Roboto } from "next/font/google";
import { Button } from "@/components/Button";

const inter = Marcellus({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const Massages = () => {
  const [showBooking, setShowBooking] = useState(false);

  const toggleShowBooking = () => setShowBooking((prev) => !prev);

  return (
    <section className="h-screen w-full bg-primary flex items-center flex-col px-5 text-center gap-4">
      <h3 className={`text-3xl mt-11 mb-5 ${inter.className}`}>
        Amsterdan Noord Massages
      </h3>
      <p className={`leading-7 text-primary-3 ${roboto.className}`}>
        Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Fuga ab
        reprehenderit ducimus dignissimos! Ea labore cumque repudiandae quisquam
        similique accusamus, quibusdam debitis quod vitae, aliquam vel, eaque
        eum rerum voluptatibus nihil nostrum sit a et iure laborum corporis id
        quasi minima explicabo. Esse, aliquid possimus dignissimos et debitis
        vitae dolore voluptates ipsa distinctio, libero consequuntur recusandae
        qui atque. Ad aliquid fugit voluptate animi praesentium, inventore
        aliquam facere iure earum qui?
      </p>
      <div className="w-full h-[1px] bg-primary-2" />
      {showBooking ? (
        <Booking />
      ) : (
        <Button onClick={toggleShowBooking}>Book</Button>
      )}
    </section>
  );
};
