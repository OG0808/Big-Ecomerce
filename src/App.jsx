import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/nabvar/Navbar.jsx";
import HeadphonesPage from "./pages/HeadphonesPage.jsx";

function App() {
  return (
    <main className="main__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphon" element={<HeadphonesPage/>} />
      </Routes>
    </main>
  );
}

export default App;
