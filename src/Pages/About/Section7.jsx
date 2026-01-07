import React from "react";
import { useNavigate } from "react-router-dom";
import section7right from "../../assets/section7right.png";

const Section7 = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#313131] md:min-h-[300px]">

      {/* LEFT TEXT PANEL */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-6 md:px-20 py-8 md:py-0">
        <p className="oswaldlight text-[#eeedd3] text-lg md:text-3xl tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4">
          PREMIUM QUARTZ
        </p>

        <h1 className="bankgothicbold text-[#eeedd3] text-2xl md:text-4xl tracking-wide">
          Grits, Fillers & Powders
        </h1>
      </div>

      {/* RIGHT IMAGE PANEL */}
      <div
        className="w-full md:w-1/3 h-[200px] md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${section7right})` }}
      >
        {/* TEXT ON IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            onClick={goToProducts}
            className="
              oswold-reg text-black text-lg md:text-3xl
              cursor-pointer
              hover:opacity-80
              transition
            "
          >
            View Products
          </p>
        </div>
      </div>

    </div>
  );
};

export default Section7;
