import React from "react";
import "../Product/sec11.css";
import pressureImg from "../../assets/Pressure Washing.png";
import crushingImg from "../../assets/Fully Automatic Crushing & Grinding.png";
import opticalImg from "../../assets/High-Precision Optical Sorting.png";
import sievingImg from "../../assets/Advanced Sieving & Classification.png";
import labImg from "../../assets/In-house Quality Testing Lab.png";
import packagingImg from "../../assets/Dust-free Packaging Systems.png";
import rdBg from "../../assets/sec12rd.png";
import hseBg from "../../assets/sec12hs.png";


const infraItems = [
  {
    title: "Pressure Washing",
    image: pressureImg,
  },
  {
    title: "Fully automatic crushing & grinding systems",
    image: crushingImg,
  },
  {
    title: "High-precision optical sorting technology",
    image: opticalImg,
  },
  {
    title: "Advanced sieving & classification",
    image: sievingImg,
  },
  {
    title: "In-house quality testing lab",
    image: labImg,
  },
  {
    title: "Dust-free packaging systems",
    image: packagingImg,
  },
];

export default function Section11() {
  return (
    <section className="manufacturing">

      <div className="manufacturing-header">
        <h2>
          MANUFACTURING <br /> INFRASTRUCTURE
        </h2>

        <p className="monts-reg">
          Our state-of-the-art manufacturing facility integrates advanced systems
          designed for high output, consistency, and contamination-free
          production. Key infrastructure includes:
        </p>
      </div>


      <div className="infra-grid">
        {infraItems.map((item, index) => (
          <div key={index} className="infra-card">
            <img
              src={item.image}
              alt={item.title}
              className="infra-image"
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="bottom-grid">
        <div
          className="bottom-card"
          style={{ backgroundImage: `url(${rdBg})` }}
        >

          <h3>R&amp;D &amp; Innovation</h3>
          <p>
            We invest in continuous improvement to enhance mineral purity,
            optimize whiteness, and develop application-specific quartz grades
            for engineered stone and industrial clients.
          </p>
        </div>

        <div
          className="bottom-card"
          style={{ backgroundImage: `url(${hseBg})` }}
        >

          <h3>Health, Safety &amp; Environmental Practices</h3>
          <p>
            We operate with a strong HSE framework that ensures safe operations,
            reduced environmental impact, and responsible resource usage.
          </p>
        </div>
      </div>
    </section>
  );
}