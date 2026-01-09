import React, { useState } from "react";

export default function Section12() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowPopup(true);
  };

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#1b1b1b",
        color: "#EEEDD3",
        padding: "100px 32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        
        <div
          style={{
            transform: "translateY(-20px)",
          }}
        >
          <h2
            className="monts-reg"
            style={{
              fontSize: "28px",
              fontWeight: "500",
              marginBottom: "24px",
              lineHeight: "1.3",
              color: "#EEEDD3",
            }}
          >
            Reach out today for product enquiries, <br />
            bulk orders, or technical conversations,
            <br />
            our team is here to assist.
          </h2>
        </div>

        
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input type="text" placeholder="Name *" style={inputStyle} required />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <input
              type="email"
              placeholder="Email *"
              style={inputStyle}
              required
            />
            <input
              type="tel"
              placeholder="Contact Number *"
              style={inputStyle}
              required
            />
          </div>

          <input type="text" placeholder="Subject" style={inputStyle} />

          <textarea
            placeholder="Message"
            rows="4"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "14px",
              backgroundColor: "#3a3a3a",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Submit
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
                fontFamily:"oswaldRegular",
                marginBottom: "12px",
                color: "#EEEDD3",
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
                background: "#3a3a3a",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 80px 20px !important;
            }

            section > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            h2 {
              font-size: 22px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 12px",
  backgroundColor: "#d8d4d4",
  border: "1px solid #b5b5b5",
  color: "#1a1a1a",
  fontSize: "14px",
  boxSizing: "border-box",
};
