import perfilFoto from "../assets/fotoPerfil.jpg";

export default function SobreMi({ sobreMi }) {
  return (
    <section
      ref={sobreMi}
      className="w-full bg-black text-white px-6 md:px-10 py-30"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Ilustracion */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <img
              src={perfilFoto}
              alt="Sobre mí"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 px-5 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-blue-500">Mí</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Soy Orley Galan, desarrollador Fullstack con un fuerte enfoque en
            Frontend. Me apasiona crear interfaces modernas, rápidas y
            funcionales, cuidando la experiencia de usuario y el rendimiento.
            Trabajo principalmente con
            <span className="text-blue-400"> React</span> para desarrollar
            interfaces dinámicas, consumiendo
            <span className="text-blue-400"> APIs y estructuras JSON</span>, e
            integrando endpoints de manera eficiente. Utilizo
            <span className="text-blue-400"> JavaScript, HTML y CSS</span> para
            garantizar diseños responsivos basados en prototipos de
            <span className="text-blue-400"> Figma</span>. En el backend,
            trabajo con
            <span className="text-blue-400"> PHP</span> y gestiono bases de
            datos con
            <span className="text-blue-400"> MySQL</span>, usando
            <span className="text-blue-400"> XAMPP</span> como entorno de
            desarrollo.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition shadow-lg">
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
