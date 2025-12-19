import section1bg from "../../assets/section1bg.png";

export default function Section1() {
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
      <div className="pl-6 sm:pl-16 lg:pl-40 max-w-[90%] sm:max-w-none">
        {/* HEADINGS */}
        <h1 className="heading-font text-[#eeedd3] text-3xl sm:text-4xl lg:text-5xl pb-2">
          Reliable Minerals.
        </h1>

        <h1 className="heading-font text-[#eeedd3] text-3xl sm:text-4xl lg:text-5xl pb-1">
          Global Reach.
        </h1>

        <br />

        {/* PARAGRAPH */}
        <p className="para-font text-white text-sm sm:text-base lg:text-lg leading-relaxed">
          High-performance quartz materials for engineered <br />
          stone manufacturers. Precision-processed for purity,<br />
          whiteness, and optimal particle distribution.
        </p>
      </div>
    </section>
  );
}

