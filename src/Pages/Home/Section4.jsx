import React from "react";
import section4bg from "../../assets/section4bg.png";

export default function Section4() {
  return (
    <section className="bg-[#1a1a1a] text-[#eeedd3] w-full">

      {/* TOP IMAGE STRIP */}
      <div className="pt-20">
        <div
          className="mx-auto max-w-6xl h-[160px] bg-no-repeat bg-center bg-auto"
          style={{ backgroundImage: `url(${section4bg})` }}
        >
          <div className="h-full flex items-center justify-center">
            <h2 className="heading-font uppercase tracking-widest text-sm">
              Engineered for Excellence. Trusted Across Industries.
            </h2>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT DESCRIPTION */}
        <p className="para-font leading-relaxed text-sm max-w-md">
          Our products are trusted by manufacturers <br />
          and industrial processors across India, the <br />
          Middle East, Southeast Asia, and emerging <br />
          international markets for the right reasons.
        </p>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm heading-font">

          <div className="space-y-4">
            <p>High-purity raw material</p>
            <p>Strict QC & batch traceability</p>
          </div>

          <div className="space-y-4">
            <p>Advanced processing & optical sorting</p>
            <p>Custom specifications</p>
          </div>

          <div className="space-y-4">
            <p>Consistent particle sizing</p>
            <p>Reliable domestic & global delivery</p>
          </div>

        </div>
      </div>

      {/* BOTTOM STATS BAR */}
      <div
        className="py-16 text-[#eeedd3]"
        style={{
          background: "linear-gradient(to right,#151615 , #0A0C0B,#1E1E1E, #1E1E1E)",
        }}
      >
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="heading-font text-3xl font-semibold">
              XX+ years
            </h3>
            <p className="para-font text-xl">
              of manufacturing excellence
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl font-semibold">
              XX+ tons
            </h3>
            <p className="para-font text-sm">
              Quartz processed annually
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl font-semibold">
              X,000 sq.ft.
            </h3>
            <p className="para-font text-sm">
              of manufacturing infrastructure
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl font-semibold">
              X+ Product Grades
            </h3>
            <p className="para-font text-sm">
              customized for industries
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
