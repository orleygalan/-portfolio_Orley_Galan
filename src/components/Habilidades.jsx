export default function Habilidades({habilidades}) {
  const habilidadesDev = [
    {
      titulo: "Frontend",
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      titulo: "Backend",
      items: ["PHP", "MySQL", "RESTful APIs", "XAMPP"],
    },
    {
      titulo: "Herramientas",
      items: ["Git", "GitHub", "VS Code", "npm"],
    },
    {
      titulo: "Conocimientos",
      items: ["Responsive Design", "Component Architecture", "Database Design", "Version Control"],
    },
  ];

  return (
    <section ref={habilidades} className="w-full bg-black text-white px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Mis <span className="text-blue-500">Habilidades</span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {habilidadesDev.map((categoria, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {categoria.titulo}
            </h3>

            <div className="flex flex-wrap gap-3">
              {categoria.items.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-4 py-1.5 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
