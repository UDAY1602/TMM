import React from "react";
import dropdownmin from "../../assets/dropdownmin.png";
import { SIZE_DATA, COLORS } from "./sec2data";

/* ================= HEADER CELL STYLE ================= */
const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "16px",
  fontFamily: "montsbold",
  fontSize: "13px",
});

/* ================= COMPONENT ================= */
export default function Section2Dropdown({
  open,
  activeSize,
  setActiveSize,
}) {
  const current = SIZE_DATA[activeSize];

  return (
    <div
      className="desktop-dropdown"
      style={{
        maxHeight: open ? "1400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.6s ease",
        backgroundColor: "#444242",
      }}
    >
      <div style={{ padding: "80px 32px" }}>
        {/* TITLE */}
        <h3 className="monts-bold"
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "28px",
            letterSpacing: "5px",
            fontSize: "28px",
          }}
        >
          Quartz Grits – Premium Product Size
        </h3>

        {/* ================= SIZE TABS ================= */}
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto 32px auto",
            border: "1px solid rgba(255,255,255,0.08)",
            height: "49px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            {Object.keys(SIZE_DATA).map((key) => (
              <button className="monts-semibold"
                key={key}
                onClick={() => setActiveSize(key)}
                style={{
                  flex: 1,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    key === activeSize ? "#2a2a2a" : "transparent",
                  border: "none",
                  color: key === activeSize ? "#fff" : "#aaa",
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {SIZE_DATA[key].label}
              </button>
            ))}
          </div>
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
            <div
              style={{
                padding: "24px",
                textAlign: "center",
              }}
            >
              <img
                src={dropdownmin}
                alt="Quartz Grits"
                style={{ width: "100%" }}
              />
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
                  <div style={headerCell(COLORS.header1)}>Parameter</div>
                  <div style={headerCell(COLORS.header2)}>Specification</div>
                  <div style={headerCell(COLORS.header3)}>Testing Method</div>
                </div>

                {/* ROWS */}
                {current.rows.map((row, i) => {
                  const isEven = i % 2 === 0;

                  return (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1.2fr",
                        columnGap: "16px",
                      }}
                    >
                      {/* PARAMETER (2 SUB COLUMNS) */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: isEven
                              ? COLORS.paramMainEven
                              : COLORS.paramMainOdd,
                            padding: "16px",
                          }}
                        >
                          {row[0]}
                        </div>

                        <div
                          style={{
                            backgroundColor: isEven
                              ? COLORS.paramSubEven
                              : COLORS.paramSubOdd,
                            padding: "16px",
                            color: COLORS.textMuted,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {row[1]}
                        </div>
                      </div>

                      {/* SPECIFICATION */}
                      <div
                        style={{
                          backgroundColor: isEven
                            ? COLORS.paramMainEven
                            : COLORS.paramMainOdd,
                          padding: "16px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {row[2]}
                      </div>

                      {/* TESTING METHOD */}
                      <div
                        style={{
                          backgroundColor: isEven
                            ? COLORS.paramMainEven
                            : COLORS.paramMainOdd,
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
            {/* ================= END TABLE ================= */}
          </div>
        </div>
      </div>
    </div>
  );
}
