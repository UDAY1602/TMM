import React, { useState } from "react";
import prodsec2mineral from "../../assets/prodsec2mineral.png";
import dropdownmin from "../../assets/dropdownmin.png";

import DropdownDesk from "./dropdowndesk";
import DropdownMobile from "./dropdownmob";
import { SIZE_DATA, COLORS } from "./sec2data";

export default function Section2() {
  const [open, setOpen] = useState(false);
  const [activeSize, setActiveSize] = useState("0.1-0.4");

  return (
    <section
      className="section2-quartz"
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
       
        <div
          className="sec2-title"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "40px",
            paddingLeft: "180px",
          }}
        >
          <h2
            className="oswold-reg"
            style={{
              color: "#222",
              letterSpacing: "10px",
              fontSize: "48px",
            }}
          >
            PRODUCT CATEGORIES
          </h2>
        </div>

  
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
         
            <div style={{ backgroundColor: "#EDE4CF" }} />

           
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
                backgroundColor: "#EDE4CF",
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
                    fontSize: "29px",
                    marginBottom: "12px",
                    fontFamily: "bankgoB",
                  }}
                >
                  Quartz Grits – Premium
                </h3>

                <p
                  style={{
                    fontFamily: "bankgoB",
                    fontSize: "18px",
                    marginBottom: "16px",
                  }}
                >
                  0.1 – 4.0 MM
                </p>

                <p
                  style={{
                    fontFamily: "MONSREG",
                    fontSize: "14px",
                    marginBottom: "16px",
                    color: "#313131",
                  }}
                >
                  Optimized quartz grits offering excellent strength, clarity and
                  processing efficiency—ideal for high-performance industrial
                  and architectural uses.
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
          title="Quartz Grits – Premium Product Size"
          sizeData={SIZE_DATA}
          colors={COLORS}
          imageSrc={dropdownmin}
        />
      </div>

     
      <div className="mobile-dropdown">
        <DropdownMobile
          open={open}
          title="Quartz Grits – Premium Product Size"
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

      .section2-quartz {
        padding-left: 0 ;
        padding-right: 0 ;
        overflow: hidden ;
      }

      .section2-quartz .sec2-wrapper {
        padding-left: 0 ;
        padding-right: 0 ;
        max-width: 100% ;
      }

      .section2-quartz .sec2-title {
        background: #EDE4CF;
        padding: 24px 20px 16px ;
        margin-bottom: 0 ;
        justify-content: center ;
      }

      .section2-quartz .sec2-grid {
        display: flex ;
        flex-direction: column;
        width: 100% ;
        margin-left: 0 ;
        background: #EDE4CF ;
      }

      .section2-quartz .sec2-content {
        order: 1 ;
        background: transparent ;
      }

      .section2-quartz .sec2-text {
        max-width: 100% ;
        padding: 30px 20px 20px ;
      }

      .section2-quartz .sec2-image {
        order: 2 !important;
        background: transparent ;
        padding: 0 20px 30px ;
        justify-content: center ;
      }

      .section2-quartz .sec2-image img {
        background: #ffffff ;
        padding: 24px ;
        border-radius: 4px;
        height: 260px ;
        max-width: 320px ;
        width: 100% ;
      }
    }
  `}
</style>

    </section>
  );
}
