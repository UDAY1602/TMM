import aboutsection4bg from "../../Assets/abtsec4.png";
export default function Section4() {
  return (
    <section id="manifacturing-facility"
      className="
        relative w-full
        h-[320px]
        sm:h-[420px]
        lg:h-[565px]
        flex justify-center
        pt-16 sm:pt-20 lg:pt-28
        px-6 sm:px-10
  "
      style={{
        backgroundImage: `url(${aboutsection4bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      <div className="relative z-10 max-w-4xl text-center text-[#eeedd3]">
        
        <p className="bankgothiclightreg text-xs sm:text-xl tracking-widest uppercase text-[#eeedd3] mb-2">
          WHAT MAKES
        </p>

        
        <h1 className="rebeltypedog text-1xl sm:text-2xl md:text-3xl mb-3">
          TANUJASREEKESH
        </h1>

        
        <p className="montserratthin text-sm md:text-2xl text-[#eeedd3] leading-relaxed">
          Our leadership combines industry experience, technical expertise, and <br/>
          a vision to deliver high-value mineral solutions for global markets.
        </p>
      </div>
    </section>
  );
}
