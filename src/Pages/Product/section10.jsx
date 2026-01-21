import React from "react";

export default function Section10() {
  return (
    <section
      id="quality-assurance"
      className="w-full bg-white py-32 flex justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-6xl flex flex-col items-center">

        {/* DESKTOP */}
        <div className="relative w-full hidden md:flex items-center justify-center">

          {/* LEFT LABELS */}
          <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-[460px] flex flex-col gap-8 monts-reg items-end">
            <div className="qa-label qa-small">Purity (SiO₂ %)</div>
            <div className="qa-label qa-wide">Particle Size Distribution</div>
          </div>

          {/* RIGHT LABELS */}
          <div className="absolute right-[50%] top-1/2 -translate-y-1/2 translate-x-[460px] flex flex-col gap-8 monts-reg items-start">
            <div className="qa-label qa-small">Moisture Content</div>
            <div className="qa-label qa-wide">Iron content (Fe₂O₃)</div>
          </div>

          <CenterCircle />
        </div>

        {/* MOBILE */}
        <div className="md:hidden w-full flex flex-col items-center gap-12">
          <div className="flex gap-4 justify-center monts-reg flex-wrap">
            <div className="qa-label qa-small">Purity (SiO₂ %)</div>
            <div className="qa-label qa-small">Moisture Content</div>
          </div>

          <CenterCircle />

          <div className="flex gap-4 justify-center monts-reg flex-wrap">
            <div className="qa-label qa-wide">Particle Size Distribution</div>
            <div className="qa-label qa-wide">Iron content (Fe₂O₃)</div>
          </div>
        </div>
      </div>

      <style>{`
        /* LABELS */
        .qa-label {
          background: #efefd6;
          border-radius: 10px;
          color: #4a4a4a;
          white-space: nowrap;
          text-align: center;
        }

        .qa-small {
          padding: 10px 16px;
          font-size: 14px;
          min-width: 160px;
        }

        .qa-wide {
          padding: 12px 28px;
          font-size: 15px;
          min-width: 260px;
        }

        /* RIPPLE BASE */
        .qa-ripple {
          position: absolute;
          border-radius: 9999px;
          opacity: 0;
          animation: rippleDesktop 3.6s ease-out infinite;
          background: radial-gradient(
            circle,
            rgba(145,160,85,0.85) 0%,
            rgba(165,180,105,0.65) 32%,
            rgba(185,200,125,0.45) 55%,
            rgba(205,220,145,0.25) 75%,
            rgba(205,220,145,0) 100%
          );
        }

        /* THREE RIPPLE LAYERS (same sizes, staggered fade feel) */
        .qa-ripple-1 {
          width: 240px;
          height: 240px;
          animation-delay: 0s;
        }

        .qa-ripple-2 {
          width: 280px;
          height: 280px;
          animation-delay: 1.2s;
          opacity: 0.05;
        }

        .qa-ripple-3 {
          width: 320px;
          height: 320px;
          animation-delay: 2.4s;
          opacity: 0.05;
        }

        /* LIMIT EXPANSION — ENDS AT BOXES */
        @keyframes rippleDesktop {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            opacity: 0.55;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        /* CENTER CIRCLE */
        .qa-core {
          width: 320px;
          height: 320px;
          border-radius: 9999px;
          background: #e9ecd0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .qa-core p {
          padding: 0 36px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .qa-core {
            width: 260px;
            height: 260px;
          }

          .qa-ripple-1 {
            width: 180px;
            height: 180px;
          }

          .qa-ripple-2 {
            width: 210px;
            height: 210px;
          }

          .qa-ripple-3 {
            width: 240px;
            height: 240px;
          }

          .qa-ripple {
            animation: rippleMobile 2.8s ease-out infinite;
          }
        }

        @keyframes rippleMobile {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            opacity: 0.55;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

function CenterCircle() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="qa-ripple qa-ripple-1"></span>
      <span className="qa-ripple qa-ripple-2"></span>
      <span className="qa-ripple qa-ripple-3"></span>

      <div className="qa-core">
        <h3 className="text-xl tracking-widest bankgothicmed">
          QUALITY
        </h3>
        <h2 className="text-2xl tracking-wide mb-4 bankgothicmed">
          ASSURANCE
        </h2>
        <p className="text-[14px] leading-relaxed text-gray-600 monts-reg">
          We follow strict quality control from raw-material sourcing to delivery.
          Every batch is monitored for:
        </p>
      </div>
    </div>
  );
}
