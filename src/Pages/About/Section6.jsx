import React from "react";
import abtsec6 from "../../assets/abtsec6.jpg";

const Section6 = () => {
  return (
    <div className="w-full h-[320px] flex">

      {/* LEFT IMAGE PANEL */}
      <div
        className="
          w-1/3 h-full
          bg-cover bg-left
          relative
        "
        style={{ backgroundImage: `url(${abtsec6})` }}
      >
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/45
            via-black/55
            to-[#1E1F1C]
          "
        />

        {/* TEXT OVER IMAGE (CENTERED) */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
        <div>
            <p className="para-font text-[#eeedd3] text-xs tracking-widest mb-3 uppercase">
                Our ethos
            </p>

        <h1 className=".oswold-reg text-[#eeedd3] text-2xl leading-snug">
            Sustainability & <br />
            Safety Commitment
            </h1>
        </div>

    </div>

      </div>
      

      {/* RIGHT CONTENT PANEL */}
      <div className="w-2/3 h-full bg-[#1E1E1E] flex items-center px-12">
        <div className="max-w-xl">

          {/* TOP PARAGRAPH */}
          <p className="monts-reg text-[#ffffff] text-xs leading-relaxed mb-6">
            We follow stringent HSE practices, ensuring safe operations,
            environmentally responsible mining and clean manufacturing
            processes.
            {/* montserrat */}
          </p>

          {/* FEATURES GRID (2 COLUMNS) */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[#eeedd3]">

            {/* LEFT COLUMN */}
            <div className="space-y-3">
              <p className="inter-reg section-font text-sm">
                ISO & quality certifications
                {/* inter */}
              </p>
              <p className=" inter-reg section-font text-sm">
                Environmental & safety compliance
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              <p className=" inter-reg section-font text-sm">
                Dust-free packaging
              </p>
              <p className="inter-reg section-font text-sm">
                Low-iron processing
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Section6;
