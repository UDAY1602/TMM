import { useEffect, useState } from "react";
import section1bg from "../../assets/section1bg.png";

export default function Section1() {
  const heading1 = "Reliable Minerals.";
  const heading2 = "Global Reach.";
  const text =
    "High-performance quartz materials for engineered \nstone manufacturers. Precision-processed for purity,\nwhiteness, and optimal particle distribution.";

  const [h1, setH1] = useState("");
  const [h2, setH2] = useState("");
  const [para, setPara] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    setTyping(true);

    const interval = setInterval(() => {
      if (i < heading1.length) {
        setH1(heading1.slice(0, i + 1));
      } else if (i < heading1.length + heading2.length) {
        setH2(heading2.slice(0, i - heading1.length + 1));
      } else if (i < heading1.length + heading2.length + text.length) {
        setPara(text.slice(0, i - heading1.length - heading2.length + 1));
      } else {
        clearInterval(interval);
        setTyping(false);
      }
      i++;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full
        min-h-[100svh]
        flex items-center
        bg-cover bg-no-repeat
        bg-[58%_50%]
        sm:bg-center
      "
      style={{ backgroundImage: `url(${section1bg})` }}
    >
      <div
        className="
          pl-6 sm:pl-16 lg:pl-40
          max-w-[90%] sm:max-w-none
          whitespace-pre-line
          grid
        "
      >
        
        <div style={{ visibility: "hidden", gridArea: "1 / 1" }}>
          <h1 className="heading-font text-3xl sm:text-4xl lg:text-5xl pb-2">
            {heading1}
          </h1>
          <h1 className="heading-font text-3xl sm:text-4xl lg:text-5xl pb-1">
            {heading2}
          </h1>
          <br />
          <p className="para-font text-sm sm:text-base lg:text-lg leading-relaxed">
            {text}
          </p>
        </div>

        
        <div style={{ gridArea: "1 / 1" }}>
          <h1 className="heading-font text-[#eeedd3] text-3xl sm:text-4xl lg:text-5xl pb-2">
            {h1}
            {typing && h1.length < heading1.length && "|"}
          </h1>

          <h1 className="heading-font text-[#eeedd3] text-3xl sm:text-4xl lg:text-5xl pb-1">
            {h2}
            {typing &&
              h1.length === heading1.length &&
              h2.length < heading2.length &&
              "|"}
          </h1>

          <br />

          <p className="para-font text-white text-sm sm:text-base lg:text-lg leading-relaxed">
            {para}
            {typing &&
              h1.length === heading1.length &&
              h2.length === heading2.length &&
              para.length < text.length &&
              "|"}
          </p>
        </div>
      </div>
    </section>
  );
}
