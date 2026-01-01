import prodsec2mineral from "../../assets/prodsec2mineral.png";

export default function Section4() {
  return (
    <section
      className="section4-quartz"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* ================= SECTION 4 LAYOUT ================= */}
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
            {/* LEFT CREAM BAR — DESKTOP PRESERVED */}
            <div style={{ backgroundColor: "#EDE4CF" }} />

            {/* IMAGE — DESKTOP PRESERVED */}
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

            {/* CONTENT — DESKTOP PRESERVED */}
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
                  High-purity powder ideal for composite materials, coatings,
                  and industrial formulations.
                </p>

                <h3
                  className="bankgothiclightreg"
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                    letterSpacing: "2px",
                  }}
                >
                  QUARTZ GRITS – SUPREME
                </h3>

                <p
                  style={{
                    fontFamily: "bankgothicbold",
                    fontSize: "14px",
                    marginBottom: "16px",
                  }}
                >
                  0.1 – 0.4 MM
                </p>

                <p
                  style={{
                    fontFamily: "monts-reg",
                    fontSize: "12px",
                    lineHeight: "1.6",
                  }}
                >
                  High-purity quartz grits with tight granulometry and superior
                  whiteness, designed for applications demanding maximum
                  strength, surface finish, and visual consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE — SECTION 4 ONLY ================= */}
      <style>
        {`
        @media (max-width: 768px) {

          /* 🔑 REMOVE ALL OUTER GAPS */
          .section4-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .section4-quartz .sec2-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          /* FULL-WIDTH CREAM CONTAINER */
          .section4-quartz .sec2-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            background: #EDE4CF !important;
          }

          /* TEXT FIRST */
          .section4-quartz .sec2-content {
            order: 1 !important;
            background: transparent !important;
            width: 100% !important;
          }

          .section4-quartz .sec2-text {
            max-width: 100% !important;
            padding: 30px 20px 20px !important;
            text-align: left !important;
          }

          /* IMAGE WHITE CARD BELOW TEXT */
          .section4-quartz .sec2-image {
            order: 2 !important;
            background: transparent !important;
            padding: 0 20px 30px !important;
            justify-content: center !important;
          }

          .section4-quartz .sec2-image img {
            background: #ffffff !important;
            padding: 22px !important;
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
