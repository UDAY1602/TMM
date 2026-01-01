import React from "react";
import "../Product/sec11.css";

const infraItems = [
  "Pressure Washing",
  "Fully automatic crushing & grinding systems",
  "High-precision optical sorting technology",
  "Advanced sieving & classification",
  "In-house quality testing lab",
  "Dust-free packaging systems",
];

export default function Section11() {
  return (
    <section className="manufacturing">
      {/* Header */}
      <div className="manufacturing-header">
        <h2>
          MANUFACTURING <br /> INFRASTRUCTURE
        </h2>

        <p>
          Our state-of-the-art manufacturing facility integrates advanced systems
          designed for high output, consistency, and contamination-free
          production. Key infrastructure includes:
        </p>
      </div>

      {/* Infrastructure Cards */}
      <div className="infra-grid">
        {infraItems.map((item, index) => (
          <div key={index} className="infra-card">
            <div className="infra-image" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Bottom Sections */}
      <div className="bottom-grid">
        <div className="bottom-card rd">
          <h3>R&amp;D &amp; Innovation</h3>
          <p>
            We invest in continuous improvement to enhance mineral purity,
            optimize whiteness, and develop application-specific quartz grades
            for engineered stone and industrial clients.
          </p>
        </div>

        <div className="bottom-card hse">
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
