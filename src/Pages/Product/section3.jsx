import React, { useState } from "react";
import Sec3 from "../../assets/Sec3.png";
import "../Product/sec3.css";
import dropdownmin from "../../assets/dropdownmin.png";
import DropdownDesk from "./dropdowndesk";
import DropdownMobile from "./dropdownmob";
import { SIZE_DATA, COLORS } from "./sec3data";

export default function Section3() {
  const [open, setOpen] = useState(false);
  const [activeSize, setActiveSize] = useState("0.1-0.4");

  return (
    <section className="section3-quartz">
      
      <div className="quartzOuter">
        <div className="quartzInner">

      
          <div className="quartzTextBox">
            <p className="tagline">
              High-purity powder ideal for composite materials,
              coatings, and industrial formulations.
            </p>

            <h2 className="title">
              Quartz Grits – Supreme
            </h2>

            <p className="size">
              0.1 – 0.4 mm
            </p>

            <p className="description">
              High-purity quartz grits with tight granulometry and superior
              whiteness, designed for applications demanding maximum
              strength, surface finish, and visual consistency.
            </p>

            
            <button
              className="monts-semibold"
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                marginTop: "12px",
              }}
            >
              Product Details{" "}
              <span style={{ fontSize: "10px" }}>
                {open ? "▲" : "▼"}
              </span>
            </button>
          </div>

         
          <div className="quartzImageWrap">
            <div className="quartzImageBox">
              <img src={Sec3} alt="Quartz Grits Supreme" />
            </div>
          </div>

        </div>
      </div>

      
      <div className="desktop-dropdown">
        <DropdownDesk
          open={open}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          sizeData={SIZE_DATA}
          colors={COLORS}
          title="Quartz Grits – Supreme Product Size"
          imageSrc={dropdownmin}
        />
      </div>

   
      <div className="mobile-dropdown">
        <DropdownMobile
          open={open}
          title="Quartz Grits – Supreme Product Size"
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

         
          .section3-quartz {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

         
          .section3-quartz .quartzInner {
            display: flex !important;
            flex-direction: column !important;
            background: #EDE4CF !important;
            padding: 0 !important;
          }

        
          .section3-quartz .quartzTextBox {
            padding: 30px 20px 20px !important;
          }

          .section3-quartz .quartzImageWrap {
            display: flex !important;
            justify-content: center !important;
            padding: 0 20px 30px !important;
            background: transparent !important;
          }

          .section3-quartz .quartzImageBox img {
            background: #ffffff !important;
            padding: 24px !important;
            border-radius: 4px;
            max-width: 320px !important;
            width: 100% !important;
            height: auto !important;
          }
        }
        `}
      </style>
    </section>
  );
}
