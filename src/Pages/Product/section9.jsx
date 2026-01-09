import React from "react";


import sc9img1 from "../../assets/sc9img1.png";
import sc9img2 from "../../assets/sc9img2.png";
import sc9img3 from "../../assets/sc9img3.png";
import sc9img4 from "../../assets/sc9img4.png";
import sc9img5 from "../../assets/sc9img5.png";
import sc9img6 from "../../assets/sc9img6.png";
import sc9img7 from "../../assets/sc9img7.png";
import sc9img8 from "../../assets/sc9img8.png";

export default function Section9() {
  const items = [
    { title: "CERAMICS / PORCELAIN", col: 1, row: 1, span: 2, img: sc9img1 },
    { title: "GLASS MANUFACTURING", col: 2, row: 1, span: 1, img: sc9img2 },
    { title: "RUBBERS & PLASTICS", col: 3, row: 1, span: 2, img: sc9img3 },
    { title: "FOUNDRY", col: 4, row: 1, span: 1, img: sc9img4 },

    { title: "WATER FILTRATION", col: 1, row: 3, span: 1, img: sc9img5 },
    { title: "ENGINEERED STONE", col: 2, row: 2, span: 2, img: sc9img6 },
    { title: "CONSTRUCTION CHEMICALS", col: 3, row: 3, span: 1, img: sc9img7 },
    { title: "PAINTS & COATINGS", col: 4, row: 2, span: 2, img: sc9img8 },
  ];

  return (
    <section className="section9-wrapper relative w-full overflow-hidden">
     
      <div className="bg-[#111] pt-[100px] pb-[110px]">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-white items-center mb-20">
          <div>
            <p className="text-m text-[#d6d6d6] mb-2 monts-med">
              Precision-crafted quartz solutions for every industry need.
            </p>
            <h2 className="text-[28px] tracking-[2px] bankgothicbold">
              INDUSTRIES SERVED / APPLICATIONS
            </h2>
          </div>

          <p className="text-sm leading-normal text-[#cfcfcf] monts-reg">
            Our quartz products support a wide range of industrial and manufacturing
            processes. Each material is formulated to deliver optimized performance
            based on the unique technical needs of the end-use sector.
          </p>
        </div>
      </div>

     
      <div
        className="sec9-grid relative z-10 max-w-[1400px] mx-auto px-8 grid grid-cols-4 gap-6"
        style={{
          gridAutoRows: "140px",
          marginTop: "-140px",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="sec9-card relative overflow-hidden rounded-md"
            style={{
              gridColumn: item.col,
              gridRow: `${item.row} / span ${item.span}`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-semibold tracking-wide text-white bg-black/35 px-4">
              {item.title}
            </div>
          </div>
        ))}
      </div>

     
      <div className="bg-white pt-[200px] pb-[80px] -mt-[120px]">
        <p className="max-w-[700px] mx-auto text-center text-[16px] leading-relaxed text-[#666] px-6 monts-med">
          With continuous monitoring, digital records, and repeatable testing
          processes, we ensure reliability for high-performance applications,
          especially for the engineered stone industry where consistency is critical.
        </p>
      </div>

      
      <style>{`
        /* Desktop: uniform dark */
        .section9-wrapper {
          background: #111;
        }

        /* Tablet & Mobile: keep split bg */
        @media (max-width: 1024px) {
          .section9-wrapper {
            background: transparent;
          }

          .sec9-grid {
            grid-template-columns: repeat(2, 1fr) ;
            grid-auto-rows: 160px ;
          }

          .sec9-card {
            grid-column: auto ;
            grid-row: auto ;
          }
        }

        @media (max-width: 640px) {
          .sec9-grid {
            grid-template-columns: 1fr ;
            grid-auto-rows: 220px ;
            margin-top: -100px ;
          }

          .bankgothicbold {
            font-size: 22px ;
          }

          .monts-med,
          .monts-reg {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
