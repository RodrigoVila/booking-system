import { Button } from "@components/Button"; // Ensure this import path is correct
import { useOnScreenAnimation } from "@hooks";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

type ServiceProps = {
  title: string;
  description: string;
  durations: number[];
  imgSrc: string;
  isEven: boolean;
};

export const Service = ({
  title,
  description,
  durations,
  imgSrc,
  isEven,
}: ServiceProps) => {
  const { ref, isVisible } = useOnScreenAnimation();
  const controls = useAnimation();

  const detailVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
      className="relative flex max-w-4xl flex-col items-center overflow-hidden rounded-2xl border-2"
    >
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className="flex min-h-72 w-full flex-col items-center justify-center bg-cover bg-center"
      >
        <h3 className="z-[1] text-5xl">{title}</h3>

        <motion.div
          className="w-full overflow-hidden"
          variants={detailVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="flex items-center gap-2">
              {durations.map((duration, index) => (
                <h6 key={index} className="text-2xl">
                  {`${duration} ${index !== durations.length - 1 ? "/" : "minutes"}`}
                </h6>
              ))}
            </div>
            <p className="text-center tracking-wider">{description}</p>
            {/* Button integrated within the animation */}
            <Button variant="outline" className="px-16 py-2 ">
              Book
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
