import React, { useState } from "react";
import abtsec5L from "../../assets/abtsec5L.png";
import abtsec5R from "../../assets/abtsec5R.png";

export default function Section5() {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
      <section
        className="section5-wrapper"
        style={{
          width: "100%",
          background: "#111",
          padding: "24px 0",
          boxSizing: "border-box",
        }}
      >
        <div
          className="section5-container"
          style={{
            width: "100%",
            display: "flex",
            gap: "6px",
          }}
        >
          {/* Left image */}
          <div className="section5-img-wrap section5-left">
            <img src={abtsec5L} alt="Section 5 Left" />
            <button className="zoom-btn" onClick={() => setZoomImg(abtsec5L)}>
              ⤢
            </button>
          </div>

          {/* Right image */}
          <div className="section5-img-wrap section5-right">
            <img src={abtsec5R} alt="Section 5 Right" />
            <button className="zoom-btn" onClick={() => setZoomImg(abtsec5R)}>
              ⤢
            </button>
          </div>
        </div>

        <style>
          {`
            .section5-img-wrap {
              position: relative;
              overflow: hidden;
            }

            .section5-left {
              flex: 0 0 60%;
            }

            .section5-right {
              flex: 0 0 40%;
            }

            .section5-img-wrap img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }

            .zoom-btn {
              position: absolute;
              bottom: 12px;
              right: 12px;
              background: rgba(0, 0, 0, 0.6);
              border: 1px solid rgba(255,255,255,0.4);
              color: #fff;
              font-size: 14px;
              padding: 6px 8px;
              cursor: pointer;
              border-radius: 4px;
            }

            .zoom-btn:hover {
              background: rgba(0, 0, 0, 0.85);
            }

            @media (max-width: 768px) {
              .section5-container {
                margin-left: -8px;
              }
            }
          `}
        </style>
      </section>

      {zoomImg && (
        <div className="zoom-overlay">
          <button className="zoom-close" onClick={() => setZoomImg(null)}>
            ✕
          </button>

          <img src={zoomImg} alt="Zoomed view" />

          <div className="zoom-backdrop" onClick={() => setZoomImg(null)} />
        </div>
      )}

      <style>
        {`
          .zoom-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .zoom-backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.95);
          }

          .zoom-overlay img {
            max-width: 95%;
            max-height: 95%;
            object-fit: contain;
            z-index: 2;
          }

          .zoom-close {
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 3;
            background: rgba(0,0,0,0.7);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.5);
            font-size: 18px;
            padding: 6px 10px;
            cursor: pointer;
            border-radius: 4px;
          }

          .zoom-close:hover {
            background: rgba(0,0,0,0.9);
          }
        `}
      </style>
    </>
  );
}
