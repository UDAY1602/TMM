import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Sec3.css";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const itemsRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
  const mm = gsap.matchMedia();

  /* ======================
     DESKTOP / PC
  ====================== */
  mm.add("(min-width: 1025px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: pinRef.current,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(moonRef.current, {
            rotate: self.progress * -80, // 4 rotations
          });
        },
      },
    });

    tl
      .to(moonRef.current, { opacity: 0.35, duration: 0.1 })
      .to({}, { duration: 1 })
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.5 })
      .to({}, { duration: 2 })
      .to(itemsRef.current, { opacity: 1, duration: 1.5 })
      .to(bottomRef.current, { opacity: 1, duration: 1.7 });
  });

  /* ======================
     TABLETS + LARGE PHONES
  ====================== */
  mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=220%",
        scrub: 1,
        pin: pinRef.current,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(moonRef.current, {
            rotate: self.progress * -80,
          });
        },
      },
    });

    tl
      .to(moonRef.current, { opacity: 0.4, duration: 0.15 })
      .to({}, { duration: 0.8 })
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.4 })
      .to({}, { duration: 1.3 })
      .to(itemsRef.current, { opacity: 1, duration: 1.2 })
      .to(bottomRef.current, { opacity: 1, duration: 1.3 });
  });

  /* ======================
     MOBILE (ANDROID + iPHONE)
  ====================== */
  mm.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=180%",
        scrub: 1.2, // smoother on mobile
        pin: pinRef.current,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(moonRef.current, {
            rotate: self.progress * -720, // slower spin
          });
        },
      },
    });

    tl
      .to(moonRef.current, { opacity: 0.45, duration: 0.2 })
      .to({}, { duration: 0.7 })
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.4 })
      .to({}, { duration: 1 })
      .to(itemsRef.current, { opacity: 1, duration: 1 })
      .to(bottomRef.current, { opacity: 1, duration: 1 });
  });

  return () => mm.revert();
}, []);



    
  return (
    <section ref={sectionRef} className="section3">

      {/* PINNED SCENE */}
      <div ref={pinRef} className="pinScene">

        {/* MOON — NOW INSIDE PIN */}
        <img
          ref={moonRef}
          src="/moon.png"
          className="fullMoon"
          alt="moon"
        />

        {/* CONTENT */}
        <div className="stickyBox">

          <h1 ref={textRef} className="textReal">
            Premium Quartz Grits, Fillers &<br />
            Powders for Engineered Stone<br />
            and Industrial Applications
          </h1>

          <div ref={itemsRef} className="itemsLayer">
            <div className="item item1"><img src="/grit.png" /><p className="p1">0.1–8mm</p><p className="itemText grit">GRIT</p></div>
            <div className="item item2"><img src="/semi.png" /> <p className="p2">SEMI-<br/>TRANSLUCENT</p><p className="itemText semi">Quartz</p></div>
            <div className="item item3"><img src="/powder.png" /> <p className="p3">100–500 mesh</p><p className="itemText mesh">POWDER</p></div>
            <div className="item item4"><img src="/snow.png" /> <p className="p4">SNOW WHITE</p><p className="itemText snow">Quartz</p></div>
            <div className="item item5"><img src="/filler.png" /><p className="p5">Industrial  Quartz</p><p className="itemText quartz">FILLERS</p></div>
          </div>

          <div ref={bottomRef} className="bottomInfo">
            <p className="bottomText">
              Optimized for whiteness, purity, consistency, and industry-specific performance.
            </p>
            <button className="exploreBtn">Explore</button>
          </div>

        </div>
      </div>
    </section>
  );
}
