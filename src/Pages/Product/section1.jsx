import React, { useEffect, useState } from "react";
import FloatingMineral from "./floatinmineralprod";

export default function Section1() {
  const [showMineral, setShowMineral] = useState(false);

  const heading = "PURE MINERALS.\nPROVEN PERFORMANCE.";
  const text =
    "Precision-processed mineral solutions supporting ceramics, glass, construction chemicals, polymers, coatings, foundry, and engineered stone industries.";

  const [typedHeading, setTypedHeading] = useState("");
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(false);

  /* POP MINERAL */
  useEffect(() => {
    const t = setTimeout(() => setShowMineral(true), 50);
    return () => clearTimeout(t);
  }, []);

  /* SIMPLE TYPING */
  useEffect(() => {
    let i = 0;
    setTyping(true);

    const interval = setInterval(() => {
      if (i < heading.length) {
        setTypedHeading(heading.slice(0, i + 1));
      } else if (i < heading.length + text.length) {
        setTypedText(text.slice(0, i - heading.length + 1));
      } else {
        clearInterval(interval);
        setTyping(false);
      }
      i++;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
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
      {/* FLOATING MINERAL */}
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
          whiteSpace: "pre-line",
        }}
      >
        {/* ===== INVISIBLE SPACE HOLDER (PREVENTS BG SHIFT) ===== */}
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

        {/* ===== TYPED TEXT (ABSOLUTE OVERLAY) ===== */}
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
            {typedText}
            {typing &&
              typedHeading.length === heading.length &&
              typedText.length < text.length &&
              "|"}
          </p>
        </div>
      </div>

      {/* STYLES */}
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
