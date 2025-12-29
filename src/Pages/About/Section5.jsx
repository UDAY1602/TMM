import React from "react";
import abtsec5L from "../../assets/abtsec5L.png";
import abtsec5R from "../../assets/abtsec5R.png";

export default function Section5() {
  return (
    <section
      className="section5-wrapper"
      style={{
        width: "100%",
        background: "#111",
        padding: "24px 0", // TOP & BOTTOM SAME
        boxSizing: "border-box",
      }}
    >
      <div
        className="section5-container"
        style={{
          width: "100%",
          display: "flex",
          gap: "6px", // desktop gap
        }}
      >
        {/* LEFT IMAGE – 60% */}
        <div
          className="section5-left"
          style={{
            flex: "0 0 60%",
            overflow: "hidden",
          }}
        >
          <img
            src={abtsec5L}
            alt="Section 5 Left"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* RIGHT IMAGE – 40% */}
        <div
          className="section5-right"
          style={{
            flex: "0 0 40%",
            overflow: "hidden",
          }}
        >
          <img
            src={abtsec5R}
            alt="Section 5 Right"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* MOBILE-ONLY LEFT PADDING FIX */}
      <style>
        {`
          @media (max-width: 768px) {
            .section5-container {
              /* shift content slightly left */
              margin-left: -8px;
              margin-right: 0;
            }
          }
        `}
      </style>
    </section>
  );
}
