import React from "react";
import section4bg from "../../assets/section4bg.png";

export default function Section4() {
  return (
    <section className="bg-[#1a1a1a] text-[#ffffff] w-full">

      {/* TOP IMAGE STRIP */}
      <div className="pt-20">
        <div
          className="mx-auto max-w-6xl h-[160px] bg-no-repeat bg-center bg-auto"
          style={{ backgroundImage: `url(${section4bg})` }}
        >
          <div className="h-full flex items-center justify-center">
            <h2 className="bankgothicbold  tracking-widetext-xl sm:text-m lg:text-xl">
              Engineered for Excellence. Trusted Across Industries.
            </h2>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="max-w-7xl mx-auto px-20 py-20 grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT DESCRIPTION */}
        <p className="montserratthin leading-loose text-xl ">
          Our products are trusted by manufacturers <br />
          and industrial processors across India, the <br />
          Middle East, Southeast Asia, and emerging <br />
          international markets for the right reasons.
        </p>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-16 text-[#eeedd3] text-xl oswaldbold">

          <div className="space-y-6 max-w-[240px]">
            <p>High-purity raw material</p>
            <p>Strict QC & batch traceability</p>
          </div>

          <div className="space-y-6 max-w-[300px]">
            <p>Advanced processing & optical sorting</p>
            <p>Custom specifications</p>
          </div>

          <div className="space-y-6 max-w-[240px]">
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
            <h3 className="oswaldbold text-3xl">
              XX+ years
            </h3>
            <p className="para-font text-xl">
              of manufacturing <br />
              excellence
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-3xl">
              XX+ tons
            </h3>
            <p className="para-font text-xl">
              Quartz processed 
              <br />annually
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-3xl">
              X,000 sq.ft.
            </h3>
            <p className="para-font text-xl">
              of manufacturing <br />
              infrastructure
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-3xl">
              X+ Product Grades
            </h3>
            <p className="para-font text-xl">
              customized for industries
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
