import { useState } from "react";
import { FaBrain, FaPhoneAlt, FaProjectDiagram, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Menu({ scrollTo, sobreMi, habilidades, proyectos }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none ">
      <div className="max-w-3xl md:w-[80%] mx-auto flex justify-end md:justify-center items-center px-6 py-1 md:my-3 md:border md:border-[#f5f5f5] md:rounded-3xl md:bg-black/20 md:backdrop-blur-xl">
        {/* navar */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <button
            onClick={() => scrollTo(sobreMi)}
            style={{
              padding: "0",
              background: "transparent",
              borderColor: "transparent",
            }}
            className="hover:text-blue-400 transition flex items-center gap-2 group "
          >
            <FaUser className="border border-white group-hover:border-blue-400 rounded-full text-xl p-1 " />
            Sobre mí
          </button>
          <button
            onClick={() => scrollTo(habilidades)}
            style={{
              padding: "0",
              background: "transparent",
              borderColor: "transparent",
            }}
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FaBrain className="text-xl " />
            Habilidades
          </button>
          <button
            onClick={() => scrollTo(proyectos)}
            style={{
              padding: "0",
              background: "transparent",
              borderColor: "transparent",
            }}
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FaProjectDiagram />
            Proyectos
          </button>

          <a
            href="tel:+573117350824"
            style={{
              padding: "5px 10px 5px 10px",
              background: "#038caa",
              borderColor: "transparent",
              color: "white",
            }}
            className="rounded-lg transition shadow-md flex items-center gap-2"
          >
            <FaPhoneAlt />
            Llamame
          </a>
        </nav>

        {/* hamburgesa menu movil */}
        <button
          style={{ background: "transparent" }}
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* sidebar movil */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-xl border-l border-gray-800 shadow-2xl p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* boton cerrar */}
        <button
          style={{ background: "transparent" }}
          onClick={closeMenu}
          className="text-white text-3xl self-end"
        >
          <FiX />
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col gap-6 items-center text-white font-medium mt-4">
          <button
            onClick={() => scrollTo(sobreMi)}
            style={{ padding: "0", background: "transparent" }}
            className="hover:text-blue-400 transition flex gap-2"
          >
            <FaUser className="border border-white group-hover:border-blue-400 rounded-full text-xl p-1 " />
            Sobre mí
          </button>
          <button
            onClick={() => scrollTo(habilidades)}
            style={{ padding: "0", background: "transparent" }}
            className="hover:text-blue-400 transition flex items-center gap-2 "
          >
            <FaBrain className="text-xl " />
            Habilidades
          </button>
          <button
            onClick={() => scrollTo(proyectos)}
            style={{ padding: "0", background: "transparent" }}
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FaProjectDiagram />
            Proyectos
          </button>

          <a
            href="tel:+573117350824"
            style={{ padding: "0", background: "#00C9F5", color: "white" }}
            className="px-4 py-2 w-[70%] rounded-lg transition shadow-md absolute bottom-10 flex items-center justify-center gap-2 "
          >
            <FaPhoneAlt />
            Llamarme
          </a>
        </nav>
      </div>
    </header>
  );
}
