import { useOnScreenAnimation } from "@hooks";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "@hooks";

import { ServiceType } from "shared-types";
import { BookButton } from "@components/Button/BookButton";

type ServiceProps = {
  service: ServiceType;
};

export const Service = ({ service }: ServiceProps) => {
  const { ref, isVisible } = useOnScreenAnimation();
  const controls = useAnimation();

  const { setSelectedService } = useAppContext();

  const { title, description, imgSrc, options } = service;

  const handleButtonClick = () => setSelectedService(service);

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
      className="relative flex max-w-4xl flex-col items-center overflow-hidden rounded-2xl border-2 border-transparent duration-1000 hover:border-white"
    >
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className="relative flex min-h-72 w-full flex-col items-center justify-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        <h3 className="z-[1] text-5xl tracking-widest">{title}</h3>

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
