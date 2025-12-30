import zillow from "../assets/zillow.png";
import DCLLC from "../assets/dcllc.png";
import Renova360 from "../assets/renova360.png";

export default function Proyectos({ proyectos }) {
  const proyectosDev = [
    {
      nombre: "Zillow",
      descripcion:
        "Clon funcional de Zillow enfocado en la visualización y exploración de propiedades inmobiliarias, con una interfaz moderna y experiencia de usuario clara.",
      imagen: zillow,
      link: "https://zillow-clon.vercel.app/",
      github: "https://github.com/orleygalan/Zillow-clon",
      herramientas: ["React", "APIs Externas", "Tailwind CSS", "JSON"],
    },
    {
      nombre: "Renova360",
      descripcion:
        "Es una aplicación web creada para que una sola persona pueda gestionar y mostrar múltiples servicios o negocios desde un solo lugar mostrandolos en tarjetas visuales y ofrecer información clara...",
      imagen: Renova360,
      link: "https://renova360-frontend.vercel.app",
      github: "https://github.com/orleygalan/Renova360-frontend",
      herramientas: ["React", "PHP", "MySQL", "Tailwind CSS", "REST API"],
    },
    {
      nombre: "Doncellas Cleaning LLC",
      descripcion:
        "Es una aplicación web enfocada en la presentación y gestión de servicios de limpieza profesional para hogares y empresas. Ofrece una interfaz clara y moderna que facilita a los clientes conocer los servicios y contactar de forma rápida y directa.",
      imagen: DCLLC,
      link: "https://doncellas-cleaning-llc-v0-1.vercel.app/",
      github: "https://github.com/orleygalan/Doncellas-Cleaning-LLC-V0.1",
      herramientas: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section
      ref={proyectos}
      className="w-full bg-black text-white px-6 md:px-16 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Mis <span className="text-blue-500">Proyectos</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectosDev.map((proyecto, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:scale-[1.02] hover:border-blue-600 transition-all overflow-hidden"
          >
            {/* Imagen */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-400">
                {proyecto.nombre}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-5">
                {proyecto.descripcion}
              </p>

              {/* Herramientas */}
              <div className="mt-4 flex flex-wrap gap-2">
                {proyecto.herramientas.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs border border-gray-700 text-gray-300 hover:border-blue-500 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="mt-6 flex gap-4 ">
                <a
                  style={{ color: "white" }}
                  href={proyecto.link}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition shadow-md"
                >
                  Ver Proyecto
                </a>
                <a
                  href={proyecto.github}
                  target="_blank"
                  className="px-4 py-2 border border-gray-700 hover:border-blue-500 rounded-lg text-sm font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
