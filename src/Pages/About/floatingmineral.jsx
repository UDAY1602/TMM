import mineral from "../../assets/Mineral.png";

export default function FloatingMineral({ visible }) {
  return (
    <>
      <div
        className="floating-mineral"
        style={{
          position: "absolute",
          left: "50%",
          transform: visible
            ? "translateX(-50%) scale(1)"
            : "translateX(-50%) translateY(60px) scale(0.95)",
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
            height: "380px",
            objectFit: "contain",
          }}
        />
      </div>
      <style>
        {`
        
          .floating-mineral {
            bottom: -130px;
          }

          @media (max-width: 768px) {
            .floating-mineral {
              bottom: -160px;  
            }

            .floating-mineral img {
              height: 270px;   
            }
          }
        `}
      </style>
    </>
  );
}
