import React, { useEffect, useRef, useState } from "react";
import "./Sec3.css";

export default function Section3() {
  const sectionRef = useRef(null);

  const [moonVisible, setMoonVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const y = window.scrollY;


      // SCROLL PROGRESS inside Section 3 (0 — 1)
      const progress = Math.min(Math.max((y - top) / height, 0), 1);

      // Moon appears early
      if (progress > 0.02) setMoonVisible(true);

      // Text appears later
      if (progress > 0.15) setTextVisible(true);
      // After text animation → show 5 items
      if (progress > 0.45) {
        setItemsVisible(true);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="section3">
      <div className="stickyBox">
        <img
          src="/moon.png"
          className={`moon ${moonVisible ? "showMoon" : ""}`}
        />

        {/* <img
          src="/maintext.png"
          className={`text ${textVisible ? "showText" : ""}`}
        /> */}
        <h1 className={`textReal ${textVisible ? "showTextReal" : ""}`}>
          Premium Quartz Grits, Fillers &<br />
          Powders for Engineered Stone<br />
          and Industrial Applications
        </h1>
        <div className={`itemsLayer ${itemsVisible ? "showItemsLayer" : ""}`}>
          <div className="item item1"><img src="/grit.png" /><p>0.1–8mm<br />GRIT</p></div>
          <div className="item item2"><img src="/semi.png" /><p>SEMI-TRANSLUCENT<br />Quartz</p></div>
          <div className="item item3"><img src="/powder.png" /><p>100–500 mesh<br />POWDER</p></div>
          <div className="item item4"><img src="/snow.png" /><p>SNOW WHITE<br />Quartz</p></div>
          <div className="item item5"><img src="/filler.png" /><p>Industrial Quartz<br />FILLERS</p></div>
        </div>
        <div className={`bottomInfo ${itemsVisible ? "showBottomInfo" : ""}`}>
          <p className="bottomText">
            Optimized for whiteness, purity, consistency, and industry-specific performance.
          </p>

          <button className="exploreBtn">
            Explore
          </button>
        </div>




      </div>
    </div>
  );
}
