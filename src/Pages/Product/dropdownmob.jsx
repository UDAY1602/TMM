import React from "react";

/* ================= HEADER CELL ================= */
const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "10px",
  fontFamily: "montsbold",
  fontSize: "11px",
  boxSizing: "border-box",
});

/* ================= REUSABLE MOBILE DROPDOWN ================= */
export default function DropdownMobile({
  open,
  title,
  data,            // SAME data as desktop
  colors,
  imageSrc,
  activeKey,
  setActiveKey,
  showArrows = true,
}) {
  if (!data || !activeKey) return null;

  const keys = Object.keys(data);
  const index = keys.indexOf(activeKey);
  const current = data[activeKey];

  const goPrev = () =>
    index > 0 && setActiveKey(keys[index - 1]);

  const goNext = () =>
    index < keys.length - 1 && setActiveKey(keys[index + 1]);

  return (
    <div
      style={{
        maxHeight: open ? "3000px" : "0",
        overflow: "hidden",
        transition: "max-height 0.6s ease",
        backgroundColor: "#3b3b3b",
        padding: open ? "16px 12px" : "0 12px",
      }}
    >
      {/* TITLE */}
      <h3
        className="monts-bold"
        style={{
          color: "#f2e7d1",
          textAlign: "center",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      {/* IMAGE */}
      <div
        style={{
          backgroundColor: "#2a2a2a",
          padding: "14px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          style={{
            width: "100%",
            maxWidth: "220px",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>

      {/* SIZE NAV */}
      {showArrows && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "32px 1fr 32px",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <button onClick={goPrev} disabled={index === 0}>◀</button>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#EEEDD3" ,fontFamily: "oswaldRegular"}}>
              Product Size
            </div>
            <div style={{ fontSize: "16px", color: "#EEEDD3" ,fontFamily: "montssemibold"}}>
              {current.label}
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={index === keys.length - 1}
          >
            ▶
          </button>
        </div>
      )}

      {/* ================= TABLE ================= */}
      <div
        style={{
          backgroundColor: "#313131",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "44% 28% 28%",
          }}
        >
          <div style={headerCell(colors.header1)}>
            <span style={{ color: "#313131", fontSize: "10px" }}>Parameter</span>
          </div>

          <div style={headerCell(colors.header2)}>
            <span style={{ color: "#FFFFFF", fontSize: "10px" }}>Specification</span>
          </div>

          <div style={headerCell(colors.header3)}>
            <span style={{ color: "#313131", fontSize: "10px" }}>Testing Method</span>
          </div>
        </div>

        {/* ROWS */}
        {current.rows.map((row, i) => {
          const even = i % 2 === 0;

          const cellBase = {
            padding: "10px",
            fontSize: "11px",
            whiteSpace: "pre-line",
            wordBreak: "break-word",
          };

          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "44% 28% 28%",
              }}
            >
              {/* PARAMETER (MAIN + SUB) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                }}
              >
                {/* ✅ MAIN PARAMETER — BOLD */}
                <div
                  style={{
                    ...cellBase,
                    fontFamily: "montsbold",
                    backgroundColor: even
                      ? colors.paramMainEven
                      : colors.paramMainOdd,
                  }}
                >
                  {row[0]}
                </div>

                {/* SUB PARAMETER — NORMAL */}
                <div
                  style={{
                    ...cellBase,
                    backgroundColor: even
                      ? colors.paramSubEven
                      : colors.paramSubOdd,
                  }}
                >
                  {row[1]}
                </div>
              </div>

              {/* SPEC */}
              <div
                style={{
                  ...cellBase,
                  backgroundColor: even
                    ? colors.paramMainEven
                    : colors.paramMainOdd,
                }}
              >
                {row[2]}
              </div>

              {/* TESTING */}
              <div
                style={{
                  ...cellBase,
                  backgroundColor: even
                    ? colors.paramMainEven
                    : colors.paramMainOdd,
                }}
              >
                {row[3]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
