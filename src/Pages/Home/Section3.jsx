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
            rotate: self.progress * -80, // slower spin
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

          <h1 ref={textRef} className="textReal" style={{fontSize:'64px'}}>
            Premium Quartz Grits, Fillers &<br />
            Powders for Engineered Stone<br />
            and Industrial Applications
          </h1>

          <div ref={itemsRef} className="itemsLayer">
            <div className="item item1"><img src="/grit.png" />
              <p className="oswaldlight" style={{fontSize:'24px'}}>0.1–8mm</p><br /><p className="rebaltypedog" style={{fontSize:'48px'}}>GRIT</p>
            </div>
            <div className="item item2"><img src="/semi.png" />
              <p className="rebaltypedog" style={{fontSize:'24px'}}>SEMI-TRANSLUCENT</p><br/><p className="oswaldregular" style={{fontSize:'48px'}}>Quartz</p>
            </div>
            <div className="item item3"><img src="/powder.png" />
              <p className="oswaldlight" style={{fontSize:'24px'}}>100–500 mesh</p><br/><p className="rebaltypedog" style={{fontSize:'48px'}}>POWDER</p>
            </div>
            <div className="item item4"><img src="/snow.png" />
              <p className="rebaltypedog" style={{fontSize:'24px'}}>SNOW WHITE</p><br/><p className="oswaldregular" style={{fontSize:'48px'}}>Quartz</p>
            </div>
            <div className="item item5"><img src="/filler.png" />
              <p className="oswaldlight" style={{fontSize:'24px'}}>Industrial Quartz</p><br /><p className="rebaltypedog" style={{fontSize:'48px'}}>FILLERS</p>
            </div>
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
