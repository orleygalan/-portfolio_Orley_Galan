import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Habilidades from "../components/Habilidades";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Proyectos from "../components/Proyectos";
import SobreMi from "../components/SobreMi";

export default function Home() {
  const sobreMi = useRef(null);
  const habilidades = useRef(null);
  const proyectos = useRef(null);

  const scrollTo = (ref) =>{
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Menu scrollTo={(ref) => scrollTo(ref)} sobreMi={sobreMi} habilidades={habilidades} proyectos={proyectos} />
      <main>
        <Hero scrollTo={(ref) => scrollTo(ref)} proyectos={proyectos} />
        <div className="w-full flex justify-center bg-black ">
          <hr className="w-[90%] " />
        </div>
        <SobreMi sobreMi={sobreMi} />
        <div className="w-full flex justify-center bg-black ">
          <hr className="w-[90%] " />
        </div>
        <Habilidades habilidades={habilidades} />
        <div className="w-full flex justify-center bg-black ">
          <hr className="w-[90%] " />
        </div>
        <Proyectos proyectos={proyectos} />
        <div className="w-full flex justify-center bg-black ">
          <hr className="w-[90%] " />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
