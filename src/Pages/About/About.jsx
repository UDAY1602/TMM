import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import FloatingMineral from "./floatingmineral";

export default function About() {
  const location = useLocation();
  const [showMineral, setShowMineral] = useState(false);
   useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [location]);
  return (
    <div key={location.pathname}>
      
      <div style={{ position: "relative" }}>
        <Section1 setShowMineral={setShowMineral} />
        <FloatingMineral visible={showMineral} />
      </div>

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
