import { Download } from "lucide-react";
type AboutProps = {
  t: any;
};

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-32"
    >
  
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[8px] text-gray-500 mb-5">
            {t.about.badge}
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            {t.about.title1}
            <br />
            {t.about.title2}
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
          {t.about.text}
          </p>
          
            <a
  href="/cv.pdf"
  download
  className="
    inline-flex
    items-center
    gap-3
    mt-10
    rounded-2xl
    border
    border-white/10
    bg-[#0B0B0B]
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:border-violet-500/50
    hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
  "
>
  <Download
    size={22}
    className="text-violet-500"
    strokeWidth={2.5}
  />

  <span>{t.about.text}</span>
</a>
         <div className="grid grid-cols-3 gap-6 mt-20">


  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
    shadow-[0_0_40px_rgba(139,92,246,0.25)]
  ">

    <h3 className="text-4xl font-bold text-white">
      50+
    </h3>

    <p className="mt-2 text-white/80">
      {t.about.projects}
    </p>

  </div>



  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
    shadow-[0_0_40px_rgba(139,92,246,0.25)]
  ">

    <h3 className="text-4xl font-bold text-white">
      30+
    </h3>

    <p className="mt-2 text-white/80">
      {t.about.clients}
    </p>

  </div>



  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
    shadow-[0_0_40px_rgba(139,92,246,0.25)]
  ">

    <h3 className="text-4xl font-bold text-white">
      3+
    </h3>

    <p className="mt-2 text-white/80">
      {t.about.experience}
    </p>

  </div>


</div>

        </div>

        <div>

          <img
            src="/me.jpg.png"
            alt="Ulugbek"
            className="rounded-[35px] border border-white/10"
          />

        </div>

      </div>
    </section>
  );
}