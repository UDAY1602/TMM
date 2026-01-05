import React from "react";

export default function Section10() {
  return (
    <section className="w-full bg-white py-28 flex justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl flex items-center justify-center">

        {/* LEFT LABELS */}
        <div className="absolute left-[10%] flex flex-col gap-8 monts-reg">
          <div className="qa-label">Purity (SiO₂ %)</div>
          <div className="qa-label">Particle Size Distribution</div>
        </div>

        {/* RIGHT LABELS */}
        <div className="absolute right-[10%] flex flex-col gap-8 monts-reg">
          <div className="qa-label">Moisture Content</div>
          <div className="qa-label">Iron content (Fe₂O₃)</div>
        </div>

        {/* CENTER STACK */}
        <div className="relative group flex items-center justify-center">

          {/* RIPPLE RINGS */}
          <span className="qa-ripple qa-ripple-1"></span>
          <span className="qa-ripple qa-ripple-2"></span>
          <span className="qa-ripple qa-ripple-3"></span>

          {/* CORE */}
          <div className="qa-core wobble-on-hover">
            <h3 className="text-lg tracking-widest bankgothicmed">QUALITY</h3>
            <h2 className="text-xl tracking-wide mb-3 bankgothicmed">
              ASSURANCE
            </h2>
            <p className="text-[12px] leading-relaxed text-gray-600 px-8 monts-reg">
              We follow strict quality control from raw-material sourcing to delivery.
              Every batch is monitored for:
            </p>
          </div>
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        /* SIDE LABELS */
        .qa-label {
          background: #efefd6;
          padding: 20px;
          width: fit-content;
          border-radius: 8px;
          font-size: 14px;
          color: #4a4a4a;
          white-space: nowrap;
        }

        /* RIPPLE BASE (REDUCED SIZE) */
        .qa-ripple {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 9999px;
          opacity: 0;
          transform: scale(1);

          background: radial-gradient(
            circle,
            rgba(145, 160, 85, 0.55) 0%,
            rgba(165, 180, 105, 0.42) 35%,
            rgba(185, 200, 125, 0.26) 60%,
            rgba(205, 220, 145, 0.12) 80%,
            rgba(205, 220, 145, 0.0) 100%
          );
        }

        .group:hover .qa-ripple {
          animation: rippleExpand 3s ease-out infinite;
        }

        .qa-ripple-2 { animation-delay: 1s; }
        .qa-ripple-3 { animation-delay: 2s; }

        @keyframes rippleExpand {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          70% {
            opacity: 0.35;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        /* CORE */
        .qa-core {
          width: 220px;
          height: 220px;
          border-radius: 9999px;
          background: #e9ecd0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }

        /* WOBBLE */
        .wobble-on-hover:hover {
          animation: wobble 0.6s ease-in-out;
        }

        @keyframes wobble {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(1.2deg); }
          40% { transform: rotate(-1.2deg); }
          60% { transform: rotate(0.8deg); }
          80% { transform: rotate(-0.8deg); }
          100% { transform: rotate(0deg); }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .qa-core {
            width: 180px;
            height: 180px;
          }

          .qa-ripple {
            width: 170px;
            height: 170px;
          }

          .qa-label {
            padding: 12px 22px;
            font-size: 13px;
          }

          .absolute.left-[10%],
          .absolute.right-[10%] {
            position: static;
            flex-direction: row;
            gap: 16px;
            margin-top: 28px;
          }

          .relative.w-full {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
