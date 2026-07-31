const projects = [
  {
    title: "Social Media Design",
    image: "/socialmedia1.jpg",
  },
  {
    title: "Social Media Campaign",
    image: "/socialmedia2.jpg",
  },
  {
    title: "Web Design",
    image: "/webdesign3.jpg",
  },
  {
    title: "Landing Page",
    image: "/webdesign2.jpg",
  },
  {
    title: "Poster Design",
    image: "/poster.jpg",
  },
  {
    title: "Creative Poster",
    image: "/poster2.jpg",
  },
  {
    title: "Logo Design",
    image: "/logo.jpg",
  },
  {
    title: "Print Design",
    image: "/poygrafya.jpg",
  },
  {
    title: "Print Materials",
    image: "/polygrafiya2.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2 className="text-5xl font-bold mb-12">Saralangan loyihalar</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl bg-zinc-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}