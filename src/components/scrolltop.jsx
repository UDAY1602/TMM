import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            bg-[#939171]
            p-3 rounded-full
            shadow-lg
            transition-all duration-300
            hover:scale-110
            flex items-center justify-center
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#313131"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

      )}
    </>
  );
}
