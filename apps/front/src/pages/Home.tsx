import { OpacityWrapper } from "@components/OpacityWrapper";
import { TitleLogo } from "../components/TitleLogo";
import { SectionWrapper } from "@components/Section";

type HomeProps = {
  isScrollOverHalfScreen: boolean;
};

export const Home = ({ isScrollOverHalfScreen }: HomeProps) => {
  return (
    <SectionWrapper
      id="home"
      className="relative flex h-screen w-full items-center justify-center p-0"
    >
      <video
        className={`absolute inset-0 h-full w-full object-cover`}
        autoPlay
        muted
        loop
        src="/vid1.mov"
      />

      <OpacityWrapper className="relative">
        <TitleLogo
          type="home"
          isScrollOverHalfScreen={isScrollOverHalfScreen}
        />
      </OpacityWrapper>
    </SectionWrapper>
  );
};
