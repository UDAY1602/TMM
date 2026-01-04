import React from "react";
import Sec3 from "../../assets/Sec3.png";
import "../Product/sec3.css";

export default function Section3() {
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
              Quartz Grits - Supreme
            </h2>

            <p className="size">
              0.1 – 0.4mm
            </p>

            <p className="description">
              High-purity quartz grits with tight granulometry and superior
              whiteness, designed for applications demanding maximum
              strength, surface finish, and visual consistency.
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
