type HeroButtonsProps = {
  t: any;
};

export default function HeroButtons({ t }: HeroButtonsProps) {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <a
        href="https://t.me/Ulugbekbr0"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          z-50
          rounded-2xl
          bg-gradient-to-r
          from-violet-400
          via-purple-600
          to-fuchsia-400
          px-8
          py-4
          text-white
          font-semibold
          transition
          hover:scale-105
          shadow-[0_0_40px_rgba(139,92,246,0.35)]
        "
      >
        {t.hero.contact}
      </a>

      <a
        href="https://t.me/brofolio"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          text-white
          font-semibold
          backdrop-blur-xl
          transition
          hover:bg-white/10
        "
      >
        {t.hero.portfolio}
      </a>

    </div>
  );
}