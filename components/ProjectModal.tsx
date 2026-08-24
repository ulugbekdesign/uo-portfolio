"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, X, ArrowUpRight } from "lucide-react";

type ProjectModalProps = {
  project: any;
  language: "uz" | "ru";
  onClose: () => void;
};

export default function ProjectModal({
  project,
  language,
  onClose,
}: ProjectModalProps) {
  const [selectedFolder, setSelectedFolder] =
    useState<any>(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedFolder) {
          setSelectedFolder(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, selectedFolder]);

  if (!project) return null;

  const descriptions = {
    smm: {
      uz: "Ijtimoiy tarmoqlar uchun zamonaviy, professional va brendga mos vizual dizayn tizimi.",
      ru: "Современная и профессиональная визуальная система для социальных сетей.",
    },

    web: {
      uz: "Zamonaviy interfeys va premium vizual uslub asosida yaratilgan veb-loyiha.",
      ru: "Современный веб-проект с продуманной структурой и премиальной визуальной подачей.",
    },

    poster: {
      uz: "E’tiborni tortadigan kompozitsiya va kuchli vizual yechim asosida yaratilgan reklama dizayni.",
      ru: "Рекламный дизайн с выразительной композицией и сильной визуальной подачей.",
    },

    branding: {
      uz: "Brend xarakterini ifodalovchi zamonaviy va esda qolarli vizual identika.",
      ru: "Современная и запоминающаяся визуальная айдентика.",
    },

    print: {
      uz: "Bosma materiallar uchun professional va ishlab chiqarishga mos dizayn yechimi.",
      ru: "Профессиональный дизайн печатных материалов.",
    },
  };

  const tasks = {
    smm: {
      uz: "Brendning ijtimoiy tarmoqlardagi ko‘rinishini yaxshilash va yagona vizual uslub yaratish.",
      ru: "Создать единый визуальный стиль для социальных сетей.",
    },

    web: {
      uz: "Foydalanuvchi uchun tushunarli, zamonaviy va responsive interfeys yaratish.",
      ru: "Создать современный и адаптивный интерфейс.",
    },

    poster: {
      uz: "Auditoriya e’tiborini birinchi qarashdayoq tortadigan dizayn yaratish.",
      ru: "Создать дизайн, который сразу привлекает внимание аудитории.",
    },

    branding: {
      uz: "Brendni raqobatchilardan ajratib turadigan vizual identika yaratish.",
      ru: "Создать визуальную айдентику, выделяющую бренд среди конкурентов.",
    },

    print: {
      uz: "Ma’lumotni tartibli yetkazish va bosmaga tayyor maket yaratish.",
      ru: "Подготовить профессиональный макет для печати.",
    },
  };

  const solutions = {
    smm: {
      uz: "Tipografika, ranglar va kontent kompozitsiyasi yagona tizimga keltirildi.",
      ru: "Типографика, цвета и композиция были объединены в единую систему.",
    },

    web: {
      uz: "Kontent aniq bloklarga ajratildi va responsive tizim yaratildi.",
      ru: "Контент был структурирован и адаптирован под разные устройства.",
    },

    poster: {
      uz: "Kuchli vizual markaz va kontrast tipografika yordamida asosiy xabar ajratib ko‘rsatildi.",
      ru: "Основное сообщение было выделено с помощью сильной композиции и контрастной типографики.",
    },

    branding: {
      uz: "Logo, ranglar va tipografika yagona vizual tizimga birlashtirildi.",
      ru: "Логотип, цвета и типографика были объединены в единую визуальную систему.",
    },

    print: {
      uz: "Grid va tipografika orqali tartibli, bosmaga tayyor maket yaratildi.",
      ru: "Был создан структурированный макет, готовый к печати.",
    },
  };

  const displayProject = selectedFolder ?? project;

  const category = displayProject.category as
    | "smm"
    | "web"
    | "poster"
    | "branding"
    | "print";

  const gallery =
    displayProject.gallery && displayProject.gallery.length > 0
      ? displayProject.gallery
      : [displayProject.image];

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/95 backdrop-blur-xl">

      {/* CLOSE */}

      <button
        onClick={() => {
          setSelectedFolder(null);
          onClose();
        }}
        className="
          fixed
          top-5
          right-5
          z-[1000]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/70
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
      >
        <X size={22} />
      </button>


      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24">

        {/* HEADER */}

        <div className="mb-12">

          {selectedFolder && (
            <button
              onClick={() => setSelectedFolder(null)}
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={18} />
              {language === "uz" ? "SMM loyihalariga qaytish" : "Назад к SMM проектам"}
            </button>
          )}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              px-4
              py-2
              text-sm
              text-violet-300
              mb-6
            "
          >
            {displayProject.categoryName[language]}
          </span>

          <h2
            className="
              text-4xl
              sm:text-6xl
              lg:text-7xl
              font-bold
              text-white
            "
          >
            {displayProject.title[language]}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-gray-400
              text-base
              sm:text-lg
              leading-8
            "
          >
            {descriptions[category][language]}
          </p>

        </div>


        {project.subprojects?.length > 0 && !selectedFolder ? (
          <div>
            <p className="mb-6 text-xs uppercase tracking-[5px] text-gray-500">
              {language === "uz" ? "SMM loyihalari" : "SMM проекты"}
            </p>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {project.subprojects.map((folder: any) => (
                <button
                  key={folder.image}
                  onClick={() => setSelectedFolder(folder)}
                  className="group relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-[#111] text-left transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_20px_70px_rgba(139,92,246,.15)]"
                >
                  <img
                    src={folder.image}
                    alt={folder.title[language]}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                    <span className="mb-3 inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/80 backdrop-blur-xl">
                      {language === "uz" ? "Loyiha papkasi" : "Папка проекта"}
                    </span>
                    <h3 className="text-3xl font-semibold text-white">
                      {folder.title[language]}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      {language === "uz" ? "6 ta dizaynni ko‘rish →" : "Смотреть 6 дизайнов →"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>

        {/* MAIN IMAGE */}

        <div
          className="
            overflow-hidden
            rounded-[30px]
            sm:rounded-[40px]
            border
            border-white/10
          "
        >
          <img
            src={displayProject.image}
            alt={displayProject.title[language]}
            className="w-full max-h-[780px] object-cover"
          />
        </div>


        {/* META */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
            mt-5
            max-w-md
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <p className="text-xs text-gray-500 mb-2">
              {language === "uz" ? "Yil" : "Год"}
            </p>

            <p className="font-semibold text-white">
              2026
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <p className="text-xs text-gray-500 mb-2">
              {language === "uz"
                ? "Yo‘nalish"
                : "Направление"}
            </p>

            <p className="font-semibold text-white">
              {displayProject.categoryName[language]}
            </p>
          </div>

        </div>


        {/* TASK + SOLUTION */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div
            className="
              rounded-[28px]
              border
              border-white/10
              bg-[#0b0b0b]
              p-7
              sm:p-10
            "
          >
            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-violet-400
                mb-5
              "
            >
              {language === "uz"
                ? "Vazifa"
                : "Задача"}
            </p>

            <p className="text-gray-300 leading-8">
              {tasks[category][language]}
            </p>
          </div>


          <div
            className="
              rounded-[28px]
              border
              border-white/10
              bg-[#0b0b0b]
              p-7
              sm:p-10
            "
          >
            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-fuchsia-400
                mb-5
              "
            >
              {language === "uz"
                ? "Yechim"
                : "Решение"}
            </p>

            <p className="text-gray-300 leading-8">
              {solutions[category][language]}
            </p>
          </div>

        </div>


        {/* GALLERY */}

        <div className="mt-20">

          <p
            className="
              uppercase
              tracking-[5px]
              text-xs
              text-gray-500
              mb-6
            "
          >
            {language === "uz"
              ? "Loyiha materiallari"
              : "Материалы проекта"}
          </p>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >

            {gallery.map((image: string, index: number) => (
              <div
                key={`${image}-${index}`}
                className={`
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-[#111]

                  ${
                    index === 0
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                <img
                  src={image}
                  alt={`${displayProject.title[language]} ${index + 1}`}
                  className="
                    w-full
                    h-full
                    min-h-[300px]
                    object-cover
                  "
                />
              </div>
            ))}

          </div>

        </div>

          </>
        )}


        {/* CTA */}

        <div
          className="
            mt-20
            pt-10
            border-t
            border-white/10
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-8
          "
        >

          <div>
            <p className="text-sm text-gray-500 mb-2">
              {language === "uz"
                ? "Shunga o‘xshash loyiha kerakmi?"
                : "Нужен похожий проект?"}
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold">
              {language === "uz"
                ? "Birgalikda ishlaymiz."
                : "Давайте работать вместе."}
            </h3>
          </div>


          <a
            href="https://t.me/Ulugbekbr0"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-violet-500
              via-purple-600
              to-fuchsia-500
              px-7
              py-4
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_0_40px_rgba(139,92,246,.25)]
            "
          >
            {language === "uz"
              ? "Bog‘lanish"
              : "Связаться"}

            <ArrowUpRight size={20} />
          </a>

        </div>

      </div>

    </div>
  );
}
