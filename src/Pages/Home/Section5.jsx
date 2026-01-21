import { useEffect, useState } from "react";
import ContactBg from "../../assets/ContactBg.png";

export default function Section5() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 ADDED: form state (logic only)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    source_form: "section5",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹  submit logic 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) throw new Error();

      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        source_form: "section5",
      });
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        {/* LEFT TEXT */}
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

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: isMobile ? "0px" : "32px",
            borderRadius: "12px",
            display: "grid",
            gap: "16px",
            color: "#000",
          }}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            style={inputStyle}
            required
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "12px",
            }}
          >
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              style={inputStyle}
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number *"
              style={inputStyle}
              required
            />
          </div>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            style={inputStyle}
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "#1e1e1e",
              padding: "32px",
              borderRadius: "10px",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontFamily: "oswaldRegular",
                marginBottom: "12px",
                color: "#eeedd3",
              }}
            >
              Thank you!
            </h2>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#cfcfcf",
                marginBottom: "24px",
              }}
            >
              Your enquiry has been successfully submitted.
              <br />
              Our team will get back to you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                padding: "12px",
                width: "100%",
                background: "#2d2d2d",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
