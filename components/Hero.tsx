import HeroGlow from "./HeroGlow";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section 
  id="home"
  className="relative overflow-hidden min-h-screen flex items-center"
>

      <HeroGlow />

      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 items-center gap-20">


          {/* LEFT */}

          <div className="relative z-20">

            <HeroBadge />


            <h1 className="
              mt-8
              text-6xl
              lg:text-8xl
              font-extrabold
              leading-none
              tracking-tight
            ">

              <span className="
                bg-gradient-to-r
                from-violet-400
                via-purple-600
                to-fuchsia-400
                bg-clip-text
                text-transparent
              ">
                Ulug'bek
              </span>


              <br />


              <span className="text-white">
                Otabekov
              </span>

            </h1>



            <p className="
              mt-8
              text-xl
              leading-9
              text-gray-400
              max-w-xl
            ">

              Brendingiz va biznesingizni yangi darajaga olib chiqamiz.

            </p>



            <HeroButtons />



            <div className="grid grid-cols-3 gap-6 mt-20">


             <div className="
  rounded-3xl
  p-[1px]
  bg-gradient-to-r
  from-violet-400
  via-purple-600
  to-fuchsia-400
">

  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
  ">

    <h3 className="
      text-4xl
      font-bold
      text-white
    ">
      50+
    </h3>

    <p className="
      mt-2
      text-white/80
    ">
      Loyihalar
    </p>

  </div>

</div>



              <div className="
  rounded-3xl
  p-[1px]
  bg-gradient-to-r
  from-violet-400
  via-purple-600
  to-fuchsia-400
">

  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
  ">

    <h3 className="
      text-4xl
      font-bold
      text-white
    ">
      30+
    </h3>

    <p className="
      mt-2
      text-white/80
    ">
      Mijozlar
    </p>

  </div>

</div>



              <div className="
  rounded-3xl
  p-[1px]
  bg-gradient-to-r
  from-violet-400
  via-purple-600
  to-fuchsia-400
">

  <div className="
    rounded-3xl
    bg-gradient-to-br
    from-violet-500
    via-purple-600
    to-fuchsia-500
    p-6
  ">

    <h3 className="
      text-4xl
      font-bold
      text-white
    ">
      3+
    </h3>

    <p className="
      mt-2
      text-white/80
    ">
      Yil
    </p>

  </div>

</div>


            </div>


          </div>




          {/* RIGHT */}


          <div className="relative flex justify-center">


            <div className="
              absolute
              w-[550px]
              h-[550px]
              rounded-full
              bg-violet-600/30
              blur-[140px]
            " />


            <img
              src="/me.jpg.png"
              alt="Ulugbek Otabekov"
              className="
                relative
                z-10
                w-[430px]
                rounded-[40px]
                border
                border-white/10
                shadow-[0_0_80px_rgba(139,92,246,.25)]
              "
            />



            <div className="
              absolute
              right-0
              bottom-10
              z-20
              rounded-3xl
              border
              border-white/10
              bg-[#111]/80
              backdrop-blur-xl
              px-6
              py-5
            ">

              <p className="text-sm text-gray-400">
                Telegram
              </p>


              <a
                href="https://t.me/brofolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                @brofolio
              </a>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}