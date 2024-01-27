import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/nabvar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Product from "./components/productShop/Product.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import ProductCatalogPage from "./pages/ProductCatalogPage.jsx";

function App() {
  return (
    <main className="main__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productcatalog/:page" element={<ProductCatalogPage/>} />
        <Route path="/product/:name" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
