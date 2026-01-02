import React from "react";

export default function section10() {
  return (
    <section className="w-full  bg-white py-24 flex justify-center">
      <div className="relative w-full max-w-5xl flex items-center justify-center">

        {/* LEFT LABELS */}
        <div className="absolute left-0 flex flex-col gap-6">
          <div className="qa-label">Purity (SiO₂ %)</div>
          <div className="qa-label">Particle Size Distribution</div>
        </div>

        {/* RIGHT LABELS */}
        <div className="absolute right-0 flex flex-col gap-6">
          <div className="qa-label">Moisture Content</div>
          <div className="qa-label">Iron content (Fe₂O₃)</div>
        </div>

        {/* CIRCLE STACK */}
        <div className="relative flex items-center justify-center">

          {/* OUTER RINGS */}
          <div className="qa-ring qa-ring-3"></div>
          <div className="qa-ring qa-ring-2"></div>
          <div className="qa-ring qa-ring-1"></div>

          {/* CENTER CIRCLE */}
          <div className="qa-core wobble-on-hover">
            <h3 className="text-sm tracking-widest mb-2">QUALITY</h3>
            <h2 className="text-lg font-semibold tracking-wide mb-2">
              ASSURANCE
            </h2>
            <p className="text-[11px] leading-relaxed text-gray-600 px-6">
              We follow strict quality control from raw-material sourcing to delivery.
              Every batch is monitored for:
            </p>
          </div>

        </div>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .qa-label {
          background: #efefd6;
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 13px;
          color: #4a4a4a;
          white-space: nowrap;
        }

        .qa-ring {
          position: absolute;
          border-radius: 9999px;
          background: #f4f4df;
        }

        .qa-ring-1 {
          width: 220px;
          height: 220px;
          background: #eef0d8;
        }

        .qa-ring-2 {
          width: 280px;
          height: 280px;
          background: #f5f6e4;
        }

        .qa-ring-3 {
          width: 340px;
          height: 340px;
          background: #fafbf1;
        }

        .qa-core {
          width: 180px;
          height: 180px;
          border-radius: 9999px;
          background: #e9ecd0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #333;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }

        /* WOBBLE ANIMATION */
        .wobble-on-hover:hover {
          animation: wobble 0.6s ease-in-out;
        }

        @keyframes wobble {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(1.5deg); }
          40% { transform: rotate(-1.5deg); }
          60% { transform: rotate(1deg); }
          80% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .qa-label {
            font-size: 12px;
          }

          .qa-ring-3 { width: 280px; height: 280px; }
          .qa-ring-2 { width: 230px; height: 230px; }
          .qa-ring-1 { width: 190px; height: 190px; }
          .qa-core   { width: 150px; height: 150px; }

          .absolute.left-0,
          .absolute.right-0 {
            position: static;
            flex-direction: row;
            gap: 12px;
            margin-top: 20px;
          }

          .relative.w-full {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
