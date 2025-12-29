import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="h-screen w-full bg-[#d8d4d4] flex flex-col">

      {/* Top content */}
      <div className=" flex-1 flex items-start">
        <div className="w-full max-w-7xl mx-auto px-8 pt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="heading-font text-4xl md:text-4xl text-[#313131]  ">
              Technology-driven manufacturing
              <br />
              for the next generation of mineral
              <br />
              products
            </h2>
          </div>
          {/* Right Column */}
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
      </div>

      {/* Bottom video */}
      <div className="h-24 flex justify-center items-center">
      <video
        src=""
        controls
        className="h-full max-h-20"
      />
      </div>


    </section>
  );
}
