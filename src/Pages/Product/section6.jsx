import React from "react";
import prodsec2mineral from "../../assets/s6s8mineral.png";

export default function Section6() {
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
      {/* ================= SECTION 6 LAYOUT ================= */}
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
                alt="Quartz Lumps"
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
                  style={{ fontSize: "28px", marginBottom: "12px",fontFamily: "bankgoB" }}
                >
                  Quartz Lumps
                </h3>

                <p className="bankgothicbold"
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  Semi glassy quartz / Glassy / Milky / Granular /
                  Semi granular / Crystal / Mica / Honey / Rose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE — SECTION 6 ONLY ================= */}
      <style>
  {`
    @media (max-width: 768px) {
      .section6-quartz {
        padding-left: 0;
        padding-right: 0;
      }

      .section6-quartz .sec2-wrapper {
        padding-left: 0;
        padding-right: 0;
        max-width: 100%;
      }

      .section6-quartz .sec2-grid {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 0;
        background: #EDE4CF;
      }

      .section6-quartz .sec2-content {
        order: 1;
        background: transparent;
        width: 100%;
      }

      .section6-quartz .sec2-text {
        max-width: 100%;
        padding: 30px 20px 20px;
        text-align: left;
      }

      .section6-quartz .sec2-image {
        order: 2;
        background: transparent;
        padding: 0 20px 30px;
        justify-content: center;
      }

      .section6-quartz .sec2-image img {
        background: #ffffff;
        padding: 22px;
        border-radius: 4px;
        height: 260px;
        max-width: 320px;
        width: 100%;
      }
    }
  `}
</style>

    </section>
  );
}
