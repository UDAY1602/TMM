import React from "react";

/* ================= HEADER CELL STYLE ================= */
const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "16px",
  fontFamily: "montsbold",
  fontSize: "13px",
});

/* ================= REUSABLE DESKTOP DROPDOWN ================= */
export default function DropdownDesk({
  open,
  activeSize,
  setActiveSize,

  /* dynamic props */
  title,          // string
  sizeData,       // SIZE_DATA object
  colors,         // COLORS object
  imageSrc,       // image path
}) {
  const current = sizeData[activeSize];

  return (
    <div
      style={{
        maxHeight: open ? "1400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.6s ease",
        backgroundColor: "#444242",
      }}
    >
      <div style={{ padding: "80px 32px" }}>

        {/* ================= TITLE ================= */}
        <h3
          className="monts-bold"
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "28px",
            letterSpacing: "5px",
            fontSize: "28px",
          }}
        >
          {title}
        </h3>

        {/* ================= SIZE TABS ================= */}
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto 32px",
            border: "1px solid rgba(255,255,255,0.08)",
            height: "49px",
            display: "flex",
          }}
        >
          {Object.keys(sizeData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSize(key)}
              className="monts-semibold"
              style={{
                flex: 1,
                background:
                  key === activeSize ? "#2a2a2a" : "transparent",
                border: "none",
                color: key === activeSize ? "#fff" : "#aaa",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {sizeData[key].label}
            </button>
          ))}
        </div>

        {/* ================= IMAGE + TABLE ================= */}
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            backgroundColor: "#313131",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
            }}
          >
            {/* IMAGE COLUMN */}
            <div style={{ padding: "24px", textAlign: "center" }}>
              <img src={imageSrc} alt="" style={{ width: "100%" }} />

              <p
                style={{
                  color: "#e6e6e6",
                  fontSize: "13px",
                  fontFamily: "oswold-reg",
                  whiteSpace: "pre-line",
                  marginTop: "12px",
                }}
              >
                {current.imageText}
              </p>
            </div>

            {/* ================= TABLE ================= */}
            <div style={{ padding: "24px 0" }}>
              <div
                style={{
                  margin: "0 24px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* HEADER */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1.2fr",
                    columnGap: "16px",
                  }}
                >
                  <div style={headerCell(colors.header1)}>Parameter</div>
                  <div style={headerCell(colors.header2)}>Specification</div>
                  <div style={headerCell(colors.header3)}>Testing Method</div>
                </div>

                {/* ROWS */}
                {current.rows.map((row, i) => {
                  const even = i % 2 === 0;

                  return (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1.2fr",
                        columnGap: "16px",
                      }}
                    >
                      {/* PARAMETER */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <div
                          style={{
                            background: even
                              ? colors.paramMainEven
                              : colors.paramMainOdd,
                            padding: "16px",
                          }}
                        >
                          {row[0]}
                        </div>

                        <div
                          style={{
                            background: even
                              ? colors.paramSubEven
                              : colors.paramSubOdd,
                            padding: "16px",
                            whiteSpace: "pre-line",
                            color: colors.textMuted,
                          }}
                        >
                          {row[1]}
                        </div>
                      </div>

                      {/* SPEC */}
                      <div
                        style={{
                          background: even
                            ? colors.paramMainEven
                            : colors.paramMainOdd,
                          padding: "16px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {row[2]}
                      </div>

                      {/* METHOD */}
                      <div
                        style={{
                          background: even
                            ? colors.paramMainEven
                            : colors.paramMainOdd,
                          padding: "16px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {row[3]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ================= END ================= */}
      </div>
    </div>
  );
}
