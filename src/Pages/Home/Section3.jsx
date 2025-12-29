import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Sec3.css";
import moon from "../../assets/moon.png";
import semi from "../../assets/semi.png";
import grit from "../../assets/grit.png";
import filler from "../../assets/filler.png";
import powder from "../../assets/powder.png";
import snow from "../../assets/snow.png";
gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stickyRef = useRef(null);   
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const itemsRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    /* DESKTOP */
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
          onUpdate: (self) => {
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

    /* TABLET */
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
          onUpdate: (self) => {
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

    /* MOBILE */
    mm.add("(max-width: 768px)", () => {

      // ✅ SCALE CONTENT (NOT PIN, NOT SELECTOR)
      gsap.set(stickyRef.current, {
        scale: 0.72,
        transformOrigin: "top center",
      });

      // ✅ MAKE MOON VISIBLE ON MOBILE
      gsap.set(moonRef.current, {
        width: 780,
        top: -480,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1.2,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(moonRef.current, {
              rotate: self.progress * -120,
            });
          },
        },
      });

      tl
        .to(moonRef.current, { opacity: 0.45 })
        .to(textRef.current, { opacity: 1, y: 0 })
        .to(itemsRef.current, { opacity: 1 })
        .to(bottomRef.current, { opacity: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section3">
      <div ref={pinRef} className="pinScene">

        <img
          ref={moonRef}
          src={moon}
          className="fullMoon"
          alt="moon"
        />

        <div className="stickyBox">

          <h1 ref={textRef} className="textReal">
            Premium Quartz Grits, Fillers &<br />
            Powders for Engineered Stone<br />
            and Industrial Applications
          </h1>

          <div ref={itemsRef} className="itemsLayer">
            <div className="item item1"><img src={grit} /><p className="p1">0.1–8mm</p><p className="itemText grit">GRIT</p></div>
            <div className="item item2"><img src={semi} /><p className="p2">SEMI-<br />TRANSLUCENT</p><p className="itemText semi">Quartz</p></div>
            <div className="item item3"><img src={powder} /><p className="p3">100–500 mesh</p><p className="itemText mesh">POWDER</p></div>
            <div className="item item4"><img src={snow} /><p className="p4">SNOW WHITE</p><p className="itemText snow">Quartz</p></div>
            <div className="item item5"><img src={filler} /><p className="p5">Industrial Quartz</p><p className="itemText quartz">FILLERS</p></div>
          </div>

          <div ref={bottomRef} className="bottomInfo">
            <p className="bottomText montserratthin pb-3">
              Optimized for whiteness, purity, consistency, and industry-specific performance.
            </p>
            <button className="exploreBtn">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

