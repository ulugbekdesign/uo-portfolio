"use client";

import { useEffect, useState } from "react";

type NavbarProps = {
  language: "uz" | "ru";
  setLanguage: React.Dispatch<React.SetStateAction<"uz" | "ru">>;
  t: any;
};

export default function Navbar({
  language,
  setLanguage,
  t,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${scrolled ? "py-4" : "py-7"}
      `}
    >
      <div className="max-w-7xl mx-auto px-8">

        <nav
          className={`
            flex
            items-center
            justify-between
            rounded-full
            border
            transition-all
            duration-500
            px-8
            h-20

            ${
              scrolled
                ? "border-white/10 bg-black/70 backdrop-blur-3xl shadow-[0_0_60px_rgba(0,0,0,.35)]"
                : "border-white/10 bg-black/45 backdrop-blur-2xl"
            }
          `}
        >

          {/* LOGO */}

          <a
            href="#home"
            className="flex items-center gap-1"
          >
            <span className="text-3xl font-bold text-violet-500">
              U
            </span>

            <span className="text-3xl font-bold text-white">
              O.
            </span>
          </a>

          {/* MENU */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-10
            "
          >

            <a
              href="#home"
              className="
                text-white
                text-[15px]
                font-medium
                transition-all
                duration-300
                hover:text-violet-400
                hover:-translate-y-1
              "
            >
             {t.nav.home}
            </a>

            <a
              href="#about"
              className="
                text-gray-300
                text-[15px]
                font-medium
                transition-all
                duration-300
                hover:text-violet-400
                hover:-translate-y-1
              "
            >
             {t.nav.about}
            </a>

            <a
              href="#portfolio"
              className="
                text-gray-300
                text-[15px]
                font-medium
                transition-all
                duration-300
                hover:text-violet-400
                hover:-translate-y-1
              "
            >
             {t.nav.portfolio}
            </a>

            <a
              href="#contact"
              className="
                text-gray-300
                text-[15px]
                font-medium
                transition-all
                duration-300
                hover:text-violet-400
                hover:-translate-y-1
              "
            >
             {t.nav.contact}
            </a>

          </div>
                    {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            {/* LANGUAGE */}

            <div
              className="
                hidden
                md:flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                overflow-hidden
              "
            >

            <button
  onClick={() => setLanguage("uz")}
  className={`
    px-5
    py-2.5
    text-sm
    transition

    ${
      language === "uz"
        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
        : "text-gray-400 hover:text-white"
    }
  `}
>
  UZ
</button>

                 <button
  onClick={() => setLanguage("ru")}
  className={`
    px-5
    py-2.5
    text-sm
    transition

    ${
      language === "ru"
        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
        : "text-gray-400 hover:text-white"
    }
  `}
>
  RU
</button>

            </div>

            {/* MENU BUTTON */}

          

          </div>

        </nav>

      </div>

    </header>
  );
}