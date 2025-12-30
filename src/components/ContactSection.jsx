import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const numero = "573117350824";
  const mensaje = encodeURIComponent(
    "Buen día. He revisado su portafolio y me gustaría conversar sobre una posible oportunidad laboral."
  );
  const whatsappUrl = `https://wa.me/${numero}?text=${mensaje}`;
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* titulo */}
        <h2 className="text-4xl font-bold mb-4">Contáctame</h2>

        {/* descripcion */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Estoy abierto a oportunidades laborales como desarrollador fullstack.
          Si crees que mi perfil puede aportar valor a tu equipo, estaré
          encantado de conversar.
        </p>

        {/* boton principal */}
        <a
          href={whatsappUrl}
          target="_blank"
          style={{ background: "rgb(3, 140, 170)", color: "white" }}
          className="inline-flex items-center gap-3 font-medium px-8 py-4 rounded-xl transition mb-12"
        >
          <FaWhatsapp className="text-[white] text-2xl" />
          Escríbeme al Whatsapp
        </a>

        {/* Links */}
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#646cff] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/orleygalan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#646cff] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
