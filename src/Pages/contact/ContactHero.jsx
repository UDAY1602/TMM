import React from "react";
import mapimg from "../../assets/mapimg.png";

const ContactHero = () => {
  return (
    <section className="w-full min-h-screen bg-[#1e1e1e] flex flex-col md:flex-row">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-20 py-16 text-white flex flex-col justify-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-12">
          Reach out to us
        </h1>

        {/* Contact Information */}
        <div className="mb-8 md:mb-10">
          <p className="text-sm uppercase text-gray-400 mb-2">
            Contact Information
          </p>
          <p className="text-lg mb-1">+91-961 235 5555</p>
          <a
            href="mailto:info@tanujasreekesh.com"
            className="text-lg hover:underline"
          >
            info@tanujasreekesh.com
          </a>
        </div>

        {/* Address */}
        <div className="mb-8 md:mb-10">
          <p className="text-sm uppercase text-gray-400 mb-2">
            Registered Address
          </p>
          <p className="text-base leading-relaxed text-gray-200">
            Sy No: 440/1 Musunuru (V), <br />
            C.S Puram (M), Prakasam (DT), <br />
            Andhra Pradesh, <br />
            India - 523112
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-sm uppercase text-gray-400">
            Social Media
          </p>

          <div className="flex gap-3">
            <div className="w-6 h-6 bg-gray-400 hover:bg-white transition"></div>
            <div className="w-6 h-6 bg-gray-400 hover:bg-white transition"></div>
            <div className="w-6 h-6 bg-gray-400 hover:bg-white transition"></div>
            <div className="w-6 h-6 bg-gray-400 hover:bg-white transition"></div>
          </div>
        </div>

      </div>

      {/* RIGHT MAP SECTION */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto bg-[#1e1e1e] relative overflow-hidden">

        {/* TEMPORARY MAP IMAGE (REFERENCE) */}
        <img
          src={mapimg}
          alt="Map location"
          className="w-full h-full object-cover px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10"
        />

        {/*
        FUTURE: Google Maps iframe
        <iframe
          title="Location Map"
          src=""
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
        */}

      </div>

    </section>
  );
};

export default ContactHero;
