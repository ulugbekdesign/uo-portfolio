import { FaInstagram, FaTelegram,  FaPhone } from "react-icons/fa6";
type ContactProps = {
  t: any;
};

export default function Contact({ t }: ContactProps) {
  return (
    <section 
      id="contact"
      className="py-28"
    >

      <div className="max-w-7xl mx-auto px-8">


        <div className="
          rounded-[40px]
          p-[1px]
          bg-gradient-to-r
          from-violet-400
          via-purple-600
          to-fuchsia-400
        ">

          <div className="
            rounded-[40px]
            bg-[#050505]
            p-12
            grid
            lg:grid-cols-2
            gap-12
          ">


            {/* LEFT */}

            <div>

  <h2 className="text-5xl font-bold leading-tight">
  <span>{t.contact.line1}</span>

  <br />

  <span
    className="
      bg-gradient-to-r
      from-violet-400
      via-purple-600
      to-fuchsia-400
      bg-clip-text
      text-transparent
    "
  >
    {t.contact.line2}
  </span>

  <br />

  <span>{t.contact.line3}</span>
</h2>
              <p className="
                mt-6
                text-gray-400
                text-lg
              ">
                {t.contact.description}
              </p>



              <a
                href="https://t.me/Ulugbekbr0"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  mt-10
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-400
                  via-purple-600
                  to-fuchsia-400
                  px-10
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                  shadow-[0_0_40px_rgba(139,92,246,.35)]
                "
              >
                {t.contact.button}
              </a>


            </div>



            {/* RIGHT */}

            <div className="
              lg:border-l
              border-white/10
              lg:pl-12
            ">


              <h3 className="
                text-2xl
                font-semibold
              ">
                {t.contact.contacts}
              </h3>



              <div className="
                flex
                gap-4
                mt-8
                flex-wrap
              ">


                <a
  href="https://www.instagram.com/ulugbekbr0?igsh=MWhkNGE2cHUwZ204bw=="
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    justify-center
    w-14
    h-14
    rounded-2xl
    bg-gradient-to-tr
    from-[#F9CE34]
    via-[#EE2A7B]
    to-[#6228D7]
    text-white
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_0_40px_rgba(238,42,123,.5)]
  "
>
  <FaInstagram size={24} />
</a>
<a
  href="tel:+99894 883 58 18"
  className="
    flex
    items-center
    justify-center
    w-14
    h-14
    rounded-2xl
    bg-gradient-to-tr
    from-[#25D366]
    via-[#1EBE5D]
    to-[#128C7E]
    text-white
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_0_40px_rgba(37,211,102,.5)]
  "
>
  <FaPhone size={22} />
</a>
                
                <a
  href="https://t.me/Ulugbekbr0"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    justify-center
    w-14
    h-14
    rounded-2xl
    bg-gradient-to-tr
    from-[#6EC6FF]
    via-[#2AABEE]
    to-[#0088CC]
    text-white
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_0_40px_rgba(42,171,238,.55)]
  "
>
  <FaTelegram size={24} />
</a>


              </div>
<div className="mt-10 border-l-2 border-violet-500 pl-5 max-w-md">
  <p className="text-gray-400 leading-7">
    </p>
    <p className="text-gray-400 leading-7 whitespace-pre-line">
  {t.contact.thanks}

  </p>
</div>

            </div>


          </div>

        </div>


      </div>

    </section>
  );
}