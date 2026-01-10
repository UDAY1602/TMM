import React from "react";

export default function Section10() {
  return (
    <section className="w-full bg-white py-28 flex justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl flex flex-col items-center">

       
        <div className="relative w-full hidden md:flex items-center justify-center">

          
          <div className="absolute left-[10%] flex flex-col gap-8 monts-reg">
            <div className="qa-label">Purity (SiO₂ %)</div>
            <div className="qa-label">Particle Size Distribution</div>
          </div>

        
          <div className="absolute right-[10%] flex flex-col gap-8 monts-reg">
            <div className="qa-label">Moisture Content</div>
            <div className="qa-label">Iron content (Fe₂O₃)</div>
          </div>

        
          <CenterCircle />
        </div>

       
        <div className="md:hidden w-full flex flex-col items-center gap-10">

          
          <div className="flex gap-4 justify-center monts-reg flex-wrap">
            <div className="qa-label">Purity (SiO₂ %)</div>
            <div className="qa-label">Moisture Content</div>
          </div>

          
          <CenterCircle />

          
          <div className="flex gap-4 justify-center monts-reg flex-wrap">
            <div className="qa-label">Particle Size Distribution</div>
            <div className="qa-label">Iron content (Fe₂O₃)</div>
          </div>
        </div>
      </div>

     
      <style>{`
        
        .qa-label {
          background: #efefd6;
          padding: 8px 14px;
          width: fit-content;
          border-radius: 8px;
          font-size: 14px;
          color: #4a4a4a;
          white-space: nowrap;
        }

        
        .qa-ripple {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 9999px;
          opacity: 0;
          transform: scale(1);
          background: radial-gradient(
            circle,
            rgba(145,160,85,0.55) 0%,
            rgba(165,180,105,0.42) 35%,
            rgba(185,200,125,0.26) 60%,
            rgba(205,220,145,0.12) 80%,
            rgba(205,220,145,0) 100%
          );
        }

      
        .group:hover .qa-ripple {
          animation: rippleDesktop 3s ease-out infinite;
        }

        .qa-ripple-2 { animation-delay: 1s; }
        .qa-ripple-3 { animation-delay: 2s; }

        @keyframes rippleDesktop {
          0% { transform: scale(1); opacity: 1; }
          70% { opacity: 0.35; }
          100% { transform: scale(1.9); opacity: 0; }
        }

      \
        .qa-core {
          width: 260px;
          height: 260px;
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
          padding-left: 28px;
          padding-right: 28px;
        }

       
        @media (max-width: 768px) {
          .qa-core {
            width: 220px;
            height: 220px;
          }

          .qa-ripple {
            width: 160px;
            height: 160px;
          }

          
          .group:hover .qa-ripple {
            animation: rippleMobile 2s ease-out infinite;
          }

          .qa-ripple-2 { animation-delay: 0.6s; }
          .qa-ripple-3 { animation-delay: 1.2s; }
        }

        @keyframes rippleMobile {
          0% { transform: scale(1); opacity: 1; }
          65% { opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}


function CenterCircle() {
  return (
    <div className="relative group flex items-center justify-center">
      <span className="qa-ripple qa-ripple-1"></span>
      <span className="qa-ripple qa-ripple-2"></span>
      <span className="qa-ripple qa-ripple-3"></span>

      <div className="qa-core">
        <h3 className="text-lg tracking-widest bankgothicmed">QUALITY</h3>
        <h2 className="text-xl tracking-wide mb-3 bankgothicmed">
          ASSURANCE
        </h2>
        <p className="text-[12px] leading-relaxed text-gray-600 monts-reg">
          We follow strict quality control from raw-material sourcing to delivery.
          Every batch is monitored for:
        </p>
      </div>
    </div>
  );
}
