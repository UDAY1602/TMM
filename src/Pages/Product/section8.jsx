import React from "react";
import prodsec2mineral from "../../assets/s6s8mineral.png";

export default function Section8() {
  return (
    <section
      className="section8-quartz"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0",   
        width: "100%",
        overflowX: "hidden",
      }}
    >
    
      <div
        className="sec2-wrapper"
        style={{
          maxWidth: "1550px",
          marginLeft: "0",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            className="sec2-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.4fr 0fr 1.4fr",
              minHeight: "360px",
              alignItems: "stretch",
              width: "100vw",
              marginLeft: "-32px",
            }}
          >
            
            <div style={{ backgroundColor: "#edecd3" }} />

           
            <div
              className="sec2-image"
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "40px",
                paddingLeft: "80px",
              }}
            >
              <img
                src={prodsec2mineral}
                alt="Quartz By-Products"
                style={{
                  height: "300px",
                  maxWidth: "none",
                  objectFit: "contain",
                }}
              />
            </div>

           
            <div
              className="sec2-content"
              style={{
                backgroundColor: "#edecd3",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="sec2-text"
                style={{
                  maxWidth: "520px",
                  padding: "40px",
                  margin: "0 auto",
                }}
              >
                <p
                  style={{
                    fontFamily: "MONSMED",
                    fontSize: "16px",
                    marginBottom: "12px",
                  }}
                >
                  Efficiently recovered quartz materials generated
                  during processing, offering sustainable and
                  economical solutions without compromising
                  functional performance.
                </p>

                <h3
                  className="bankgothiclightreg"
                  style={{ fontSize: "24px", marginBottom: "12px" ,fontFamily: "bankgoB"}}
                >
                  Quartz By-Products
                </h3>

                <p
                  style={{
                    fontFamily: "bankgoB",
                    fontSize: "18px",
                    marginBottom: "16px",
                  }}
                >
                  Grits / Powder
                </p>

                <p
                  style={{
                    fontFamily: "MONSREG",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Suitable for construction fill, road works,
                  secondary processing, and industrial reuse,
                  supporting circular material use and cost
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <style>
        {`
        @media (max-width: 768px) {

          .section8-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .section8-quartz .sec2-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          
          .section8-quartz .sec2-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            background: #EDE4CF !important;
          }

          
          .section8-quartz .sec2-content {
            order: 1 !important;
            background: transparent !important;
            width: 100% !important;
          }

          .section8-quartz .sec2-text {
            max-width: 100% !important;
            padding: 30px 20px 20px !important;
            text-align: left !important;
          }

         
          .section8-quartz .sec2-image {
            order: 2 !important;
            background: transparent !important;
            padding: 0 20px 30px !important;
            justify-content: center !important;
          }

          .section8-quartz .sec2-image img {
            background: #ffffff !important;
            padding: 22px !important;
            border-radius: 4px;
            height: 260px !important;
            max-width: 320px !important;
            width: 100% !important;
          }
        }
        `}
      </style>
    </section>
  );
}
