import { useEffect, useState } from "react";
import ContactBg from "../../assets/ContactBg.png";                                                 

export default function Section5() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: "auto",
        padding: isMobile ? "60px 20px" : "80px 32px",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
          url(${ContactBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          color: "#fff",
          paddingTop: isMobile ? "20px" : "60px",
        }}
      >
  
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <h1
            style={{
              fontSize: isMobile ? "36px" : "48px",
              marginBottom: "16px",
              color: "#eeedd3",
              fontFamily: "Oswald",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.6",
              color: "#dcdcdc",
            }}
          >
            Get reliable, high-purity quartz.
            <br />
            Speak to us now.
          </p>
        </div>
        <form
          style={{
            padding: isMobile ? "0px" : "32px",
            borderRadius: "12px",
            display: "grid",
            gap: "16px",
            color: "#000",
          }}
        >
          <input placeholder="Name *" style={inputStyle} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "12px",
            }}
          >
            <input placeholder="Email *" style={inputStyle} />
            <input placeholder="Contact Number *" style={inputStyle} />
          </div>

          <input placeholder="Subject *" style={inputStyle} />
          <textarea placeholder="Message" rows="4" style={inputStyle} />
          <button style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  background: "rgba(216,212,212,0.6)",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "12px",
  background: "#2d2d2d",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
