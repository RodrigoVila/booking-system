import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Ensure you have these icons installed

export const Footer = () => {
  return (
    <footer className="w-full bg-black px-4 py-10 text-white">
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
            <img src="/tw-award-1.svg" alt="Award 1" height={60} width={60} />
            <img src="/tw-award-2.svg" alt="Award 2" height={60} width={60} />
            <img src="/tw-award-3.svg" alt="Award 3" height={60} width={60} />
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
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="mailto:yourmail@example.com"
              className="text-white hover:text-blue-500"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
