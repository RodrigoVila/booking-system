import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Ensure you have these icons installed

export const Footer = () => {
  const imgStyle = "duration-200 transition-transform hover:scale-150";
  return (
    <footer className="w-full bg-black px-4 py-6 ">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-evenly">
        {/* Brand and Awards */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/tw.png" alt="Logo" width={120} className="mb-1" />
            <h6 className="text-xl font-semibold tracking-wider">
              Venue Awards
            </h6>
          </div>
          <div className="flex justify-start gap-2">
            <img
              src="/tw-award-1.svg"
              className={imgStyle}
              alt="Award 1"
              height={40}
              width={40}
            />
            <img
              src="/tw-award-2.svg"
              className={imgStyle}
              alt="Award 2"
              height={40}
              width={40}
            />
            <img
              src="/tw-award-3.svg"
              className={imgStyle}
              alt="Award 3"
              height={40}
              width={40}
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-4 flex flex-col items-center gap-4 md:mt-0">
          <h6 className="text-xl font-semibold tracking-wider">More Contact</h6>
          <div className="flex gap-4">
            <a
              href="https://wa.me/yourNumber"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-green-500"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="mailto:yourmail@example.com"
              className=" hover:text-blue-500"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
