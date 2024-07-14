import { useOnScreenAnimation } from "@hooks";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "@hooks";

import { ServiceType } from "shared-types";
import { BookButton } from "@components/Button/BookButton";
import { useState } from "react";

type ServiceProps = {
  service: ServiceType;
};

export const Service = ({ service }: ServiceProps) => {
  //Mostly for mobile users as there is no "hover" that shows the description.
  const [isActive, setIsActive] = useState(false);

  const { ref, isVisible } = useOnScreenAnimation();
  const controls = useAnimation();

  const { title, description, imgSrc, options } = service;

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

  const handleTap = () => {
    setIsActive((prev) => !prev);
    controls.start(isActive ? "hidden" : "visible");
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
      onTap={handleTap}
      className="relative flex max-w-4xl flex-col items-center overflow-hidden rounded-2xl border-2 border-transparent duration-1000 hover:border-white"
    >
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className="relative flex min-h-56 w-full flex-col items-center justify-center bg-cover bg-center px-2 text-center md:min-h-72"
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        <h3 className="z-[1] text-3xl leading-[3.5rem] tracking-widest md:text-5xl">
          {title}
        </h3>

        <motion.div
          className="z-[1] w-full overflow-hidden"
          variants={detailVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="flex items-center gap-2">
              {options.map((option, index) => (
                <h6 key={index} className="text-2xl">
                  {`${option.duration} ${index !== options.length - 1 ? "/" : "minutes"}`}
                </h6>
              ))}
            </div>
            <p className="text-center tracking-wider">{description}</p>
            {/* Button integrated within the animation */}
            <BookButton />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
