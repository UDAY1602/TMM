import section1bg from "../../assets/section1bg.png";

export default function Section1() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${section1bg})` }}
    >
      <div className="pl-40">
        
        <h1 className="heading-font text-[#eeedd3] text-5xl pb-2">
          Reliable Minerals.
        </h1>

        <h1 className="heading-font text-[#eeedd3] text-5xl pb-1">
          Global Reach.
        </h1>

        <br />
      
        <p className="para-font text-white leading-relaxed text-s">
          High-performance quartz materials for engineered <br />
          stone manufacturers. Precision-processed for purity,<br />
          whiteness, and optimal particle distribution.
        </p>
      </div>
    </div>
  );
}
