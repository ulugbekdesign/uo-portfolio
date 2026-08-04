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
      uz: "SMM Kampaniya",
      ru: "SMM Кампания",
    },
    image: "/socialmedia2.jpg",
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
      uz: "Landing Sahifa",
      ru: "Лендинг",
    },
    image: "/webdesign2.jpg",
  },
  {
    title: {
      uz: "Poster Dizayn",
      ru: "Дизайн постера",
    },
    image: "/poster.jpg",
  },
  {
    title: {
      uz: "Kreativ Poster",
      ru: "Креативный постер",
    },
    image: "/poster2.jpg",
  },
  {
    title: {
      uz: "Logo Dizayn",
      ru: "Дизайн логотипа",
    },
    image: "/logo.jpg",
  },
  {
    title: {
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
    image: "/polygrafiya2.jpg",
  },
];

type PortfolioProps = {
  t: any;
};

export default function Portfolio({ t }: PortfolioProps) {
  return (
    <section id="portfolio">
      <h2 className="text-5xl font-bold mb-12">
  {t.portfolio.title}
</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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