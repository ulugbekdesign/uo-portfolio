type ServicesProps = {
  t: any;
};

export default function Services({ t }: ServicesProps) {
  const services = [
    {
      number: "01",
      title: {
        uz: "Brand Dizayn",
        ru: "Бренд-дизайн",
      },
      text: {
        uz: "Logo, Brandbook, Packaging va vizual identika yaratish.",
        ru: "Разработка логотипа, брендбука, упаковки и фирменного стиля.",
      },
    },
    {
      number: "02",
      title: {
        uz: "SMM",
        ru: "SMM",
      },
      text: {
        uz: "Instagram dizayni, postlar, stories va reklama bannerlari.",
        ru: "Дизайн Instagram, постов, сторис и рекламных баннеров.",
      },
    },
    {
      number: "03",
      title: {
        uz: "Veb Dizayn",
        ru: "Веб-дизайн",
      },
      text: {
        uz: "Landing Page va Portfolio sayt dizayni.",
        ru: "Дизайн лендингов и портфолио-сайтов.",
      },
    },
    {
      number: "04",
      title: {
        uz: "Mobilografiya",
        ru: "Мобилография",
      },
      text: {
        uz: "Reels, video suratga olish va professional montaj.",
        ru: "Съемка Reels, видео и профессиональный монтаж.",
      },
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="uppercase tracking-[8px] text-gray-500 mb-5">
        {t.services.title}
      </p>

      <h2 className="text-5xl font-bold mb-16">
        {t.services.subtitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.number}
            className="
              group
              bg-[#141414]
              border
              border-white/10
              rounded-[30px]
              p-10
              hover:border-violet-500
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >
            <span className="text-gray-500 text-lg">
              {service.number}
            </span>

            <h3 className="text-3xl font-bold mt-6">
              {service.title[t.language as keyof typeof service.title]}
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              {service.text[t.language as keyof typeof service.text]}
            </p>

            <div className="mt-10 text-2xl text-violet-400 transition-transform duration-300 group-hover:translate-x-2">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}