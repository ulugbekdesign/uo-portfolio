const projects = [
  {
    title: {
      uz: "SMM Dizayn",
      ru: "SMM Дизайн",
    },
    image: "/socialmedia1.jpg",
  },
  {
    title: {
      uz: "Branding",
      ru: "Брендинг",
    },
    image: "/logo.jpg",
  },
  {
    title: {
      uz: "Veb Dizayn",
      ru: "Веб-дизайн",
    },
    image: "/webdesign3.jpg",
  },
  {
    title: {
      uz: "Poligrafiya",
      ru: "Полиграфия",
    },
    image: "/poygrafya.jpg",
  },
];

type PortfolioProps = {
  t: any;
};

export default function Portfolio({ t }: PortfolioProps) {
  return (
    <section id="portfolio">
      <h2 className="text-5xl font-bold mb-12">{t.portfolio.title}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.image}
            className="group overflow-hidden rounded-3xl bg-zinc-900"
          >
            <img
              src={project.image}
              alt={project.title[t.language as keyof typeof project.title]}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title[t.language as "uz" | "ru"]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
