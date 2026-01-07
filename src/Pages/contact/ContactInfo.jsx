import contactpgleft from "../../assets/contactpgleft.png";
import section7right from "../../assets/section7right.png";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#313131] md:min-h-[300px]">

      {/* LEFT IMAGE PANEL */}
      <div className="w-full md:w-3/5 h-[200px] md:h-auto relative overflow-hidden">
        <img
          src={contactpgleft}
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* RIGHT IMAGE PANEL */}
      <div
        className="w-full md:w-2/5 h-[200px] md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${section7right})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            onClick={goToProducts}
            className="
              oswold-reg text-[#313131] tracking-[0.2em]
              md:text-[48px]
              cursor-pointer
              hover:opacity-80
              transition
            "
          >
            View Products
          </p>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
