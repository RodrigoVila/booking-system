import { useOnScreenAnimation } from "@hooks";
import { motion, useAnimation } from "framer-motion";

import { ServiceType } from "shared-types";
import { BookButton } from "@components/Button/BookButton";
import { useState, useEffect } from "react";

type ServiceProps = {
  service: ServiceType;
};

export const Service = ({ service }: ServiceProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { ref, isVisible } = useOnScreenAnimation();
  const controls = useAnimation();

  const { title, description, imgSrc, options } = service;

  useEffect(() => {
    if (!isActive) {
      setShowMore(false);
    }
  }, [isActive]);

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

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setShowMore(false);
    controls.start("hidden");
  };

  const maxPreviewLength = 300;
  const previewText = description.length > maxPreviewLength && !showMore
    ? description.substring(0, maxPreviewLength) + "... "
    : description;

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={handleMouseLeave}
      onTap={handleTap}
      className="relative flex flex-col items-center max-w-4xl overflow-hidden duration-1000 border-2 border-transparent rounded-2xl hover:border-white"
    >
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className="relative flex flex-col items-center justify-center w-full px-2 py-8 text-center bg-center bg-cover min-h-56 md:min-h-72"
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
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center gap-2">
              {options.map((option, index) => (
                <p key={index} className="text-2xl">
                  {`${option.duration} ${index !== options.length - 1 ? "/" : "minutes"}`}
                </p>
              ))}
            </div>
            <p className="tracking-wider text-center">
              {previewText}
              {description.length > maxPreviewLength && !showMore && (
                <span
                  onClick={handleShowMore}
                  className="underline cursor-pointer"
                >
                  See More
                </span>
              )}
              {showMore && (
                <span
                  onClick={handleShowMore}
                  className="pl-1 underline cursor-pointer"
                >
                  See Less
                </span>
              )}
            </p>
            {/* Button integrated within the animation */}
            <BookButton />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
