import React from "react";
import section7right from "../../assets/section7right.png";

const Section7 = () => {
  return (
    <div className="w-full h-[300px] flex bg-[#313131]">

      {/* LEFT TEXT PANEL */}
      <div className="w-2/3 h-full flex flex-col justify-center px-20">
        <p className="oswaldlight text-[#eeedd3] text-3xl tracking-[0.3em] mb-4">
          PREMIUM QUARTZ
        </p>

        <h1 className="bankgothicbold text-[#eeedd3] text-4xl tracking-wide">
          Grits, Fillers & Powders
        </h1>
      </div>

      {/* RIGHT IMAGE PANEL */}
      <div
        className="w-1/3 h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${section7right})` }}
      >
        {/* TEXT ON IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="oswold-reg text-black text-3xl">
            View Products
          </p>
        </div>
      </div>

    </div>
  );
};

export default Section7;
