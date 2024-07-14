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
      <video
        ref={videoRef}
        className={"absolute inset-0 h-full w-full object-cover"}
        autoPlay
        muted
        loop
        src={isOver768px ? "/homeVid.mov" : "/homeVid-mobile.mov"}
      />
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black bg-opacity-30">
        <TitleLogo type="home" scrolledHalf={scrolledHalf} />
      </div>
    </SectionWrapper>
  );
};
