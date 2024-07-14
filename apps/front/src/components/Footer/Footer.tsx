import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Asegúrate de tener estos iconos instalados
import { SiGooglemaps } from "react-icons/si"; // Asegúrate de tener estos iconos instalados

export const Footer = () => {
  const imgStyle = "duration-200 transition-transform hover:scale-110";

  return (
    <footer className="w-full bg-black px-6 py-8">
      <div className="flex w-full flex-wrap items-start justify-between font-cremis text-lg text-white">
        {/* Información de Contacto */}
        <div className="mb-6 flex flex-col items-start md:mb-0">
          <h6 className="mb-4 text-2xl">Massage Studio NOORD</h6>
          <a
            href="https://maps.app.goo.gl/RdmpMAckr5hpxN9A8"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-2 duration-150 hover:text-blue-500"
          >
            <div className="flex items-center gap-2">
              <SiGooglemaps size={30} />
              <div className="">
                <p className="text-sm tracking-widest">
                  Nachtegaalstraat 157, Amsterdam
                </p>
                <p className="text-sm tracking-widest">
                  (Let op: ingang via Havikslaan 20-22)
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Premios y Logos */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/tw.png" alt="Logo" width={120} className="mb-1" />
            <h6 className="text-2xl">Venue Awards</h6>
          </div>
          <div className="flex justify-center gap-4">
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

        {/* Información Adicional */}
        <div className="flex flex-col items-center gap-4">
          <h6 className="text-2xl">More contact</h6>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={42} className="hover:text-pink-500" />
            </a>
            <a
              href="https://wa.me/yourNumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={42} className="hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
