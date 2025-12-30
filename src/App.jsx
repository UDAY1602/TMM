import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import ScrollToTop from "./components/scrolltop";
import Contact from "./Pages/contact/Contact";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
