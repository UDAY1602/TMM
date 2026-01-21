import { useEffect, useState } from "react";

export default function Section1({ setShowMineral }) {
  const heading = "PURE & PURPOSEFUL";
  const text =
    "At Tanujasreekesh Mines & Minerals, we transform nature’s most enduring resource—quartz—into a foundation for tomorrow’s innovations. From raw stone to refined brilliance, our journey is built on integrity, precision and purpose.";

  const [typedHeading, setTypedHeading] = useState("");
  const [typing, setTyping] = useState(false);

  
  // Scroll logic 
  useEffect(() => {
    if (!setShowMineral) return;

    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowMineral(true);
      } else {
        setShowMineral(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setShowMineral]);

  // Typing animation -- heading
  useEffect(() => {
    let i = 0;
    setTyping(true);

    const interval = setInterval(() => {
      if (i < heading.length) {
        setTypedHeading(heading.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        minHeight: "600px",
        background:
          "linear-gradient(to right,#151615 , #0A0C0B,#1E1E1E, #1E1E1E)",
        color: "#f4f1e8",
        padding: "120px 32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          textAlign: "center",
          display: "grid",
        }}
      >
        {/* Invisible layout stabilizer */}
        <div style={{ visibility: "hidden", gridArea: "1 / 1" }}>
          <h2
            style={{
              fontFamily: "BankGothic, sans-serif",
              fontSize: "36px",
              letterSpacing: "4px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {heading}
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {text}
          </p>
        </div>

        {/* Visible content */}
        <div style={{ gridArea: "1 / 1" }}>
          <h2
            style={{
              fontFamily: "BankGothic, sans-serif",
              fontSize: "36px",
              letterSpacing: "4px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {typedHeading}
            {typing && "|"}
          </h2>

          {/* Paragraph style */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#d6d2c8",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
