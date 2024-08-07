import { useScreenWidth } from "@hooks";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Asegúrate de tener estos iconos instalados
import { SiGooglemaps } from "react-icons/si"; // Asegúrate de tener estos iconos instalados

export const Footer = () => {
  const { isOver768px } = useScreenWidth();

  const imgStyle = "duration-200 transition-transform hover:scale-110";
  const iconSize = 40;
  const titleStyles = "text-lg md:text-2xl mb-2 text-center";

  return (
    <footer className="w-full px-6 py-4 bg-earth-2 lg:pb-12 lg:pt-8">
      <div className="flex flex-col flex-wrap items-center justify-center w-full gap-8 text-lg text-black lg:flex-row-reverse lg:justify-between">
        {/* Connect with us */}
        <div className="flex flex-col items-center lg:gap-2">
          <h6 className={titleStyles}>Connect with us</h6>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/massagestudionoord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram
                size={iconSize}
                className="duration-300 hover:text-pink-500"
              />
            </a>
            <a
              href="https://wa.me/+31683864673"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us through whatsapp"
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
              alt="treatwell logo for Massage Studio Noord in Amsterdam"
              width={isOver768px ? 148 : 120}
              className="mb-4 md:mb-3 lg:mb-4"
            />
            <h6 className={titleStyles}>Venue Awards</h6>
          </div>
          <div className="flex justify-center gap-4 -mt-3">
            <img
              src="/tw-award-1.svg"
              className={imgStyle}
              alt="2023 Treatwell award for Massage Studio Noord in Amsterdam"
              height={60}
              width={60}
            />
            <img
              src="/tw-award-2.svg"
              className={imgStyle}
              alt="2021 Treatwell award for Massage Studio Noord in Amsterdam"
              height={60}
              width={60}
            />
            <img
              src="/tw-award-3.svg"
              className={imgStyle}
              alt="2020 Treatwell award for Massage Studio Noord in Amsterdam"
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
