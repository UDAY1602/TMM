import React from "react";
import abtsec6 from "../../assets/abtsec6.jpg";

const Section6 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:min-h-[320px] bg-[#1E1E1E]">
      
      <div
        className="w-full md:w-1/3 h-[220px] md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${abtsec6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/55 to-[#1E1F1C]" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center md:text-left">
          <div>
            <p className="bankgothiclightreg text-[#eeedd3] text-sm md:text-xl tracking-widest mb-2 uppercase">
              Our ethos
            </p>

            <h1 className="oswold-reg text-[#eeedd3] text-xl md:text-3xl leading-snug">
              Sustainability & <br className="hidden md:block" />
              Safety Commitment
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex items-center px-6 md:px-12 py-6 md:py-0">
        <div className="max-w-xl w-full">
          <p className="monts-reg text-[#ffffff] text-xs md:text-sm leading-relaxed mb-6">
            We follow stringent HSE practices, ensuring safe operations,
            environmentally responsible mining and clean manufacturing processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-36 text-[#eeedd3]">
            <div className="space-y-3">
              <p className="inter-reg section-font text-base md:text-xl whitespace-nowrap">
                ISO & quality certifications
              </p>
              <p className="inter-reg section-font text-base md:text-xl whitespace-nowrap">
                Environmental & safety compliance
              </p>
            </div>

            <div className="space-y-3">
              <p className="inter-reg section-font text-base md:text-xl whitespace-nowrap">
                Dust-free packaging
              </p>
              <p className="inter-reg section-font text-base md:text-xl whitespace-nowrap">
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
