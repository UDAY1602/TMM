import React from "react";
import section4bg from "../../assets/section4bg.png";

export default function Section4() {
  return (
    <section className="bg-[#1a1a1a] text-[#ffffff] w-full overflow-x-hidden">

      {/* TOP IMAGE STRIP */}
      <div className="pt-12 sm:pt-16">
        <div
          className="
            mx-auto max-w-6xl
            h-[180px] sm:h-[220px] lg:h-[260px]
            bg-no-repeat bg-center bg-cover
            flex items-center justify-center
            px-6 text-center
          "
          style={{ backgroundImage: `url(${section4bg})` }}
        >
          <h2 className="bankgothicbold tracking-wide text-sm sm:text-base lg:text-xl leading-snug">
            Engineered for Excellence. Trusted Across Industries.
          </h2>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="
        max-w-7xl mx-auto
        px-6 sm:px-10 lg:px-20
        py-14 sm:py-18
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-14
        items-center
      ">

        {/* LEFT DESCRIPTION */}
        <p className="
          montserratthin leading-relaxed
          text-sm sm:text-base lg:text-xl
          text-center lg:text-left
        ">
          Our products are trusted by manufacturers and industrial processors
          across India, the Middle East, Southeast Asia, and emerging
          international markets for the right reasons.
        </p>

        {/* RIGHT FEATURES */}
        <div className="
          grid grid-cols-1 sm:grid-cols-3
          gap-y-8 sm:gap-x-10 lg:gap-x-16
          text-[#eeedd3]
          text-sm sm:text-base lg:text-lg
          oswaldbold
          text-center lg:text-left
          justify-items-center lg:justify-items-start
        ">

          <div className="space-y-3 max-w-[240px]">
            <p>High-purity raw material</p>
            <p>Strict QC & batch traceability</p>
          </div>

          <div className="space-y-3 max-w-[300px]">
            <p>Advanced processing & optical sorting</p>
            <p>Custom specifications</p>
          </div>

          <div className="space-y-3 max-w-[240px]">
            <p>Consistent particle sizing</p>
            <p>Reliable domestic & global delivery</p>
          </div>

        </div>
      </div>

      {/* BOTTOM STATS BAR */}
      <div
        className="py-12 sm:py-16 text-[#eeedd3]"
        style={{
          background: "linear-gradient(to right,#151615 , #0A0C0B,#1E1E1E, #1E1E1E)",
        }}
      >
        <div className="
          max-w-7xl mx-auto
          px-6 sm:px-12
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-10 sm:gap-12
          text-center lg:text-left
        ">

          <div>
            <h3 className="oswaldbold text-xl sm:text-2xl lg:text-3xl">08+ years</h3>
            <p className="para-font text-sm sm:text-base lg:text-xl">
              of manufacturing  <br /> excellence
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-xl sm:text-2xl lg:text-3xl">50,000+ tons</h3>
            <p className="para-font text-sm sm:text-base lg:text-xl">
              Quartz processed <br /> annually
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-xl sm:text-2xl lg:text-3xl">3.24 Acres</h3>
            <p className="para-font text-sm sm:text-base lg:text-xl">
              of manufacturing <br />infrastructure
            </p>
          </div>

          <div>
            <h3 className="oswaldbold text-xl sm:text-2xl lg:text-3xl">
              24x7 
            </h3>
            <p className="para-font text-sm sm:text-base lg:text-xl">
                Operational <br />Capability
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
