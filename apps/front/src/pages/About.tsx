import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-[url('/massage-studio-noord-amsterdam.jpeg')]">
      <SectionTitle>About</SectionTitle>
      <p className="mt-8 max-w-6xl px-4 text-center text-lg leading-7 tracking-wide text-white md:px-8 md:text-3xl md:leading-[3rem]">
        At Massage Studio Noord in Amsterdam, we offer delightful and personalized massage
        experiences to help you relax and address specific physical complaints.
        Our serene space is designed for stress relief and profound relaxation,
        prioritizing your comfort and well-being. Our skilled therapists tailor
        each session to your unique needs, using a combination of therapeutic
        touch, breathwork, and movement techniques. We also specialize in
        pregnancy massages, providing expectant mothers with much-needed
        relaxation and relief from pregnancy-related discomforts. Reconnect with
        yourself and discover a personalized path to balance and wellness with
        our expertly crafted treatments.
      </p>
    </SectionWrapper>
  );
};
