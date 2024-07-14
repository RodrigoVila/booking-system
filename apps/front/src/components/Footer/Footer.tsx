import { useScreenWidth } from "@hooks";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Asegúrate de tener estos iconos instalados
import { SiGooglemaps } from "react-icons/si"; // Asegúrate de tener estos iconos instalados

export const Footer = () => {
  const { isOver768px } = useScreenWidth();

  const imgStyle = "duration-200 transition-transform hover:scale-110";
  const iconSize = 40;
  const titleStyles = "text-lg md:text-2xl mb-2 text-center";

  return (
    <footer className="w-full bg-black px-6 py-4 lg:pb-12 lg:pt-8">
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-8 text-lg text-white lg:flex-row-reverse lg:justify-between">
        {/* Connect with us */}
        <div className="flex flex-col items-center lg:gap-2">
          <h6 className={titleStyles}>Connect with us</h6>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={iconSize}
                className="duration-300 hover:text-pink-500"
              />
            </a>
            <a
              href="https://wa.me/yourNumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={iconSize}
                className="duration-300 hover:text-green-500"
              />
            </a>
          </div>
        </div>
        {/* Treatwell awards */}
        <div className="flex flex-col items-center gap-3 p-0 lg:mt-1">
          <div className="flex items-center gap-2">
            <img
              src="/tw.png"
              alt="Logo"
              width={isOver768px ? 148 : 120}
              className="mb-4 md:mb-3 lg:mb-4"
            />
            <h6 className={titleStyles}>Venue Awards</h6>
          </div>
          <div className="-mt-3 flex justify-center gap-4">
            <img
              src="/tw-award-1.svg"
              className={imgStyle}
              alt="Award 1"
              height={60}
              width={60}
            />
            <img
              src="/tw-award-2.svg"
              className={imgStyle}
              alt="Award 2"
              height={60}
              width={60}
            />
            <img
              src="/tw-award-3.svg"
              className={imgStyle}
              alt="Award 3"
              height={60}
              width={60}
            />
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col text-center lg:gap-2">
          <h6 className={titleStyles}>Massage Studio NOORD</h6>
          <a
            href="https://maps.app.goo.gl/RdmpMAckr5hpxN9A8"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-2 duration-300 hover:text-blue-500"
          >
            <div className="flex items-center gap-2">
              <SiGooglemaps size={30} />
              <div className="">
                <p className="text-xs tracking-widest md:text-sm">
                  Nachtegaalstraat 157, Amsterdam
                </p>
                <p className="text-xs tracking-widest md:text-sm">
                  (Let op: ingang via Havikslaan 20-22)
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
