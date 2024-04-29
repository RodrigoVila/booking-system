import { OpacityWrapper } from "@components/OpacityWrapper/OpacityWrapper";
import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="relative flex h-screen w-full items-center justify-center bg-[url('/studio.jpg')] bg-center p-0"
    >
      <OpacityWrapper>
        <div className="mx-auto max-w-4xl space-y-6 p-8 text-white">
          <SectionTitle className="text-center">About</SectionTitle>
          <p className="text-center text-3xl leading-[3rem]">
            Discover tranquility and rejuvenation at our serene massage studio,
            where your comfort and well-being are our top priority. Experience
            the art of therapeutic touch in a space designed for stress relief
            and profound relaxation. Our skilled therapists tailor each session
            to meet your unique needs, ensuring a personalized path to balance
            and wellness.
          </p>
        </div>
      </OpacityWrapper>
    </SectionWrapper>
  );
};
