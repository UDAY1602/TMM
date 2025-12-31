import React, { useState } from "react";
import prodsec2mineral from "../../assets/prodsec2mineral.png";
import Section2Dropdown from "./dropdownsec2";

export default function Section2() {
  const [open, setOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 0",
        width: "100%",
      }}
    >
      {/* ================= ORIGINAL SECTION 2 ================= */}
      <div
        style={{
          maxWidth: "1550px",
          marginLeft: "0",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <div
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

        <div style={{ backgroundColor: "#ffffff", width: "100%" }}>
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
            {/* LEFT BLOCK */}
            <div style={{ backgroundColor: "#EDE4CF" }} />

            {/* IMAGE */}
            <div
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

            {/* CONTENT */}
            <div
              style={{
                backgroundColor: "#EDE4CF",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  maxWidth: "520px",
                  padding: "40px",
                  margin: "0 auto",
                }}
              >
                <p
                  style={{
                    fontFamily:"monts-semibold",
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

                {/* TOGGLE BUTTON */}
                <button
                  onClick={() => setOpen(!open)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "monts-med",
                    cursor: "pointer",
                    textAlign: "left",
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

      {/* ================= DROPDOWN (SEPARATE FILE) ================= */}
      <Section2Dropdown open={open} />

      {/* ================= MOBILE STYLES ================= */}
      <style>
        {`
          @media (max-width: 768px) {

            .sec2-grid {
              grid-template-columns: 1fr !important;
              width: 100% !important;
              margin-left: 0 !important;
            }

            .sec2-grid img {
              height: 200px !important;
              margin: 0 auto;
            }

            .oswold-reg {
              font-size: 28px !important;
              letter-spacing: 4px !important;
            }

            .size-tabs {
              overflow-x: auto;
              white-space: nowrap;
              justify-content: flex-start !important;
              gap: 16px !important;
              padding-bottom: 10px;
            }

            .size-tabs button {
              font-size: 13px !important;
              padding: 8px 14px !important;
              flex-shrink: 0;
            }
          }
        `}
      </style>
    </section>
  );
}
