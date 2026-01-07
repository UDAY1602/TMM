import React, { useEffect, useRef, useState } from "react";
import mapimg from "../../assets/mapimg.png";

/* ===== COUNTRY → CODE MAP ===== */
const COUNTRY_CODE_MAP = {
  Afghanistan: "+93",
  Albania: "+355",
  Algeria: "+213",
  Andorra: "+376",
  Angola: "+244",
  Argentina: "+54",
  Armenia: "+374",
  Australia: "+61",
  Austria: "+43",
  Azerbaijan: "+994",
  India: "+91",
  USA: "+1",
  UK: "+44",
  UAE: "+971",
};

export default function ContactHero() {
  const formEndRef = useRef(null);
  const rightColRef = useRef(null);

  const [isFixed, setIsFixed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const MAP_WIDTH = 600; // fixed safe width

  /* ===== MAP SCROLL + RESIZE LOGIC ===== */
  const calculatePosition = () => {
    if (!formEndRef.current || !rightColRef.current) return;

    // Disable sticky below desktop
    if (window.innerWidth < 1024) {
      setIsFixed(false);
      return;
    }

    const rightColWidth = rightColRef.current.offsetWidth;
    if (rightColWidth < MAP_WIDTH) {
      setIsFixed(false);
      return;
    }

    const navbarHeight = 72;
    const mapHeight = window.innerHeight - 120;
    const formEndTop = formEndRef.current.getBoundingClientRect().top;

    if (formEndTop > navbarHeight + mapHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    calculatePosition();
    window.addEventListener("scroll", calculatePosition);
    window.addEventListener("resize", calculatePosition);
    return () => {
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  /* ===== FORM HANDLERS ===== */
  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setCountry(selected);
    setCountryCode(COUNTRY_CODE_MAP[selected] || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section className="w-full bg-[#1e1e1e] relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full">

          {/* ---------- HERO ---------- */}
          <div className="px-6 sm:px-10 md:px-20 pt-20 pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl oswold-reg text-[#eeedd3] font-medium mb-12">
              Reach out to us
            </h1>

            <div className="mb-10">
              <p className="text-lg font-semibold text-gray-400 opacity-50 mb-2">
                Contact Information
              </p>
              <p className="text-lg text-white mb-1">
                +91-961 235 5555
              </p>
              <a
                href="mailto:info@tanujasreekesh.com"
                className="text-lg text-white hover:underline"
              >
                info@tanujasreekesh.com
              </a>
            </div>

            <div className="mb-10">
              <p className="text-lg text-gray-400 opacity-50 mb-2">
                Registered Address
              </p>
              <p className="text-xl leading-relaxed text-gray-200">
                Sy No: 440/1 Musunuru (V), <br />
                C.S Puram (M), Prakasam (DT), <br />
                Andhra Pradesh, India - 523112
              </p>
            </div>

            {/* ===== MOBILE MAP ===== */}
            <div className="lg:hidden mt-8">
              <img
                src={mapimg}
                alt="Map location"
                className="w-full h-[260px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* ---------- FORM ---------- */}
          <section className="px-6 sm:px-10 md:px-20 py-20">
            <div className="w-full max-w-[600px]">

              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-medium oswold-reg text-[#e6e4d8] mb-8">
                Enquire here:
              </h1>

              <form
                className="flex flex-col gap-[14px]"
                onSubmit={handleSubmit}
              >
                <input
                  required
                  placeholder="Name *"
                  className="w-full rounded-md text-[14px]"
                  style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  <input
                    required
                    placeholder="Email *"
                    className="w-full rounded-md text-[14px]"
                    style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                  />
                  <input
                    required
                    placeholder="Contact Number *"
                    className="w-full rounded-md text-[14px]"
                    style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  <select
                    required
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full rounded-md text-[14px]"
                    style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                  >
                    <option value="">Select your country *</option>
                    {Object.keys(COUNTRY_CODE_MAP).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  <input
                    required
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    placeholder="Country Code *"
                    className="w-full rounded-md text-[14px]"
                    style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                  />
                </div>

                <select
                  required
                  className="w-full rounded-md text-[14px]"
                  style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                >
                  <option value="">Product Category *</option>
                  <option>Quartz</option>
                  <option>Feldspar</option>
                  <option>Silica Sand</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-md text-[14px]"
                  style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
                />

                <button
                  type="submit"
                  className="mt-2 w-full rounded-md text-sm monts-reg text-[#eeedd3]"
                  style={{ padding: "14px", background: "#2b2b2b", border: "none" }}
                >
                  Submit
                </button>
              </form>

              {/* ===== STOP MARKER ===== */}
              <div ref={formEndRef} className="h-[1px]" />
            </div>
          </section>
        </div>

        {/* ================= RIGHT MAP (DESKTOP) ================= */}
        <div ref={rightColRef} className="hidden lg:block relative">
          <div className="relative min-h-full">
            <div
              className={isFixed ? "fixed top-[72px]" : "absolute bottom-0"}
              style={{
                right: "2.5%",
                width: `${MAP_WIDTH}px`,
                height: "calc(100vh - 120px)",
              }}
            >
              <img
                src={mapimg}
                alt="Map location"
                className="w-full h-full object-cover p-4 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SUBMIT POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
          <div className="bg-[#1e1e1e] p-8 rounded-md max-w-[420px] w-full text-center">
            <h2 className="text-[22px] oswold-reg text-[#eeedd3] mb-4">
              Thank you!
            </h2>
            <p className="text-sm text-[#cfcfcf] mb-6">
              Your enquiry has been successfully submitted.
              Our team will get back to you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full rounded-md text-sm text-[#eeedd3]"
              style={{ padding: "12px", background: "#2b2b2b", border: "none" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
