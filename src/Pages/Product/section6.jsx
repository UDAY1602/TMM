import React, { useState } from "react";
import prodsec2mineral from "../../assets/prodsec6min.png";
import quartzDetailsImg from "../../assets/Quartz Lumps/Quartz Lump - Products.png"; 

export default function Section6() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="section6-quartz"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0",
        width: "100%",
        overflowX: "hidden",
      }}
    >
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
            <div style={{ backgroundColor: "#edecd3" }} />

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
                alt="Quartz Lumps"
                style={{
                  height: "300px",
                  maxWidth: "none",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              className="sec2-content"
              style={{
                backgroundColor: "#edecd3",
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
                    fontFamily: "MONSMED",
                    fontSize: "16px",
                    marginBottom: "12px",
                  }}
                >
                  Naturally sourced and selectively processed lumps,
                  classified by clarity, texture, and mineral character
                </p>

                <h3
                  className="bankgothiclightreg"
                  style={{
                    fontSize: "28px",
                    marginBottom: "12px",
                    fontFamily: "bankgoB",
                  }}
                >
                  Quartz Lumps
                </h3>

                <p
                  className="bankgothicbold"
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  Semi glassy quartz / Glassy / Milky / Granular / Semi granular /
                  Crystal / Mica / Honey / Rose
                </p>

                <div
                  onClick={() => setOpen(!open)}
                  style={{
                    marginTop: "16px",
                    cursor: "pointer",
                    fontFamily: "MONSMED",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Product Details
                  <span
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s ease",
                      display: "inline-block",
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="section6-dropdown"
          style={{
            width: "100%",
            background: "#444242",   // ✅ changed here
            padding: "60px 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={quartzDetailsImg}
              alt="Quartz Types"
              style={{
                width: "100%",
                maxWidth: "950px",
                height: "auto",
                objectFit: "contain",
                background: "transparent",
                padding: "0",
                borderRadius: "0",
                transform: "scale(1.05)",
              }}
            />
          </div>
        </div>
      )}

      <style>
        {`
        @media (max-width: 768px) {

          .section6-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .section6-quartz .sec2-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          .section6-quartz .sec2-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            background: #EDE4CF !important;
          }

          .section6-quartz .sec2-content {
            order: 1 !important;
            background: transparent !important;
            width: 100% !important;
          }

          .section6-quartz .sec2-text {
            max-width: 100% !important;
            padding: 30px 20px 20px !important;
            text-align: left !important;
          }

          .section6-quartz .sec2-image {
            order: 2 !important;
            background: transparent !important;
            padding: 0 20px 30px !important;
            justify-content: center !important;
          }

          .section6-quartz .sec2-image img {
            background: #ffffff !important;
            padding: 22px !important;
            border-radius: 4px;
            height: 260px !important;
            max-width: 320px !important;
            width: 100% !important;
          }

          .section6-dropdown {
            padding: 40px 20px !important;
          }

          .section6-dropdown img {
            max-width: 100% !important;
            transform: scale(1.1) !important;
          }
        }
        `}
      </style>
    </section>
  );
}
