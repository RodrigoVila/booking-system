import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper id="about" className="p-0">
      <div className="relative h-full w-full">
        <div
          className="h-screen bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('bali.jpg')" }}
        >
          <div className="flex h-full items-center bg-black bg-opacity-50">
            <div className="mx-auto max-w-4xl p-8 text-center text-white">
              <SectionTitle>About</SectionTitle>
              <p className="mt-10 text-center text-2xl leading-10">
                Discover tranquility and rejuvenation at our serene massage
                studio, where your comfort and well-being are our top priority.
                Experience the art of therapeutic touch in a space designed for
                stress relief and profound relaxation. Our skilled therapists
                tailor each session to meet your unique needs, ensuring a
                personalized path to balance and wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
