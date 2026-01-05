import React, { useState } from "react";

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

  Bahamas: "+1",
  Bahrain: "+973",
  Bangladesh: "+880",
  Barbados: "+1",
  Belarus: "+375",
  Belgium: "+32",
  Belize: "+501",
  Benin: "+229",
  Bhutan: "+975",
  Bolivia: "+591",
  "Bosnia and Herzegovina": "+387",
  Botswana: "+267",
  Brazil: "+55",
  Brunei: "+673",
  Bulgaria: "+359",
  "Burkina Faso": "+226",
  Burundi: "+257",

  Cambodia: "+855",
  Cameroon: "+237",
  Canada: "+1",
  Chad: "+235",
  Chile: "+56",
  China: "+86",
  Colombia: "+57",
  Congo: "+242",
  "Costa Rica": "+506",
  Croatia: "+385",
  Cuba: "+53",
  Cyprus: "+357",
  "Czech Republic": "+420",

  Denmark: "+45",
  "Dominican Republic": "+1",

  Ecuador: "+593",
  Egypt: "+20",
  "El Salvador": "+503",
  Estonia: "+372",
  Ethiopia: "+251",

  Finland: "+358",
  France: "+33",

  Georgia: "+995",
  Germany: "+49",
  Ghana: "+233",
  Greece: "+30",
  Guatemala: "+502",

  Haiti: "+509",
  Honduras: "+504",
  Hungary: "+36",

  Iceland: "+354",
  India: "+91",
  Indonesia: "+62",
  Iran: "+98",
  Iraq: "+964",
  Ireland: "+353",
  Israel: "+972",
  Italy: "+39",

  Jamaica: "+1",
  Japan: "+81",
  Jordan: "+962",

  Kazakhstan: "+7",
  Kenya: "+254",
  Kuwait: "+965",

  Laos: "+856",
  Latvia: "+371",
  Lebanon: "+961",
  Lithuania: "+370",
  Luxembourg: "+352",

  Malaysia: "+60",
  Maldives: "+960",
  Mexico: "+52",
  Mongolia: "+976",
  Morocco: "+212",

  Nepal: "+977",
  Netherlands: "+31",
  "New Zealand": "+64",
  Nigeria: "+234",
  Norway: "+47",

  Oman: "+968",

  Pakistan: "+92",
  Philippines: "+63",
  Poland: "+48",
  Portugal: "+351",
  Qatar: "+974",

  Romania: "+40",
  Russia: "+7",

  "Saudi Arabia": "+966",
  Singapore: "+65",
  "South Africa": "+27",
  "South Korea": "+82",
  Spain: "+34",
  "Sri Lanka": "+94",
  Sweden: "+46",
  Switzerland: "+41",

  Thailand: "+66",
  Turkey: "+90",

  UAE: "+971",
  UK: "+44",
  USA: "+1",
  Ukraine: "+380",

  Vietnam: "+84",
  Yemen: "+967",
  Zimbabwe: "+263",
};

export default function ContactHero() {
  const [showPopup, setShowPopup] = useState(false);
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCountryCode(COUNTRY_CODE_MAP[selectedCountry] || "");
  };

  return (
    <section className="min-h-screen bg-[#1e1e1e] px-6 sm:px-10 md:px-28 py-20 md:py-24 relative">

      {/* FORM CONTAINER */}
      <div className="w-full max-w-[600px]">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-[46px] font-medium oswold-reg text-[#e6e4d8] mb-8">
          Enquire here:
        </h1>

        {/* FORM */}
        <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>

          {/* Name */}
          <input
            placeholder="Name *"
            required
            className="w-full rounded-md text-[14px]"
            style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
          />

          {/* Email + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <input
              placeholder="Email *"
              required
              className="w-full rounded-md text-[14px]"
              style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
            />
            <input
              placeholder="Contact Number *"
              required
              className="w-full rounded-md text-[14px]"
              style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
            />
          </div>

          {/* Country + Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <select
              value={country}
              onChange={handleCountryChange}
              required
              className="w-full rounded-md text-[14px] appearance-none"
              style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
            >
              <option value="">Select your country *</option>
              {Object.keys(COUNTRY_CODE_MAP).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <input
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              placeholder="Country Code *"
              required
              className="w-full rounded-md text-[14px]"
              style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
            />
          </div>

          {/* PRODUCT CATEGORY (RESTORED) */}
          <div className="relative">
            <select
              required
              className="w-full rounded-md text-[14px] appearance-none"
              style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
            >
              <option value="">Product Category *</option>
              <option>Quartz</option>
              <option>Feldspar</option>
              <option>Silica Sand</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#222] pointer-events-none">
              ▼
            </span>
          </div>

          {/* Message */}
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full rounded-md text-[14px]"
            style={{ padding: "14px 16px", background: "#bfbfbf", border: "none" }}
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-md text-sm monts-reg text-[#eeedd3]"
            style={{ padding: "14px", background: "#2b2b2b", border: "none" }}
          >
            Submit
          </button>

        </form>
      </div>

      {/* POPUP */}
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
