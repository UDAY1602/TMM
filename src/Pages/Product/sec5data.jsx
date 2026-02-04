import img_A_400 from "../../assets/Prod Quartz Filler/Premium (Grade A) - 400 Mesh.png";
import img_M_400 from "../../assets/Prod Quartz Filler/M Grade 400 Mesh Filler.png";
export const COLORS = {
  header1: "#83877b",
  header2: "#282926",
  header3: "#83877b",
  paramMainEven: "#F7F0E1",
  paramMainOdd: "#e7e5be",
  paramSubEven: "#e4e2ac",
  paramSubOdd: "#d6d392",
  textMuted: "#666",
};

export const TABS = {
  premium: {
    label: "A - Premium",
    image:img_A_400,
    imageText: "A-Premium Quartz Filler\n400 Mesh (38µm)",
    rows: [
      [
        "Particle Size Distribution",
        "45(µm)(%)",
        "1.0 Max",
        "ASTM(Test Sieve)",
      ],
      [
        "Whiteness('M'-supreme)",
        "L Value\na'Value\nb'Value",
        "97.80Min.\n0.08 Max\n0.30 Max",
        "Spectrophotometer\n600d\n(Make:Konica Minolta)",
      ],
      [
        "Humidity",
        "Moisture (%)",
        "0.3 Max",
        "Moisture Balance\n(Make:Lab Man)",
      ],
    ],
  },

  supreme: {
    label: "M - Supreme",
    image:img_M_400,
    imageText: "M-Supreme Quartz Filler\n400 Mesh (38µm)",
    rows: [
      [
        "Particle Size Distribution",
        "45(µm)(%)",
        "1.0 Max",
        "ASTM(Test Sieve)",
      ],
      [
       "Whiteness('M'-supreme)",
        "L Value\na'Value\nb'Value",
        "97.00Min.\n0.15 Max\n0.30-0.70 Max",
        "Spectrophotometer\n600d\n(Make:Konica Minolta)",
      ],
      [
        "Humidity",
        "Moisture (%)",
        "0.3 Max",
        "Moisture Balance\n(Make:Lab Man)",
      ],
    ],
  },
};
