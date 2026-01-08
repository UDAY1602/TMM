import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Sec3.css";
import { useNavigate } from "react-router-dom";
import moon from "../../assets/moon.png";
import semi from "../../assets/quartzfiller.png";
import grit from "../../assets/Quartzite.png";
import filler from "../../assets/industrial.png";
import powder from "../../assets/quartzgrits.png";
import snow from "../../assets/quartslumps.png";

export default function Section3() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const itemsRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const goToAbout = () => {
  navigate("/about");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  useEffect(() => {
    // ✅ HARD EXIT ON MOBILE — DESKTOP REMAINS UNTOUCHED
    if (window.matchMedia("(max-width: 768px)").matches) {
      return;
    }

    // 🔒 DESKTOP / TABLET LOGIC — SAME AS YOUR ORIGINAL
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    /* ================= DESKTOP ================= */
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            gsap.set(moonRef.current, {
              rotate: self.progress * -80,
            });
          },
        },
      });

      tl
        .to(moonRef.current, { opacity: 0.35 })
        .to(textRef.current, { opacity: 1, y: 0 })
        .to(itemsRef.current, { opacity: 1 })
        .to(bottomRef.current, { opacity: 1 });
    });

    /* ================= TABLET ================= */
    mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            gsap.set(moonRef.current, {
              rotate: self.progress * -60,
            });
          },
        },
      });

      tl
        .to(moonRef.current, { opacity: 0.4 })
        .to(textRef.current, { opacity: 1, y: 0 })
        .to(itemsRef.current, { opacity: 1 })
        .to(bottomRef.current, { opacity: 1 });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section3">
      <div ref={pinRef} className="pinScene">

        {/* ALWAYS RENDER — DO NOT TOUCH DESKTOP */}
        <img
          ref={moonRef}
          src={moon}
          className="fullMoon"
          alt="moon"
        />

        <div className="stickyBox">
          <h1 ref={textRef} className="textReal">
            Engineered Precision Meets<br />
            Industrial Strength with <br />
            Our Comprehensive Quartz Range
          </h1>

          <div ref={itemsRef} className="itemsLayer">
            <div className="item item1">
              <img src={powder} alt="" />
              
              <p className="itemText grit">Quartz Grits</p>
            </div>

            <div className="item item2">
              <img src={semi} alt="" />
              <p className="itemText semi">Quartz Filler</p>
            </div>

            <div className="item item3">
              <img src={filler} alt="" />
              <p className="itemText mesh">Industrial<br></br>By-products</p>
            </div>

            <div className="item item4">
              <img src={snow} alt="" />
              <p className="itemText snow">Quartz Lumps</p>
            </div>

            <div className="item item5">
              <img src={grit} alt="" />
              <p className="itemText quartz">Quartzite Lumps</p>
            </div>
          </div>

          <div ref={bottomRef} className="bottomInfo montserratthin">
            <p className="bottomText">
              Optimized for whiteness, purity, consistency, and industry-specific performance.
            </p>
            <button className="exploreBtn" onClick={goToAbout}>
  Explore
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
