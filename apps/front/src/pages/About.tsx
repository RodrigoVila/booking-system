import { OpacityWrapper } from "@components/OpacityWrapper/OpacityWrapper";
import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="relative flex h-screen w-full items-center justify-center bg-[url('/studio.jpg')] bg-cover bg-center p-0 md:bg-auto"
    >
      <OpacityWrapper>
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-white md:px-8">
          <SectionTitle className="text-center">About</SectionTitle>
          <p className="text-center text-lg leading-7 tracking-wide md:text-3xl md:leading-[3rem]">
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
