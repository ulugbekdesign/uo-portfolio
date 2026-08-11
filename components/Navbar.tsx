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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav
          className={`
            relative
            flex
            items-center
            justify-between
            rounded-full
            border
            transition-all
            duration-500
            px-5
            sm:px-8
            h-16
            sm:h-20

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
            onClick={closeMenu}
            className="flex items-center gap-1"
          >
            <span className="text-2xl sm:text-3xl font-bold text-violet-500">
              U
            </span>

            <span className="text-2xl sm:text-3xl font-bold text-white">
              O.
            </span>
          </a>


          {/* DESKTOP MENU */}

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

          <div className="flex items-center gap-2 sm:gap-4">

            {/* LANGUAGE */}

            <div
              className="
                flex
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
                  px-3
                  sm:px-5
                  py-2
                  sm:py-2.5
                  text-xs
                  sm:text-sm
                  font-medium
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
                  px-3
                  sm:px-5
                  py-2
                  sm:py-2.5
                  text-xs
                  sm:text-sm
                  font-medium
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


            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="
                lg:hidden
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-violet-500
                hover:border-violet-500
              "
            >

              <div className="flex flex-col gap-1.5">

                <span
                  className={`
                    block
                    w-5
                    h-0.5
                    bg-white
                    transition-all
                    duration-300
                    ${
                      menuOpen
                        ? "rotate-45 translate-y-2"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    block
                    w-5
                    h-0.5
                    bg-white
                    transition-all
                    duration-300
                    ${
                      menuOpen
                        ? "-rotate-45"
                        : ""
                    }
                  `}
                />

              </div>

            </button>

          </div>


          {/* MOBILE MENU */}

          <div
            className={`
              lg:hidden
              absolute
              top-[calc(100%+10px)]
              left-0
              right-0
              rounded-[28px]
              border
              border-white/10
              bg-black/90
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(0,0,0,.45)]
              overflow-hidden
              transition-all
              duration-300
              origin-top
              ${
                menuOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
              }
            `}
          >

            <div className="p-4 flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-medium
                  transition
                  hover:bg-white/5
                  hover:text-violet-400
                "
              >
                {t.nav.home}
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="
                  rounded-2xl
                  px-5
                  py-4
                  text-gray-300
                  font-medium
                  transition
                  hover:bg-white/5
                  hover:text-violet-400
                "
              >
                {t.nav.about}
              </a>

              <a
                href="#portfolio"
                onClick={closeMenu}
                className="
                  rounded-2xl
                  px-5
                  py-4
                  text-gray-300
                  font-medium
                  transition
                  hover:bg-white/5
                  hover:text-violet-400
                "
              >
                {t.nav.portfolio}
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  rounded-2xl
                  px-5
                  py-4
                  text-gray-300
                  font-medium
                  transition
                  hover:bg-white/5
                  hover:text-violet-400
                "
              >
                {t.nav.contact}
              </a>

            </div>

          </div>

        </nav>

      </div>

    </header>
  );
}