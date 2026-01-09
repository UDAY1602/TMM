import mineral from "../../assets/productmineral.png";

export default function FloatingMineral({ visible }) {
  return (
    <>
      <div
        className="floating-mineral-prod"
        style={{
          position: "absolute",
          left: "80px",
          bottom: "-100px", 
          transform: visible
            ? "scale(1)"
            : "translateX(-60px) scale(0.95)",
          opacity: visible ? 1 : 0,
          transition:
            "opacity 0.6s ease, transform 1.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 30,
          pointerEvents: "none",
        }}
      >
        <img
          src={mineral}
          alt="Mineral"
          style={{
            height: "420px",
            objectFit: "contain",
          }}
        />
      </div>

      <style>
        {`
          /* 🔑 MOBILE: HIDE MINERAL COMPLETELY */
          @media (max-width: 768px) {
            .floating-mineral-prod {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
