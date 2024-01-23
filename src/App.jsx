import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/nabvar/Navbar.jsx";
import HeadphonesPage from "./pages/HeadphonesPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import SpekersPages from "./pages/SpekersPages.jsx";
import EarphonesPage from "./pages/EarphonesPage.jsx";
import Product from "./components/productShop/Product.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  return (
    <main className="main__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphon" element={<HeadphonesPage/>} />
        <Route path="/spekers" element={<SpekersPages/>}/>
        <Route path="/earphone" element={<EarphonesPage/>}/>
        <Route path="/product/:name" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
