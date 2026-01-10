import React, { useEffect, useRef, useState } from "react";


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

  const MAP_WIDTH = 600;

 
  const calculatePosition = () => {
    if (!formEndRef.current || !rightColRef.current) return;

    if (window.innerWidth < 1024) {
      setIsFixed(false);
      return;
    }

    if (rightColRef.current.offsetWidth < MAP_WIDTH) {
      setIsFixed(false);
      return;
    }

    const navbarHeight = 72;
    const mapHeight = window.innerHeight - 120;
    const formEndTop = formEndRef.current.getBoundingClientRect().top;

    setIsFixed(formEndTop > navbarHeight + mapHeight);
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

        <div className="w-full">

      
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

          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <p className="text-lg text-gray-400 opacity-50 monts-semibold">
              Social Media
            </p>

            <div className="flex gap-3">
             
              <a
                href=""
                aria-label="Facebook"
                className="w-6 h-6 bg-[#eeedd3] hover:bg-white transition flex items-center justify-center"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="
                  alt="Facebook"
                  className="w-4 h-4 object-contain"
                />
              </a>

            
              <a
                href=""
                aria-label="Instagram"
                className="w-6 h-6 bg-[#eeedd3] hover:bg-white transition flex items-center justify-center"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC"
                  alt="Instagram"
                  className="w-4 h-4 object-contain"
                />
              </a>

              
              <a
                href=""
                aria-label="LinkedIn"
                className="w-6 h-6 bg-[#eeedd3] hover:bg-white transition flex items-center justify-center"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain"
                />
              </a>

             
              <a
                href=""
                aria-label="Twitter"
                className="w-6 h-6 bg-[#eeedd3] hover:bg-white transition flex items-center justify-center"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC"
                  alt="Twitter"
                  className="w-4 h-4 object-contain"
                />
              </a>
            </div>
          </div>


         
            <div className="lg:hidden mt-8">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24847.491372712644!2d79.31675241019414!3d15.16114795531263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4cbe0f9d73d01%3A0x746a479d2a53a245!2sTANUJASREEKSESH%20MINES%20AND%20MINERALS!5e0!3m2!1sen!2sin!4v1767846686774!5m2!1sen!2sin"
               
                className="w-full h-[260px] rounded-md"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

         
          <section className="px-6 sm:px-10 md:px-20 py-20">
            <div className="w-full max-w-[600px]">
              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-medium oswold-reg text-[#e6e4d8] mb-8">
                Enquire here:
              </h1>

              <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
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

             
              <div ref={formEndRef} className="h-[1px]" />
            </div>
          </section>
        </div>

        
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
              <iframe
                title="Tanujasreekesh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24847.491372712644!2d79.31675241019414!3d15.16114795531263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4cbe0f9d73d01%3A0x746a479d2a53a245!2sTANUJASREEKSESH%20MINES%20AND%20MINERALS!5e0!3m2!1sen!2sin!4v1767846686774!5m2!1sen!2sin"
                className="w-full h-full rounded-md"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

     
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