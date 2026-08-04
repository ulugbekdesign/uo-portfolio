"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import Contact from "../components/contact";

import { translations } from "../lib/translations";

export default function App() {
  const [language, setLanguage] = useState<"uz" | "ru">("uz");

  const t = translations[language];

  return (
    <main className="bg-[#050505] min-h-screen text-white">

      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <div className="pt-28">
        <Hero t={t} />
      </div>

      <Clients t={t} />

      <About t={t} />

     <Services
  t={{
    ...t,
    language,
  }}
/>

      <Portfolio
  t={{
    ...t,
    language,
  }}
/>

      <Contact t={t} />

    </main>
  );
}

