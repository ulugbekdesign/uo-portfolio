import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import Contact from "../components/contact";

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">

      <Navbar />

      <div className="pt-28">
        <Hero />
      </div>
<Clients />
      <About />

      <Services />

      <Portfolio />
      <Contact />

    </main>
  );
}

