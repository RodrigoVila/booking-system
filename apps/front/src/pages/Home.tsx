import { useScreenWidth } from "@hooks";
import { SectionWrapper } from "@components/Section";
import { TitleLogo } from "../components/TitleLogo";
import { useEffect, useRef } from "react";
import { CustomVideo } from "@components/CustomVideo";

type HomeProps = {
  scrolledHalf: boolean;
};

export const Home = ({ scrolledHalf }: HomeProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isOver768px } = useScreenWidth();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const maxDuration = isOver768px ? video.duration : 13; // Duration for mobile is 13 seconds

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
      <div className="clip-rect(0_0_0_0) absolute m-[-1px] h-[1px] w-[1px] overflow-hidden border-0 p-0">
        Experience ultimate relaxation at Massage Studio Noord...
      </div>

      {isOver768px ? (
        <CustomVideo ref={videoRef} src="/homeVid.mov" />
      ) : (
        <CustomVideo ref={videoRef} src="/homeVid-mobile.mov" />
      )}

      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black bg-opacity-30">
        <TitleLogo type="home" scrolledHalf={scrolledHalf} />
      </div>
    </SectionWrapper>
  );
};
