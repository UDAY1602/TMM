import { Link } from "react-router-dom";


export default function Section1() {
  return (
    <section className="w-full bg-[#d8d4d4]">

      {/* TEXT SECTION */}
      <div className="w-full max-w-7xl mx-auto px-8 pt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN */}
        <div>
          <h2 className="heading-font text-4xl md:text-4xl text-[#313131]">
            Technology-driven manufacturing
            <br />
            for the next generation of mineral
            <br />
            products
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-[#313131]">
          <p className="leading-relaxed">
            Tanujasreekesh is a specialized manufacturer of high-purity Quartz
            Grits, Quartz Fillers and Industrial Quartz Powder engineered for
            the Engineered Quartz Stone (EQS) industry and a wide range of
            industrial applications. With advanced processing technology and
            strict quality control, we deliver quartz products that meet
            global performance standards.
          </p>

          <Link
            to="/about"
            className="inline-block mt-6 text-sm text-[#313131] underline underline-offset-4 hover:opacity-70 transition"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* VIDEO – DIRECTLY BELOW TEXT (NORMAL FLOW) */}
      <div className="w-full max-w-7xl mx-auto px-8 mt-12">
        <video
          src=" "
          controls
          className="w-full h-[320px] md:h-[400px] object-cover rounded-lg"
        />
      </div>

    </section>
  );
}
