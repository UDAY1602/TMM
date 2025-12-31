import React, { useEffect, useState } from "react";
import FloatingMineral from "./floatinmineralprod";

export default function Section1() {
  const [showMineral, setShowMineral] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowMineral(true);
      } else {
        setShowMineral(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000000",
        padding: "80px 32px",
        boxSizing: "border-box",
        width: "100%",
        position: "relative",

        /* 🔑 THESE TWO LINES FIX EVERYTHING */
        minHeight: "300px",   // same as About page
        overflow: "visible",  // allow mineral to cross into Section 2
      }}
    >
      {/* LEFT FLOATING MINERAL ANIMATION */}
      <FloatingMineral visible={showMineral} />

      {/* CONTENT */}
      <div
        className="product-text-wrapper"
        style={{
          marginLeft: "auto",
          paddingRight: "120px",
          maxWidth: "720px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h1
          className="bankgothiclightreg"
          style={{
            color: "#EEEDD3",
            fontSize: "38px",
            letterSpacing: "1.5px",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          PURE MINERALS.
          <br />
          PROVEN PERFORMANCE.
        </h1>

        <p
          style={{
            fontFamily: "MontserratThin, sans-serif",
            color: "#FFFFFF",
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "620px",
          }}
        >
          Precision-processed mineral solutions supporting ceramics, glass,
          construction chemicals, polymers, coatings, foundry, and engineered
          stone industries.
        </p>
      </div>

      {/* MOBILE */}
      <style>
        {`
          @media (max-width: 768px) {
            .product-text-wrapper {
              margin-left: 0 !important;
              padding-right: 0 !important;
              max-width: 100% !important;
              text-align: center;
            }

            .product-text-wrapper h1 {
              font-size: 30px !important;
              letter-spacing: 1px !important;
            }

            .product-text-wrapper p {
              font-size: 16px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
