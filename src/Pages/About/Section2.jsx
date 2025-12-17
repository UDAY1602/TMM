import indiaMap from "../../assets/india-map.png";
import section2Bg from "../../assets/section2bg.png";

export default function Section2() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "700px",
        backgroundImage: `url(${section2Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 32px",
        color: "#f4f1e8",
        position: "relative",
      }}
    >
      {/* CONTENT WRAPPER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* INDIA MAP */}
        <img
          src={indiaMap}
          alt="India map"
          style={{
            width: "100%",
            maxWidth: "380px",
            opacity: "0.8",
          }}
        />

        {/* TEXT CONTENT */}
        <div>
          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "28px",
              lineHeight: "1.3",
              marginBottom: "20px",
              color: "#f4f1e8",
            }}
          >
            Leading manufacturer of Quartz Grits, Quartz Powder and Industrial
            Fillers | India
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#d6d2c8",
            }}
          >
            In the mineral-rich landscapes of Andhra Pradesh—one of India’s most
            renowned hubs for high-purity quartz—our story takes shape. From this
            region, where geology and craftsmanship meet, Tanujasreekesh has
            grown into a trusted name in engineered-grade quartz.
            <br />
            <br />
            Rooted in Andhra Pradesh, India yet oriented toward the world, we
            combine regional strengths with modern engineering to produce quartz
            materials that meet the strict demands of today’s industries.
          </p>
        </div>
      </div>

      {/* MOBILE RESPONSIVENESS */}
      <style>
        {`
          @media (max-width: 768px) {
            section > div {
              grid-template-columns: 1fr !important;
              text-align: center;
            }

            section img {
              max-width: 220px !important;
              margin: 0 auto;
              opacity: 0.35;
            }
          }
        `}
      </style>
    </section>
  );
}
