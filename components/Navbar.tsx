export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 py-6">

        <nav className="
          flex
          items-center
          justify-between
          rounded-3xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-xl
          px-8
          py-4
        ">

          {/* LOGO */}

          <div className="text-2xl font-bold tracking-tight">
            <span className="text-violet-500">
              U
            </span>
            <span className="text-white">
              O.
            </span>
          </div>


          {/* MENU */}

          <div className="
            hidden
            md:flex
            items-center
            gap-10
            text-gray-400
          ">

            <a
  href="#home"
  className="transition hover:text-violet-400"
>
  Bosh sahifa
</a>

            <a
  href="#about"
  className="transition hover:text-violet-400"
>
  Men haqimda
</a>

            <a 
              href="#portfolio"
              className="hover:text-white transition"
            >
              Portfolio
            </a>

            <a 
              href="#contact"
              className="hover:text-white transition"
            >
              Kontaktlar
            </a>

          </div>


        {/* LANGUAGE */}

<div className="
  flex
  items-center
  gap-2
  rounded-2xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-xl
  px-4
  py-2
">

  <button
    className="
      text-white
      font-medium
      transition
    "
  >
    UZ
  </button>


  <span className="text-gray-500">
    /
  </span>


  <button
    className="
      text-gray-400
      hover:text-white
      transition
    "
  >
    RU
  </button>

</div>


        </nav>

      </div>

    </header>
  );
}