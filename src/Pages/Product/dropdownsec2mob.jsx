import React from "react";
import dropdownmin from "../../assets/dropdownmin.png";
import { SIZE_DATA, COLORS } from "./sec2data";

const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "10px",
  fontFamily: "montsbold",
  fontSize: "11px",
  boxSizing: "border-box",
});

export default function Section2DropdownMobile({
  open,
  activeSize,
  setActiveSize,
}) {
  const sizeKeys = Object.keys(SIZE_DATA);
  const activeIndex = sizeKeys.indexOf(activeSize);
  const current = SIZE_DATA[activeSize];

  const goPrev = () =>
    activeIndex > 0 && setActiveSize(sizeKeys[activeIndex - 1]);

  const goNext = () =>
    activeIndex < sizeKeys.length - 1 &&
    setActiveSize(sizeKeys[activeIndex + 1]);

  return (
    <div
      className="mobile-dropdown"
      style={{
        maxHeight: open ? "3000px" : "0",
        overflow: "hidden",
        transition: "max-height 0.6s ease",
        backgroundColor: "#3b3b3b",
        padding: open ? "16px 12px" : "0 12px",
      }}
    >
      {/* TITLE */}
      <h3 className="monts-bold"
        style={{
          color: "#f2e7d1",
          textAlign: "center",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        Premium Quartz Grits
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
          src={dropdownmin}
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32px 1fr 32px",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <button onClick={goPrev} disabled={activeIndex === 0}>◀</button>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", color: "#bbb" }}>Product Size</div>
          <div style={{ fontSize: "16px", color: "#fff" }}>
            {current.label}
          </div>
        </div>

        <button onClick={goNext} disabled={activeIndex === sizeKeys.length - 1}>▶</button>
      </div>

      {/* TABLE */}
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
          <div style={headerCell(COLORS.header1)}>Parameter</div>
          <div style={headerCell(COLORS.header2)}>Specs</div>
          <div style={headerCell(COLORS.header3)}>Testing</div>
        </div>

        {/* ROWS */}
        {current.rows.map((row, i) => {
          const isEven = i % 2 === 0;

          const cellBase = {
            padding: "10px",
            fontSize: "11px",
            boxSizing: "border-box",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
            whiteSpace: "pre-line",
          };

          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "44% 28% 28%",
              }}
            >
              {/* PARAMETER */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                }}
              >
                <div
                  style={{
                    ...cellBase,
                    backgroundColor: isEven
                      ? COLORS.paramMainEven
                      : COLORS.paramMainOdd,
                  }}
                >
                  {row[0]}
                </div>

                <div
                  style={{
                    ...cellBase,
                    backgroundColor: isEven
                      ? COLORS.paramSubEven
                      : COLORS.paramSubOdd,
                  }}
                >
                  {row[1]}
                </div>
              </div>

              {/* SPECS */}
              <div
                style={{
                  ...cellBase,
                  backgroundColor: isEven
                    ? COLORS.paramMainEven
                    : COLORS.paramMainOdd,
                }}
              >
                {row[2]}
              </div>

              {/* TESTING */}
              <div
                style={{
                  ...cellBase,
                  backgroundColor: isEven
                    ? COLORS.paramMainEven
                    : COLORS.paramMainOdd,
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

