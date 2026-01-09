import React, { useState } from "react";
import Sec5Img from "../../assets/pr filler.png";
import "../Product/sec5.css";

import DropdownDesk from "./dropdowndesk";
import DropdownMobile from "./dropdownmob";
import { TABS, COLORS } from "./sec5data";

export default function Section5() {
  const [open, setOpen] = useState(false);
  const [activeSize, setActiveSize] = useState("premium"); 

  return (
    <>
      {/* ================= SECTION 5 LAYOUT ================= */}
      <div className="quartzOuter">
        <div className="quartzInner">

          
          <div className="quartzTextBox">
            <p className="tagline">
              High-purity powder ideal for composite materials,
              coatings, and industrial formulations.
            </p>

            <h2 className="title">
              Quartz Powder / Filler
            </h2>

            <p className="size">
              100–400 MESH Filler Product
            </p>

            <p className="description">
              Refined for performance and visual excellence, this high-purity
              quartz powder delivers superior whiteness, smooth finish, and
              dependable consistency. Engineered to elevate product quality,
              it enhances strength, workability, and surface appeal across
              engineered stone, coatings, and advanced industrial applications.
            </p>

            {/* ===== PRODUCT DETAILS BUTTON ===== */}
            <button
              className="monts-semibold"
              onClick={() => setOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                marginTop: "16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Product Details{" "}
              <span style={{ fontSize: "10px" }}>
                {open ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="quartzImageWrap">
            <div className="quartzImageBox">
              <img src={Sec5Img} alt="Quartz Powder" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP DROPDOWN ================= */}
      {open && (
        <div className="desktop-dropdown">
          <DropdownDesk
            open={open}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
            title="Quartz Filler"
            sizeData={TABS}
            colors={COLORS}
            imageSrc={Sec5Img}
          />
        </div>
      )}

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <div className="mobile-dropdown">
          <DropdownMobile
            open={open}
            title="Quartz Filler"
            data={TABS}
            colors={COLORS}
            imageSrc={Sec5Img}
            activeKey={activeSize}
            setActiveKey={setActiveSize}
            showArrows={true}   
          />
        </div>
      )}
      <style>
        {`
          .mobile-dropdown {
            display: none;
          }

          .desktop-dropdown {
            display: block;
          }

          @media (max-width: 768px) {
            .desktop-dropdown {
              display: none;
            }

            .mobile-dropdown {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
}
