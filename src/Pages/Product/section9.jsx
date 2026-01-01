import React from "react";

export default function Section9() {
  const items = [
    { title: "CERAMICS / PORCELAIN", col: 1, row: 1, span: 2 },
    { title: "GLASS MANUFACTURING", col: 2, row: 1, span: 1 },
    { title: "RUBBERS & PLASTICS", col: 3, row: 1, span: 2 },
    { title: "FOUNDRY", col: 4, row: 1, span: 1 },

    { title: "WATER FILTRATION", col: 1, row: 3, span: 1 },
    { title: "ENGINEERED STONE", col: 2, row: 2, span: 2 },
    { title: "CONSTRUCTION CHEMICALS", col: 3, row: 3, span: 1 },
    { title: "PAINTS & COATINGS", col: 4, row: 2, span: 2 },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#2b2b2b",
        padding: "100px 0",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto 60px",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          color: "#ffffff",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "14px", color: "#d6d6d6", marginBottom: "10px" }}>
            Precision-crafted quartz solutions for every industry need.
          </p>
          <h2 style={{ fontSize: "28px", letterSpacing: "2px", margin: 0 }}>
            INDUSTRIES SERVED / APPLICATIONS
          </h2>
        </div>

        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#cfcfcf" }}>
          Our quartz products support a wide range of industrial and manufacturing
          processes. Each material is formulated to deliver optimized performance
          based on the unique technical needs of the end-use sector.
        </p>
      </div>

      {/* GRID */}
      <div className="sec9-grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "140px",
          gap: "24px",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="sec9-card"
            style={{
              gridColumn: item.col,
              gridRow: `${item.row} / span ${item.span}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* IMAGE PLACEHOLDER */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#ffffff",
              }}
            />

            {/* CENTERED TEXT */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#ffffff",
                background: "rgba(0,0,0,0.35)",
                padding: "16px",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE STYLES */}
      <style>
        {`
          /* TABLET */
          @media (max-width: 1024px) {
            .sec9-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* MOBILE */
          @media (max-width: 640px) {
            section {
              padding: 80px 0 !important;
            }

            .sec9-grid {
              grid-template-columns: 1fr !important;
              grid-auto-rows: 220px !important;
            }

            .sec9-card {
              grid-column: auto !important;
              grid-row: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
}
