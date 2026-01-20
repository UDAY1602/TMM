import React, { useState } from "react";
import prodsec2mineral from "../../assets/prodsec2mineral.png";
import DropdownDesk from "./dropdowndesk";
import DropdownMobile from "./dropdownmob";
import dropdownmin from "../../assets/dropdownmin.png";
import { SIZE_DATA, COLORS } from "./sec4data";

export default function Section4() {
  const [open, setOpen] = useState(false);
  const [activeSize, setActiveSize] = useState("0.1-0.4");

  return (
    <section
      className="section4-quartz"
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
                alt="Quartz Grits"
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
                    fontSize: "18px",
                    marginBottom: "12px",
                  }}
                >
                  Engineered for engineered stone, glass, and ceramics with
                  controlled whiteness and purity.
                </p>

                <h3
                  className="bankgothiclightreg"
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                    letterSpacing: "2px",
                    fontFamily: "bankgoB",
                  }}
                >
                  Quartz Grits – Grade B
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "16px",
                    fontFamily: "bankgoB",
                  }}
                >
                  0.1 – 0.4 MM
                </p>

                <p
                  style={{
                    fontFamily: "MONSREG",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  Cost-effective quartz grits with reliable performance for
                  applications where functional strength matters more than
                  visual uniformity.
                </p>

               
                <button
                  className="monts-semibold"
                  onClick={() => setOpen(!open)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Product Details{" "}
                  <span style={{ fontSize: "10px" }}>
                    {open ? "▲" : "▼"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="desktop-dropdown">
        <DropdownDesk
          open={open}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          title="Quartz Grits – Grade B Product Size"
          sizeData={SIZE_DATA}
          colors={COLORS}
          imageSrc={dropdownmin}
        />
      </div>

      
      <div className="mobile-dropdown">
        <DropdownMobile
          open={open}
          title="Quartz Grits – Grade B Product Size"
          data={SIZE_DATA}
          colors={COLORS}
          imageSrc={dropdownmin}
          activeKey={activeSize}
          setActiveKey={setActiveSize}
          showArrows={true}
        />
      </div>

      
      <style>
        {`
        .mobile-dropdown { display: none; }
        .desktop-dropdown { display: block; }

        @media (max-width: 768px) {

          
          .desktop-dropdown { display: none; }
          .mobile-dropdown { display: block; }

         
          .section4-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .section4-quartz .sec2-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

         
          .section4-quartz .sec2-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            background: #EDE4CF !important;
          }

          
          .section4-quartz .sec2-content {
            order: 1 !important;
            background: transparent !important;
          }

          .section4-quartz .sec2-text {
            max-width: 100% !important;
            padding: 30px 20px 20px !important;
          }

          
          .section4-quartz .sec2-image {
            order: 2 !important;
            background: transparent !important;
            padding: 0 20px 30px !important;
            justify-content: center !important;
          }

          .section4-quartz .sec2-image img {
            background: #ffffff !important;
            padding: 24px !important;
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
