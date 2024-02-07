import { TitleLogo } from "../components/TitleLogo";

type HomeProps = {
  isScrollOverHalfScreen: boolean;
};

export const Home = ({ isScrollOverHalfScreen }: HomeProps) => {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center bg-[url('/home.jpg')] bg-cover bg-center"
    >
      <TitleLogo type="home" isScrollOverHalfScreen={isScrollOverHalfScreen} />
    </section>
  );
};
