import React, { useState } from "react";
import prodsec2mineral from "../../assets/prodsec2mineral.png";
import Section2Dropdown from "./dropdownsec2";
import Section2DropdownMobile from "./dropdownsec2mob";

export default function Section2() {
  const [open, setOpen] = useState(false);
  const [activeSize, setActiveSize] = useState("0.1-0.4");

  return (
    <section
      className="section2-quartz"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* ================= DESKTOP LAYOUT ================= */}
      <div
        className="sec2-wrapper"
        style={{
          maxWidth: "1550px",
          marginLeft: "0",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* TITLE */}
        <div
          className="sec2-title"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "40px",
            paddingLeft: "180px",
          }}
        >
          <h2
            className="oswold-reg"
            style={{
              color: "#222",
              letterSpacing: "10px",
              fontSize: "48px",
            }}
          >
            PRODUCT CATEGORIES
          </h2>
        </div>

        {/* GRID */}
        <div style={{ width: "100%" }}>
          <div
            className="sec2-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.4fr 0fr 1.4fr",
              minHeight: "360px",
              alignItems: "stretch",
              width: "100vw",
              marginLeft: "-32px",
            }}
          >
            {/* LEFT CREAM BAR — DESKTOP */}
            <div style={{ backgroundColor: "#EDE4CF" }} />

            {/* IMAGE — DESKTOP */}
            <div
              className="sec2-image"
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "40px",
                paddingLeft: "80px",
              }}
            >
              <img
                src={prodsec2mineral}
                alt="Quartz Grits"
                style={{
                  height: "300px",
                  maxWidth: "none",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* CONTENT — DESKTOP */}
            <div
              className="sec2-content"
              style={{
                backgroundColor: "#EDE4CF",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="sec2-text"
                style={{
                  maxWidth: "520px",
                  padding: "40px",
                  margin: "0 auto",
                }}
              >
                <p
                  style={{
                    fontFamily: "monts-semibold",
                    fontSize: "13px",
                    marginBottom: "12px",
                  }}
                >
                  Engineered for engineered stone, glass, and ceramics with
                  controlled whiteness and purity.
                </p>

                <h3
                  className="bankgothiclightreg"
                  style={{ fontSize: "24px", marginBottom: "12px" }}
                >
                  QUARTZ GRITS – PREMIUM
                </h3>

                <p
                  style={{
                    fontFamily: "bankgothicbold",
                    fontSize: "14px",
                    marginBottom: "16px",
                  }}
                >
                  0.1 – 4.0 MM
                </p>

                <p
                  style={{
                    fontFamily: "monts-reg",
                    fontSize: "12px",
                    marginBottom: "16px",
                  }}
                >
                  Optimized quartz grits offering excellent strength, clarity and
                  processing efficiency—ideal for high-performance industrial
                  and architectural uses.
                </p>

                <button
                  onClick={() => setOpen(!open)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "monts-med",
                    cursor: "pointer",
                  }}
                >
                  Product Details{" "}
                  <span style={{ fontSize: "10px" }}>
                    {open ? "▲" : "▼"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DROPDOWNS ================= */}
      <div className="desktop-dropdown">
        <Section2Dropdown
          open={open}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
      </div>

      <div className="mobile-dropdown">
        <Section2DropdownMobile
          open={open}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
      </div>

      {/* ================= MOBILE — SECTION 2 ONLY ================= */}
      <style>
        {`
        .mobile-dropdown { display: none; }
        .desktop-dropdown { display: block; }

        @media (max-width: 768px) {

          /* switch dropdowns */
          .desktop-dropdown { display: none; }
          .mobile-dropdown { display: block; }

          /* remove outer gaps */
          .section2-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .section2-quartz .sec2-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          /* title inside cream */
          .section2-quartz .sec2-title {
            background: #EDE4CF;
            padding: 24px 20px 16px !important;
            margin-bottom: 0 !important;
            justify-content: center !important;
          }

          .section2-quartz .oswold-reg {
            font-size: 28px !important;
            letter-spacing: 4px !important;
            text-align: left !important;
          }

          /* single cream container */
          .section2-quartz .sec2-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            background: #EDE4CF !important;
          }

          /* text first */
          .section2-quartz .sec2-content {
            order: 1 !important;
            background: transparent !important;
          }

          .section2-quartz .sec2-text {
            max-width: 100% !important;
            padding: 30px 20px 20px !important;
          }

          /* image white card */
          .section2-quartz .sec2-image {
            order: 2 !important;
            background: transparent !important;
            padding: 0 20px 30px !important;
            justify-content: center !important;
          }

          .section2-quartz .sec2-image img {
            background: #ffffff !important;
            padding: 24px !important;
            border-radius: 4px;
            height: 260px !important;
            max-width: 320px !important;
            width: 100% !important;
          }
        }
        `}
      </style>
    </section>
  );
}
