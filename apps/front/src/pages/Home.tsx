import { useScreenWidth } from "@hooks";
import { SectionWrapper } from "@components/Section";

import { TitleLogo } from "../components/TitleLogo";
import { useEffect, useRef } from "react";

type HomeProps = {
  scrolledHalf: boolean;
};

export const Home = ({ scrolledHalf }: HomeProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { isOver768px } = useScreenWidth();

  // This Reproduces the home video until the desired duration, depending on the viewport.
  // For tablet users or smallers, the video will be shorter, because
  // the important parts of the video (the hands) move away earlier when the screen is narrower.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileVideoDuration = 13; //segs

    const maxDuration = isOver768px ? video.duration : mobileVideoDuration;

    const checkTime = () => {
      if (video.currentTime >= maxDuration) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", checkTime);

    return () => {
      video.removeEventListener("timeupdate", checkTime);
    };
  }, [isOver768px]);

  return (
    <SectionWrapper id="home">
      {/* Hidden alternative for vision impared users */}
      <div className="clip-rect(0_0_0_0) absolute m-[-1px] h-[1px] w-[1px] overflow-hidden border-0 p-0">
        Experience ultimate relaxation at Massage Studio Noord. Watch as our
        skilled masseur performs a soothing back massage in a warm, tranquil
        environment designed to melt away stress and tension. Perfect for
        rejuvenating both body and mind.
      </div>
      <video
        ref={videoRef}
        className={"absolute inset-0 h-full w-full object-cover"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={isOver768px ? "/homeVid.mov" : "/homeVid-mobile.mov"}
        aria-label="Masseur performing a relaxing back massage in a calm and warm environment at Massage Studio Noord."
      />
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black bg-opacity-30">
        <TitleLogo type="home" scrolledHalf={scrolledHalf} />
      </div>
    </SectionWrapper>
  );
};
