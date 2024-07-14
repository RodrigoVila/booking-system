import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-[url('/studio.jpg')]">
      <SectionTitle>About</SectionTitle>
      <p className="mt-8 max-w-6xl px-4 text-center text-lg leading-7 tracking-wide text-white md:px-8 md:text-3xl md:leading-[3rem]">
        Discover tranquility and rejuvenation at our serene massage studio,
        where your comfort and well-being are our top priority. Experience the
        art of therapeutic touch in a space designed for stress relief and
        profound relaxation. Our skilled therapists tailor each session to meet
        your unique needs, ensuring a personalized path to balance and wellness.
      </p>
    </SectionWrapper>
  );
};
