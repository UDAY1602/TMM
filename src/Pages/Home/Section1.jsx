import section1bg from "../../assets/section1bg.png";

export default function Section1() {
  return (
    <section
      className="
        min-h-screen w-full
        bg-cover bg-center
        flex items-center
      "
      style={{ backgroundImage: `url(${section1bg})` }}
    >
      <div
        className="
          pl-6 sm:pl-16 lg:pl-40
        "
      >
        {/* HEADINGS — SAME STRUCTURE */}
        <h1
          className="
            heading-font text-[#eeedd3]
            text-3xl sm:text-4xl lg:text-5xl
            pb-2
          "
        >
          Reliable Minerals.
        </h1>

        <h1
          className="
            heading-font text-[#eeedd3]
            text-3xl sm:text-4xl lg:text-5xl
            pb-1
          "
        >
          Global Reach.
        </h1>

        <br />

        {/* PARAGRAPH — SAME LINE BREAKS */}
        <p
          className="
            para-font text-white
            text-sm sm:text-base lg:text-lg
            leading-relaxed
          "
        >
          High-performance quartz materials for engineered <br />
          stone manufacturers. Precision-processed for purity,<br />
          whiteness, and optimal particle distribution.
        </p>
      </div>
    </section>
  );
}
