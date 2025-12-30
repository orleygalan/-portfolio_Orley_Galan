import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaProjectDiagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PerfilFoto from "../assets/fotoPerfil.jpg";

export default function Hero({ scrollTo, proyectos }) {
  const numero = "573117350824";
  const mensaje = encodeURIComponent(
    "Buen día. He revisado su portafolio y me gustaría conversar sobre una posible oportunidad laboral."
  );
  const whatsappUrl = `https://wa.me/${numero}?text=${mensaje}`;

  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-10 pt-33 pb-30">
      {/* Contenido principal */}

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-center gap-10 lg:gap-16">
        {/* Texto */}
        <div className="text-center lg:text-start max-w-xl">
          <span className="text-3xl font-bold text-blue-500 ">Orley Galán</span>
          <h1 className="text-4xl md:text-6xl font-extrabold md:flex md:gap-3 leading-tight">
            Desarrollador <span className="text-blue-500"> Fullstack </span>
          </h1>

          <span className="block text-lg md:text-xl mt-2 text-gray-300 tracking-wide">
            Con fortaleza en <span className="text-blue-500">Frontend</span>
          </span>

          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Construyo experiencias web modernas y funcionales con React, PHP y
            MySQL.
          </p>

          {/* Botones */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollTo(proyectos)}
              style={{ background: "#038caa" }}
              className="px-6 py-3 text-white rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <FaProjectDiagram />
              Ver Proyectos
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              style={{ border: "1px solid #038caa", background: "transparent", color: '#038caa' }}
              className="px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="text-[#038caa] text-2xl" />
              Contactar por WhatsApp
            </a>
          </div>
          {/* Redes */}
          <div className="max-w-6xl mx-auto w-full flex justify-center lg:justify-start gap-6 mt-8 lg:mt-12 text-gray-300">
            <a
              href="https://github.com/orleygalan"
              target="_blank"
              className="hover:text-[#2f7685] text-3xl transition"
            >
              <FaGithub className="text-[#2b7fff] " />
            </a>

            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              className="hover:text-[#2f7685] text-3xl transition"
            >
              <FaLinkedin className="text-[#2b7fff] " />
            </a>

            <a
              href="mailto:orleigalan@gmail.com"
              className="hover:text-[#2f7685] text-3xl transition"
            >
              <MdEmail className="text-[#2b7fff] " />
            </a>
          </div>
        </div>
        {/* Imagen */}
        <div className="w-[25vh] h-[25vh] md:w-[40vh] md:h-[40vh] rounded-full overflow-hidden shadow-xl ring-4 ring-[#2f7685] relative ">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-transparent to-transparent"></div>
          <img
            src={PerfilFoto}
            alt="Foto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
