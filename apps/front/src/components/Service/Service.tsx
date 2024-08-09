import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ServiceType } from "shared-types";

import { useOnScreenAnimation } from "@hooks";
import { Button, OutlineButton } from "@components/Buttons";

type ServiceProps = {
  service: ServiceType;
};

export const Service = ({ service }: ServiceProps) => {
  const [showMore, setShowMore] = useState(false);
  const { ref, isVisible } = useOnScreenAnimation();
  const controls = useAnimation();

  const { title, description, imgSrc } = service;

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

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    controls.start(showMore ? "hidden" : "visible");
  };

  const handleBookClick = () => {
    window.open(
      "https://widget.treatwell.nl/salon/massage-studio-noord/",
      "_blank",
    );
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative flex flex-col items-center max-w-4xl overflow-hidden duration-1000 border-2 border-transparent rounded-2xl"
    >
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className="relative flex flex-col items-center justify-center w-full px-2 py-8 text-center bg-center bg-cover min-h-56 md:min-h-72"
      >
        <div className="absolute inset-0  bg-[rgba(0,0,0,0.3)] " />
        <div className="flex items-center gap-2 z-[2]">
          <h3 className="text-3xl leading-[3.5rem] tracking-widest md:text-5xl">
            {title}
          </h3>
          <OutlineButton className="min-w-0 p-2" variant={showMore? "rounded" : "outline"} onClick={handleShowMore} >
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
          </OutlineButton>
        </div>

        <motion.div
          className="z-[1] w-full overflow-hidden"
          variants={detailVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-col items-center gap-4 p-4">
            <p className="tracking-wider text-center">{description}</p>
          </div>
        </motion.div>

        <OutlineButton onClick={handleBookClick} className="z-[1] mt-4">
          Book
        </OutlineButton>
      </div>
    </motion.article>
  );
};
