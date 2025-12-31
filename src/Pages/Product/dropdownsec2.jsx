import React, { useState } from "react";
import dropdownmin from "../../assets/dropdownmin.png";

const COLORS = {
  header1: "#83877b",
  header2: "#282926",
  header3: "#83877b",

  paramMainEven: "#F7F0E1",
  paramMainOdd: "#e7e5be",

  paramSubEven: "#e4e2ac",
  paramSubOdd: "#d6d392",

  textMuted: "#666",
};

const headerCell = (bg) => ({
  backgroundColor: bg,
  padding: "16px",
  fontFamily: "monts-med",
  fontSize: "13px",
  textTransform: "uppercase",
});

const SIZE_DATA = {
  "0.1-0.4": {
    label: "0.1 – 0.4 mm",
    imageText: "Premium Quartz Grits\n0.1 – 0.4 mm",
    rows: [
      [
        "Particle size Distribution",
        "+0.425mm(%)\n-0.106mm(%)",
        "6.0 Max\n6.0 Max",
        "Vibrating Sieve Shaker\nwith ASTM Test Sieve",
      ],
      [
        "Contamination Analysis",
        "Colour Impurity\nBlack Impurity",
        "-\n-",
        "Visual Inspection\nchecking in 500 grams",
      ],
      [
        "Humidity",
        "Moisture(%)",
        "0.03 Max",
        "Moisture Balance\n(Make: Lab Man)",
      ],
      [
        "Shade Analysis",
        "L\na\nb",
        "92.00 Min\n0.35 Max\n2.20 Max",
        "Spectrophotometer CM-600d\n(Make: Konica Minolta)",
      ],
    ],
  },

  "0.3-0.7": {
    label: "0.3 – 0.7 mm",
    imageText: "Premium Quartz Grits\n0.3 – 0.7 mm",
    rows: [
      [
        "Particle size Distribution",
        "+0.71mm(%)\n-0.30mm(%)",
        "8.0 Max\n8.0 Max",
        "Vibrating Sieve Shaker\nwith ASTM Test Sieve",
      ],
      [
        "Contamination Analysis",
        "Colour Impurity\nBlack Impurity",
        "-\n-",
        "Visual Inspection\nchecking in 500 grams",
      ],
      [
        "Humidity",
        "Moisture(%)",
        "0.03 Max",
        "Moisture Balance\n(Make: Lab Man)",
      ],
      [
        "Shade Analysis",
        "L\na\nb",
        "88.00 Min\n0.30 Max\n2.00 Max",
        "Spectrophotometer CM-600d\n(Make: Konica Minolta)",
      ],
    ],
  },

  "0.6-1.2": {
    label: "0.6 – 1.2 mm",
    imageText: "Premium Quartz Grits\n0.6 – 1.2 mm",
    rows: [
      [
        "Particle size Distribution",
        "+1.18mm(%)\n-0.60mm(%)",
        "8.0 Max\n8.0 Max",
        "Vibrating Sieve Shaker\nwith ASTM Test Sieve",
      ],
      [
        "Contamination Analysis",
        "Colour Impurity\nBlack Impurity",
        "-\n-",
        "Visual Inspection\nchecking in 500 grams",
      ],
      [
        "Humidity",
        "Moisture(%)",
        "0.03 Max",
        "Moisture Balance\n(Make: Lab Man)",
      ],
      [
        "Shade Analysis",
        "L\na\nb",
        "83.00 Min\n0.40 Max\n1.50 Max",
        "Spectrophotometer CM-600d\n(Make: Konica Minolta)",
      ],
    ],
  },

  "1.2-2.5": {
    label: "1.2 – 2.5 mm",
    imageText: "Premium Quartz Grits\n1.2 – 2.5 mm",
    rows: [
      [
        "Particle size Distribution",
        "+2.36mm(%)\n-1.18mm(%)",
        "10.0 Max\n10.0 Max",
        "Vibrating Sieve Shaker\nwith ASTM Test Sieve",
      ],
      [
        "Contamination Analysis",
        "Colour Impurity\nBlack Impurity",
        "5 Max\n5 Max",
        "Visual Inspection\nchecking in 500 grams",
      ],
      [
        "Humidity",
        "Moisture(%)",
        "0.03 Max",
        "Moisture Balance\n(Make: Lab Man)",
      ],
      [
        "Shade Analysis",
        "L\na\nb",
        "-\n-\n-",
        "Spectrophotometer CM-600d\n(Make: Konica Minolta)",
      ],
    ],
  },

  "2.5-4.0": {
    label: "2.5 – 4.0 mm",
    imageText: "Premium Quartz Grits\n2.5 – 4.0 mm",
    rows: [
      [
        "Particle size Distribution",
        "+4.00mm(%)\n-2.36mm(%)",
        "10.0 Max\n10.0 Max",
        "Vibrating Sieve Shaker\nwith ASTM Test Sieve",
      ],
      [
        "Contamination Analysis",
        "Colour Impurity\nBlack Impurity",
        "5 Max\n5 Max",
        "Visual Inspection\nchecking in 500 grams",
      ],
      [
        "Humidity",
        "Moisture(%)",
        "0.03 Max",
        "Moisture Balance\n(Make: Lab Man)",
      ],
      [
        "Shade Analysis",
        "L\na\nb",
        "-\n-\n-",
        "Spectrophotometer CM-600d\n(Make: Konica Minolta)",
      ],
    ],
  },
};

export default function Section2Dropdown({ open }) {
  const [activeSize, setActiveSize] = useState("0.1-0.4");
  const current = SIZE_DATA[activeSize];

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
        <h3
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "28px",
            letterSpacing:"7px",
            fontFamily: "monts-bold",
            fontSize: "22px",
          }}
        >
          Quartz Grits – Premium Product Size
        </h3>

        {/* SIZE TABS */}
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
      alignItems: "center",
      width: "100%",
      height: "100%",
    }}
  >
    {Object.keys(SIZE_DATA).map((key) => (
      <React.Fragment key={key}>
        {/* SIZE SEGMENT */}
        <button
          onClick={() => setActiveSize(key)}
          style={{
            flex: 1,                      // 🔥 THIS IS THE FIX
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              key === activeSize ? "#2a2a2a" : "transparent",
            border: "none",
            color: key === activeSize ? "#fff" : "#aaa",
            fontSize: "14px",
            fontFamily: "monts-semibold",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {SIZE_DATA[key].label}
        </button>

        {/* VERTICAL DIVIDER */}
        
      </React.Fragment>
    ))}
  </div>
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
            <div
              style={{
                padding: "24px",
                textAlign: "center",
              }}
            >
              <img src={dropdownmin} alt="" style={{ width: "100%" }} />
              <p
                style={{
                  color: "#e6e6e6",
                  fontSize: "13px",
                  fontFamily: "oswold-reg",
                  whiteSpace: "pre-line",
                }}
              >
                {current.imageText}
              </p>
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
                      {/* PARAMETER */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                        //   columnGap: "12px",
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
          </div>
        </div>
      </div>
    </div>
  );
}
