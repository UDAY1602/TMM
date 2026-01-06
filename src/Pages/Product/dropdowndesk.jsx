import React from "react";

/* ================= HEADER CELL ================= */
const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "16px",
  fontFamily: "montsbold",
  fontSize: "13px",
});

export default function DropdownDesk({
  open,
  activeSize,
  setActiveSize,
  title,
  sizeData,
  colors,
  imageSrc,
}) {
  const current = sizeData[activeSize];

  // split imageText into lines
  const imageLines = current.imageText.split("\n");

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

        {/* TITLE */}
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

        {/* SIZE TABS */}
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
                background: key === activeSize ? "#2a2a2a" : "transparent",
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

        {/* IMAGE + TABLE */}
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
            {/* IMAGE */}
            <div style={{ padding: "24px", textAlign: "center" }}>
              <img src={imageSrc} alt="" style={{ width: "100%" }} />

              {/* IMAGE TEXT (UPDATED TYPOGRAPHY) */}
              <div style={{ marginTop: "12px" }}>
                {/* Line 1: Product name */}
                <div
                  style={{
                    fontFamily: "oswaldRegular",
                    fontSize: "24px",
                    color: "#EEEDD3",
                  }}
                >
                  {imageLines[0]}
                </div>

                {/* Line 2: Size */}
                {imageLines[1] && (
                  <div
                    style={{
                      fontFamily: "montssemibold",
                      fontSize: "30px",
                      color: "#EEEDD3",
                      marginTop: "2px",
                    }}
                  >
                    {imageLines[1]}
                  </div>
                )}
              </div>
            </div>

            {/* TABLE */}
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
                  <div style={headerCell(colors.header1)}>
                    <span style={{ color: "#313131", fontSize: "20px" }}>
                      Parameter
                    </span>
                  </div>

                  <div style={headerCell(colors.header2)}>
                    <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                      Specification
                    </span>
                  </div>

                  <div style={headerCell(colors.header3)}>
                    <span style={{ color: "#313131", fontSize: "20px" }}>
                      Testing Method
                    </span>
                  </div>
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
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        <div
                          style={{
                            background: even
                              ? colors.paramMainEven
                              : colors.paramMainOdd,
                            fontFamily: "montsbold",
                            padding: "14px",
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

      </div>
    </div>
  );
}
