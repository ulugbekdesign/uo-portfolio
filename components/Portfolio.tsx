"use client";

import { useMemo, useState } from "react";
import ProjectModal from "./ProjectModal";

type Language = "uz" | "ru";

type PortfolioProps = {
  t: {
    language: Language;
    portfolio: {
      title: string;
    };
  };
};

type Category =
  | "all"
  | "smm"
  | "web"
  | "poster"
  | "branding"
  | "print";

const projects = [
  {
    title: {
      uz: "SMM Dizayn",
      ru: "SMM Дизайн",
    },
    category: "smm" as Category,
    categoryName: {
      uz: "SMM",
      ru: "SMM",
    },
    image: "/socialmedia1.jpg",
  },

  {
    title: {
      uz: "SMM Kampaniya",
      ru: "SMM Кампания",
    },
    category: "smm" as Category,
    categoryName: {
      uz: "SMM",
      ru: "SMM",
    },
    image: "/socialmedia2.jpg",
  },

  {
    title: {
      uz: "Veb Dizayn",
      ru: "Веб-дизайн",
    },
    category: "web" as Category,
    categoryName: {
      uz: "Veb Dizayn",
      ru: "Веб-дизайн",
    },
    image: "/webdesign3.jpg",
  },

  {
    title: {
      uz: "Landing Page",
      ru: "Лендинг",
    },
    category: "web" as Category,
    categoryName: {
      uz: "Veb Dizayn",
      ru: "Веб-дизайн",
    },
    image: "/webdesign2.jpg",
  },

  {
    title: {
      uz: "Poster Dizayn",
      ru: "Дизайн постера",
    },
    category: "poster" as Category,
    categoryName: {
      uz: "Poster",
      ru: "Постер",
    },
    image: "/poster.jpg",
  },

  {
    title: {
      uz: "Kreativ Poster",
      ru: "Креативный постер",
    },
    category: "poster" as Category,
    categoryName: {
      uz: "Poster",
      ru: "Постер",
    },
    image: "/poster2.jpg",
  },

  {
    title: {
      uz: "Logo Dizayn",
      ru: "Дизайн логотипа",
    },
    category: "branding" as Category,
    categoryName: {
      uz: "Brending",
      ru: "Брендинг",
    },
    image: "/logo.jpg",
  },

  {
    title: {
      uz: "Poligrafiya",
      ru: "Полиграфия",
    },
    category: "print" as Category,
    categoryName: {
      uz: "Poligrafiya",
      ru: "Полиграфия",
    },
    image: "/poygrafya.jpg",
  },

  {
    title: {
      uz: "Bosma Materiallar",
      ru: "Печатные материалы",
    },
    category: "print" as Category,
    categoryName: {
      uz: "Poligrafiya",
      ru: "Полиграфия",
    },
    image: "/polygrafiya2.jpg",
  },
];

const categories = [
  {
    id: "all" as Category,
    uz: "Barchasi",
    ru: "Все",
  },

  {
    id: "branding" as Category,
    uz: "Brending",
    ru: "Брендинг",
  },

  {
    id: "smm" as Category,
    uz: "SMM",
    ru: "SMM",
  },

  {
    id: "web" as Category,
    uz: "Veb",
    ru: "Веб",
  },

  {
    id: "poster" as Category,
    uz: "Poster",
    ru: "Постеры",
  },

  {
    id: "print" as Category,
    uz: "Poligrafiya",
    ru: "Полиграфия",
  },
];

export default function Portfolio({ t }: PortfolioProps) {
  const [activeCategory, setActiveCategory] =
    useState<Category>("all");

  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  const language = t.language;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <section
        id="portfolio"
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          py-24
          lg:py-32
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
            mb-12
            lg:mb-16
          "
        >
          <div>

            <p
              className="
                uppercase
                tracking-[6px]
                sm:tracking-[8px]
                text-xs
                sm:text-sm
                text-gray-500
                mb-4
              "
            >
              {language === "uz"
                ? "Portfolio"
                : "Портфолио"}
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-white
              "
            >
              {t.portfolio.title}
            </h2>

          </div>

          <p
            className="
              max-w-lg
              text-gray-400
              leading-7
              text-sm
              sm:text-base
            "
          >
            {language === "uz"
              ? "Brending, SMM, veb-dizayn, poster va poligrafiya yo‘nalishidagi saralangan loyihalar."
              : "Избранные проекты в области брендинга, SMM, веб-дизайна, постеров и полиграфии."}
          </p>

        </div>


        {/* FILTER */}

        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-3
            mb-10
            lg:mb-12
          "
        >
          {categories.map((category) => {
            const active =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategory(category.id)
                }
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-violet-500
                        bg-gradient-to-r
                        from-violet-500
                        via-purple-600
                        to-fuchsia-500
                        text-white
                        shadow-[0_0_30px_rgba(139,92,246,.25)]
                      `
                      : `
                        border-white/10
                        bg-white/5
                        text-gray-400
                        hover:text-white
                        hover:border-white/20
                        hover:bg-white/10
                      `
                  }
                `}
              >
                {category[language]}
              </button>
            );
          })}
        </div>


        {/* PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-12
            gap-5
            lg:gap-6
          "
        >
          {filteredProjects.map(
            (project, index) => {

              const isLarge =
                activeCategory === "all" &&
                (
                  index === 0 ||
                  index === 3 ||
                  index === 6
                );

              return (
                <article
                  key={project.image}
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className={`
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[28px]
                    sm:rounded-[32px]
                    border
                    border-white/10
                    bg-[#111]
                    min-h-[340px]
                    sm:min-h-[400px]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-violet-500/40
                    hover:shadow-[0_20px_70px_rgba(139,92,246,.15)]

                    ${
                      isLarge
                        ? "lg:col-span-8 lg:min-h-[520px]"
                        : "lg:col-span-4 lg:min-h-[520px]"
                    }
                  `}
                >

                  {/* IMAGE */}

                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />


                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/25
                      to-transparent
                      opacity-80
                      transition-opacity
                      duration-500
                      group-hover:opacity-95
                    "
                  />


                  {/* CATEGORY */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      z-10
                    "
                  >
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/15
                        bg-black/35
                        backdrop-blur-xl
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-white/90
                      "
                    >
                      {
                        project.categoryName[
                          language
                        ]
                      }
                    </span>
                  </div>


                  {/* CONTENT */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      z-10
                      p-6
                      sm:p-8
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        sm:text-3xl
                        font-semibold
                        text-white
                        tracking-tight
                      "
                    >
                      {project.title[language]}
                    </h3>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-white/70
                        transition-all
                        duration-300
                        sm:translate-y-3
                        sm:opacity-0
                        sm:group-hover:translate-y-0
                        sm:group-hover:opacity-100
                      "
                    >

                      <span>
                        {language === "uz"
                          ? "Loyihani ko‘rish"
                          : "Смотреть проект"}
                      </span>

                      <span
                        className="
                          text-violet-300
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                </article>
              );
            }
          )}
        </div>


        {/* BOTTOM BUTTON */}

        <div
          className="
            flex
            justify-center
            mt-12
            lg:mt-16
          "
        >
          <a
            href="https://t.me/brofolio"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-7
              py-4
              text-sm
              sm:text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/10
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.2)]
            "
          >

            {language === "uz"
              ? "Barcha loyihalarni ko‘rish"
              : "Смотреть все проекты"}

            <span className="text-violet-400">
              →
            </span>

          </a>
        </div>

      </section>


      {/* PROJECT MODAL */}

      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </>
  );
}