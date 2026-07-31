export default function Services() {
  const services = [
    {
      number: "01",
      title: "Brand Design",
      text: "Logo, Brandbook, Packaging va vizual identika.",
    },
    {
      number: "02",
      title: "SMM",
      text: "Instagram dizayni, kontent va reklama materiallari.",
    },
    {
      number: "03",
      title: "Web Design",
      text: "Landing Page va Portfolio dizaynlari.",
    },
    {
      number: "04",
      title: "Mobilography",
      text: "Reels, video suratga olish va montaj.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="uppercase tracking-[8px] text-gray-500 mb-5">
        Xizmatlarim
      </p>

      <h2 className="text-5xl font-bold mb-16">
        Sizga nima taklif qila olaman
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {services.map((service) => (
          <div
            key={service.number}
            className="group bg-[#141414] border border-white/10 rounded-[30px] p-10 hover:border-white duration-300 hover:-translate-y-2"
          >
            <span className="text-gray-500 text-lg">
              {service.number}
            </span>

            <h3 className="text-3xl font-bold mt-6">
              {service.title}
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              {service.text}
            </p>

            <div className="mt-10 text-white group-hover:translate-x-2 duration-300">
              →
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}