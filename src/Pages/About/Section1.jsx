import { useEffect } from "react";

export default function Section1({ setShowMineral }) {
  useEffect(() => {
    if (!setShowMineral) return;

    const onScroll = () => {
      // 🔑 show mineral after first 100px scroll
      if (window.scrollY > 100) {
        setShowMineral(true);
      } else {
        setShowMineral(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setShowMineral]);

  return (
    <section
      style={{
        width: "100%",
        minHeight: "600px",
        background:
          "linear-gradient(180deg, #1e1f23 0%, #2a2b30 50%, #3a3b40 100%)",
        color: "#f4f1e8",
        padding: "120px 32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "720px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "BankGothic, sans-serif",
            fontSize: "36px",
            letterSpacing: "4px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          PURE &amp; PURPOSEFUL
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#d6d2c8",
          }}
        >
          At Tanujasreekesh Mines &amp; Minerals, we transform nature’s most
          enduring resource—quartz—into a foundation for tomorrow’s
          innovations. From raw stone to refined brilliance, our journey is
          built on integrity, precision and purpose.
        </p>
      </div>
    </section>
  );
}
