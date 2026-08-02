const logos = [
  "/logos/artel.png",
  "/logos/akfa.png",
  "/logos/sezin.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
];
export default function Clients() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-2xl font-semibold text-white">
          Ishonch bildirgan mijozlar
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Bizneslar va brendlar bilan hamkorlik
        </p>

        <div
          className="
            mt-12
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-6
          "
        >

          {/* Logo 1 */}
          <div
            className="
              h-28
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
          >
            <img
              src="/logos/logo1.png"
              alt="Logo 1"
              className="max-w-[140px] max-h-[60px] object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div
            className="
              h-28
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
          >
            <img
              src="/logos/logo2.png"
              alt="Logo 2"
              className="max-w-[140px] max-h-[60px] object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div
            className="
              h-28
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
          >
            <img
              src="/logos/logo3.png"
              alt="Logo 3"
              className="max-w-[140px] max-h-[60px] object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div
            className="
              h-28
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
          >
            <img
              src="/logos/logo4.png"
              alt="Logo 4"
              className="max-w-[140px] max-h-[60px] object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div
            className="
              h-28
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
            "
          >
            <img
              src="/logos/logo5.png"
              alt="Logo 5"
              className="max-w-[140px] max-h-[60px] object-contain"
            />
          </div>

        </div>

      </div>

    </section>
  );
}