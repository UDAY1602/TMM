import React, { useEffect, useState } from "react";
import FloatingMineral from "./floatinmineralprod";

export default function Section1() {
  const [showMineral, setShowMineral] = useState(false);

  const heading = "PURE MINERALS.\nPROVEN PERFORMANCE.";
  const text =
    "Precision-processed mineral solutions supporting ceramics, glass, construction chemicals, polymers, coatings, foundry, and engineered stone industries.";

  const [typedHeading, setTypedHeading] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowMineral(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Typing animation -- heading
  useEffect(() => {
    let i = 0;
    setTyping(true);

    const interval = setInterval(() => {
      if (i < heading.length) {
        setTypedHeading(heading.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section1-hero"
      style={{
        backgroundColor: "#000000",
        padding: "80px 32px",
        boxSizing: "border-box",
        width: "100%",
        position: "relative",
        minHeight: "300px",
        overflow: "visible",
      }}
    >
      <FloatingMineral visible={showMineral} />

      <div
        className="product-text-wrapper"
        style={{
          marginLeft: "auto",
          paddingRight: "120px",
          maxWidth: "720px",
          position: "relative",
          zIndex: 10,
          whiteSpace: "pre-line",
        }}
      >
        {/* Hidden block for layout stability */}
        <div style={{ visibility: "hidden" }}>
          <h1
            className="bankgothiclightreg"
            style={{
              fontSize: "38px",
              letterSpacing: "1.5px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {heading}
          </h1>

          <p
            style={{
              fontFamily: "MontserratThin, sans-serif",
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "620px",
            }}
          >
            {text}
          </p>
        </div>

        {/* Visible animated content */}
        <div style={{ position: "absolute", top: 0, left: 0 }}>
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
            {typedHeading}
            {typing && typedHeading.length < heading.length && "|"}
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
            {text}
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .section1-hero {
              overflow: hidden !important;
              margin-bottom: 0 !important;
              padding-bottom: 40px !important;
            }

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
