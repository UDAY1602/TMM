import Logo from "../assets/TMM logo 1.png"; 

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#eeedd3",
        padding: "80px 32px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "80px",
        }}
      >
        {/* LOGO + DESCRIPTION */}
        <div>
          <img
            src={Logo}
            alt="Tanujasreekesh"
            style={{ height: "200px", marginBottom: "10px" ,marginLeft:"45px"}}
          />
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
            Tanujasreekesh is a trusted manufacturer and supplier of premium
            Quartz Grits, Quartz Powder, and Industrial Fillers for industrial
            and engineered-stone applications. With cutting-edge production
            capabilities and a strong commitment to quality, we support
            customers across ceramics, glass, construction chemicals, paints &
            coatings, polymers, foundry, and engineered stone industries.
          </p>
        </div>

        {/* ADDRESS */}
        <div style={{marginTop:"170px"}}>
          <h4 style={titleStyle}>Regd. Address</h4>
          <p style={textStyle}>
            Sy No: 440/Musunuru (V),<br />
            C.S Puram (M), Prakasam (DT),<br />
            Andhra Pradesh,<br />
            India – 523112
          </p>
        </div>

        {/* CONTACT */}
        <div style={{marginTop:"170px"}}>
          <h4 style={titleStyle}>Contact</h4>
          <p style={textStyle}>
             +91 961 235 5555<br />
             info@tanujasreekesh.com
          </p>
        </div>

        {/* QUICK LINKS */}
        <div style={{marginTop:"170px"}}>
          <h4 style={titleStyle}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li style={linkStyle}>About</li>
            <li style={linkStyle}>Quartz Grit</li>
            <li style={linkStyle}>Quartz Powder</li>
            <li style={linkStyle}>Quartz Fillers</li>
            <li style={linkStyle}>Industries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
  fontSize: "20px",
  marginBottom: "35px",
  fontWeight: "600",
};

const textStyle = {
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#555",
};

const linkStyle = {
  marginBottom: "8px",
  cursor: "pointer",
  color: "#333",
};

