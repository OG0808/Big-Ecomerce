import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/nabvar/Navbar.jsx";
import HeadphonesPage from "./pages/HeadphonesPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import SpekersPages from "./pages/SpekersPages.jsx";
import EarphonesPage from "./pages/EarphonesPage.jsx";
import XX99MarkIIPage from "./pages/products/XX99MarkIIPage.jsx";
import XX99MarKI from "./components/productsHeadphones/XX99MarKI/XX99MarKI.jsx";
import XX59Pages from "./pages/products/XX59Pages.jsx";

function App() {
  return (
    <main className="main__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphon" element={<HeadphonesPage/>} />
        <Route path="/spekers" element={<SpekersPages/>}/>
        <Route path="/earphone" element={<EarphonesPage/>}/>
        <Route path="/XX99MarkII" element={<XX99MarkIIPage/>}/>
        <Route path="/XX99MarkI" element={<XX99MarKI/>}/>
        <Route path="/XX59Headphones" element={<XX59Pages/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
