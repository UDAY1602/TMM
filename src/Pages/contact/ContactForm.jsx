import React from "react";

export default function ContactHero() {
  return (
    <section className="min-h-screen bg-[#1e1e1e] px-6 sm:px-10 md:px-28 py-20 md:py-24">
      
      {/* FORM CONTAINER */}
      <div className="w-full max-w-[600px]">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-[46px] font-medium oswold-reg text-[#e6e4d8] mb-8">
          Enquire here:
        </h1>

        {/* FORM */}
        <form className="flex flex-col gap-[14px]">

          {/* Name */}
          <input
            placeholder="Name *"
            className="w-full rounded-md text-[14px] text-[#222] placeholder-[#313131]"
            style={{
              padding: "14px 16px",
              background: "#bfbfbf",
              border: "none",
            }}
          />

          {/* Email + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <input
              placeholder="Email *"
              className="w-full rounded-md text-[14px] text-[#313131] placeholder-[#313131]"
              style={{
                padding: "14px 16px",
                background: "#bfbfbf",
                border: "none",
              }}
            />
            <input
              placeholder="Contact Number *"
              className="w-full rounded-md text-[14px] text-[#222] placeholder-[#313131]"
              style={{
                padding: "14px 16px",
                background: "#bfbfbf",
                border: "none",
              }}
            />
          </div>

          {/* Country + Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <input
              placeholder="Select your country *"
              className="w-full rounded-md text-[14px] text-[#222] placeholder-[#313131]"
              style={{
                padding: "14px 16px",
                background: "#bfbfbf",
                border: "none",
              }}
            />
            <input
              placeholder="Country Code *"
              className="w-full rounded-md text-[14px] text-[#222] placeholder-[#313131]"
              style={{
                padding: "14px 16px",
                background: "#bfbfbf",
                border: "none",
              }}
            />
          </div>

          {/* Product Category */}
          <div className="relative">
            <select
              className="w-full rounded-md text-[14px] text-[#222] appearance-none"
              style={{
                padding: "14px 16px",
                background: "#bfbfbf",
                border: "none",
              }}
            >
              <option>Product Category *</option>
              <option>Quartz</option>
              <option>Feldspar</option>
              <option>Silica Sand</option>
            </select>

            {/* Dropdown arrow */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#222] pointer-events-none">
              ▼
            </span>
          </div>

          {/* Message */}
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full rounded-md text-[14px] text-[#222] placeholder-[#313131] resize-none"
            style={{
              padding: "14px 16px",
              background: "#bfbfbf",
              border: "none",
            }}
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-md text-sm monts-reg font-thin text-[#eeedd3] hover:bg-[#1f1f1f] transition"
            style={{
              padding: "14px",
              background: "#2b2b2b",
              border: "none",
            }}
          >
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}
