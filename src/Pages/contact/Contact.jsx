import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactLocation from "./contactLocation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <main>

    <ContactLocation/>
    <ContactInfo />
    </main>
  );
}
