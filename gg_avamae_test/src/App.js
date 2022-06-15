import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import MainNavigation from "./components/general/MainNavigation";
import Footer from "./components/general/Footer";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-us" element={<AboutUsPage />}/>
        <Route path="/contact-us" element={<ContactUsPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
