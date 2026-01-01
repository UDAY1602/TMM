import React from "react";
import Sec3 from "../../assets/pr filler.png";
import "../Product/sec5.css";

export default function Section5() {
  return (
     <>
          <div className="quartzOuter">
            <div className="quartzInner">
    
              {/* LEFT TEXT */}
              <div className="quartzTextBox">
                <p className="tagline">
                  High-purity powder ideal for composite materials,
                  coatings, and industrial formulations.
                </p>
    
                <h2 className="title">
                  QUARTZ POWDER /FILLER
                </h2>
    
                <p className="size">
                  100 – 400 MESH FILLER PRODUCT
                </p>
    
                <p className="description">
                  Refined for performance and visual excellence,this high-purity
                  quartz powder delivers superior whiteness,smooth finish,and
                  dependable consistency.Engineered to elevate product quality,it
                  enhances strength,workability,and surface appeal across
                  engineered stone,coatings,and advanced industrial applications.
                </p>
              </div>
    
              {/* RIGHT IMAGE */}
              {/* RIGHT IMAGE */}
              <div className="quartzImageWrap">
                <div className="quartzImageBox">
                  <img src={Sec3} alt="Quartz Grits" />
                </div>
              </div>
    
            </div>
          </div>
        </>
  );
}
